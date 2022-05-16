# Optics

[TOC]

## Operators

There is a general patterns applied to most operators in the Optics library. This means that the name of an operator can usually be guessed.

| Symbol | Explenation                                                  | Example    |
| ------ | ------------------------------------------------------------ | ---------- |
| `^`    | Denotes that the action **views/gets** something             | `^.`       |
| `.`    | Denotes the absence of any other modifiers                   | `^.`       |
| `%`    | Denotes an actinon which **modifies** using a function       | `%~`       |
| `~`    | Denotes that this action **updates/sets** something          | `%~`, `.~` |
| `<`    | A prefix for update/set actions, which will return the altered value as well as the whole structure | `<+~`      |
| `<<`   | A prefix for update/set action, which will return the old value | `<<+~`     |

## Lenses

A lens abstracts the getter and setter into one value. A lens can focus a single type and always returns a type (so a lens can't return `a` from `Either a b`, because the type could also be `b`).

Their are two types of lenses:

* Simple lens: `Lens' s a`, where `s` is the structure and `a` is the focus type. 
  This lens always returns the same type as it gets and it can be created with `makeLenses`
* Polymorphic Lens: `Lens s t a b`, where `s` is the input structure, `t` the output structure, `a` the input focus and `b` the output focus.
  This type of lenses can change the types of the structure and focus.

```haskell
data Settings a = Settings {
		_path :: String, 
		_object :: a
	} derving (Show)
	
path :: Lens' Settings a
path = lens getter setter
	where
		getter :: Settings a -> String
		getter = _path
		setter :: Settings a -> String -> Settings a
		setter oldSettings newPath = oldSettings{ _path = newPath }

object :: Lens (Settings a) -> (Settings b) -> a -> b
object = lens getter setter
	where
		getter :: Settings a -> a
		getter = _object
		setter :: Settings a -> b -> Settings b
		setter oldSettings newObj = oldSettings{ _object = newObj }
```

### Lens Laws

1. You get back what you set (set-get)
   When you set something, you always get the same thing back

   ```haskell
   view myLens (set myLens newValue structure) == newValue
   ```

2. Setting back what you got doesn't do anything (get-set)
   When you set what `view` returned to you, than nothing changes

   ```haskell
   set myLens (view myLens structure) structure == structure
   ```

3. Setting twice is the same as setting once (set-set)
   Setting multiple times the same value does always do the same thing

   ```haskell
   set myLens diffrentValue (set myLens diffrentValue structure) == set myLens diffrentValue structure
   ```

### Virtual Fields

Lenses can be used to provide an abstraction layer above the actual data structure. Virtual Fields can be created by writing custom lens getters and setter. The getter and setter can apply a function to convert the field. 

This can also be done later, when the underlying data structure changes but the public API shouldn't change.

### Lenses & Operators

The following operators can be used with lenses:

* `view :: Lens' s a -> s -> a`
  Returns the value which the given lens focuses on
* `set :: Lens s t a b -> b -> s -> t` or `set :: Lens' s a -> a -> s -> s`
  Sets the value of the focus of a lens
* `over :: Lens s t a b -> (a -> b) -> s -> t` or `over :: Lens' s a -> (a -> a) -> s -> s`
  Fetches the focused value, applies the given function and then uses set t set the focused value

There are infix operator which are synonyms to the operators above:

| Operator | Action       | Type                                 |
| -------- | ------------ | ------------------------------------ |
| `^.`     | flipped view | `s -> Lens' s a -> a`                |
| `.~`     | set          | `Lens s t a b -> b -> s -> t`        |
| `%~`     | over         | `Lens s t a b -> (a -> b) -> s -> t` |

Some common lenses are :

* `_1 :: Lens (a, other) (b, other) a b`
  Sets the focus on the first element of a tuple
* `_2 :: Lens (other, a) (other, b) a b`
  Sets the focus on the second element of a tuple

```haskell
data Payload = Payload
  { _weightKilos :: Int,
    _cargo :: String
  }
  deriving (Show)
  
makeLenses ''Payload

data Ship = Ship {_payload :: Payload}
  deriving (Show)

makeLenses ''Ship

serenity :: Ship
serenity = Ship (Payload 5000 "Livestock")

-- get
>>> view payload . cargo serenity
-- > "Livestock"
>>> serenity ^. payload . cargo 
-- > "Livestock"

-- set
>>> set (payload . cargo) "Medicine" serenity
>>> serenity & payload . cargo .~ "Medicine"
>>> serenity 
		& payload . cargo .~ "Chocolate"
		& payload . weightKilos .~ 2310

-- over
>>> serenity 
		& payload . weightKilos .% subtract 1000
		& payload . cargo .~ "Chocolate"
```

### Composing Lenses

Lenses compose very easily.  Imagin each lens being a domino which can be fitted together if the types match. From the expression below, we'll get `address :: Lens' Person StreetAddress`. The `Address` type is "hidden" in the composition. ![image-20220429235216484](res/image-20220429235216484.png)

At the the right end of a domino line, we can use an action to do something, like modifying the focused value. ![image-20220429235453171](res/image-20220429235453171.png)

Here an actual Example:
```haskell
wave :: Wool -> Sweater
weave Wool = Sweater

gameState :: (Player, Item Wool)
gameState = (Player Item Wool 5)

-- crafts a sweater
gameState' :: (Player, Item Sweater)
gameState' = over (_2 . material ) weave gameState
```

## Folds

A fold is like a query and can:

* focus on multiple things
* can only get, not set data

A fold has the data type `Fold s a`, where the `s` is the structure on which the query runs and `a` is the return value. A fold returns zero or more from `a`

A fold, like a lens, doesn't contain data. It is an "operation" which knows how to extract zero or more elements from an type.

### Operators

With `folded : Foldable f => Fold (f a) a` an instance of `Foldable` like a list can be converted into a `Fold`. 

A lens can be used to focus in on an element of a fold. This works because every lens has a getter to focus on one element exactly. This fits into the definition of a fold which needs to focus on zero or more elements.

To use a fold on data the function `toListOf :: Fold s a -> s -> [a]` can be used. This will take a `Fold` and a `Foldable` structure and extracts `[a]` out of it. A synonym is `(^..) :: s -> Fold s a -> [a]`

```haskell
data CartItem = 
	CartItem { _name :: String
			 , _count :: Int}
makeLenses ''CarItem

cart :: [CartItem]
cart = [CartItem "Black Shirt" 3, CarItem "Water Bottle" 2]

-- get a list of all items
cart ^.. folded -- will return [CartItem "Black Shirt" 3, CarItem "Water Bottle" 2]
toListOf folded cart -- the same as above

cart ^.. folded . name -- ["Black Shirt", "Water Bottle"]
toListOf (folded . name) cart -- the same as above
```



