# Erweiterte Konzepte

## Object Initializers

```c#
class Student {
    public string Name;
    public int Id {get; set;} // setter muss öffentlich sein
    
    public Student(string Name) {
        this.Name = Name;
    }
}

Student s1 = new Student("John") {Id = 3};
```

## Anonymous Types

```c#
var obj = new {
    Name = "John",
    Id = 100;
}
```

oder sogar kürzer:

```c#
Student s1 = ...;
var obj = new {
    s1.Name,
    s1.Id
}
```

## Extension Methods

```c#
class Fraction {
    public int z, n;
    public Fraction(int z, int n) {...}
}

static class FractionUtils {
    public static Fraction Inverse(this Fraction f) {
        return new Fraction(f.n, f.z);
    }
}
```

Die Klasse, in welcher die die Extension Methode enthält muss als `static` deklariert werden. Die  Extension-Method selbst muss selbst auch `static` sein und der erste Parameter muss mit `this` annotiert werden. 

Dass FractionUtils zieht, muss die Klasse importiert werden.

## Lambda

```c#
delegate int FunctionName(int x);

void Apply(FunctionName f, int[] data) {
   	for(int x : data) {
        f(x);
    }
}

Apply(x => x + 2, array);
```

Mit weniger oder mehr argumente ist es folgendermassen:

```c#
() => ...;
x => ....;
(x, y) => ...;
x => {
    return x;
}
```

Lambdas in C# können auf den Scope, in welchem sie definiert wurden, zu greiffen;

Delegates können auch generisch sein:

```
delegate void Del<T>(T item);
```

Es gibt vordefinierte Delegate-Typen:

```c#
delegate void Action ();
delegate void Action<T1> (T1 a);
delegate void Action<T1, T2> (T1 a, T2 b);
delegate void Action<T1, T2, T3> (T1 a, T2 b, T3 c);

delegate TRes Func<TRes> ();
delegate TRes Action<T1, TRes> (T1 a);
delegate TRes Action<T1, T2, TRes> (T1 a, T2 b);
delegate TRes Action<T1, T2, T3, TRes> (T1 a, T2 b, T3 c);
```

## LINQ

```c#
string[] cities = {...};

IEnumerable<string> result = 
    from c in cities 
    where c.StartsWith("B")
    orderby c
    select c.ToUpper();

IEnumerable<string> result2 = students
    .Where(c => c.StartsWith("B"))
    .OrderBy(c => c)
    .Select(s => new {s.Id, s.Name});
```

![image-20240223144325748](./res/01_Erweiterte%20Konzepte/image-20240223144325748.png)

```
QueryExpr = 
	"from" [Type] variable "in" SrcExpr QueryBody.
	
QueryBody =
	
```

![image-20240223144801525](./res/01_Erweiterte%20Konzepte/image-20240223144801525.png)

![image-20240223144443348](./res/01_Erweiterte%20Konzepte/image-20240223144443348.png)

Mit LINQ können auch XML Elemente generiert werden, wie auch auf `DataSets`.

## `dynamic` Typ

Eine Variable vom Typ `dynamic` kann jeden Typ beinhalten und kann auch jederzeit geändert werden. Bei Compilezeit wird die Typ-Sicherheit abgeschaltet. 

![image-20240223145617875](./res/01_Erweiterte%20Konzepte/image-20240223145617875.png)

## Reflection

## Covariance

In diesem Fall darf den generischen Parameter `T` nur als Rückgabe-Typ verwendet werden.

````c#
interface Sequence<out T> {
    T this[int i] { get; }
}

Sequence<String> stringSeq = ...;
Sequence<Object> objSeq = stringSeq;
````

Die alternative ist Kontracovarianz:

```c#
interface IComparer<in T> {
   int Compare(T x, T y);
}

IComparer<Object> objectComp = ...;
IComparer<String> stringComp = objectComp;
```

## Nullable

```c#
Nullable<double> = pi = 3.14;
double? pi = 3.14; // shorthand for Nullable<double>
if(pi.HasValue) {
    pi.Value + 1;
} 
double pi2 = pi ?? 1; // if pi is null, 1 is returned

// with NullableContextOptions enabled
string? str = null;
string[]? splitted = str?.Split(",") //Only calls Split, if str is not null, otherwise null is returned
```

Per Default (aktuell) können primitive Typen Nullable gemacht werden mit dem Fragezeichen (e.g. `int?`).

Wenn `NullableContextOptions` auf `enabled` gesetzt wird, dann gibt es eine Warnung, wenn ein Referenz-Typ ohne Fragezeichen (z.B. `string`) null  zuweist. Ebenfalls gibt es eine Warnung, wenn auf ein nullable Referenz-Typ zugegriffen wird, ohne das überprüft wird, ob es null ist. 

## Tuple

Neben den normalen Tuples (z.B. `(3, 2)`) können auch named Tuples erstellt werden:

```c#
var p = (X: 3, Y: 2);
int x = p.X;

var (x, y) = p; // deconstruction
var (x2, _) = p; 
```

## Deconstruction

Eine eigene Klasse kann auch dekonstruiert werden:

```c#
public struct Complex{
    public double re;
    public double im;
    
    public Complex(double re, double im) {...}
    
    public void Deconstruct(out double re, out double im) {
        re = this.re;
        im = this.im;
    }
}

Copmlex c = new Complex(3, 2);
var (x, y) = c; // allows deconstructing of custom struct/classes
```

## Imports

C# hat static imports: 
```c
//alows using all methods in System.Console with specifying Console
using static System.Console; 

using AliasToMyClas = NameSpace1.MyClass;

WriteLine("Hello, Test");
new MyClass();
```

## Default Interface Methoden

```c#
interface IDefaultInterfaceMethod {
    public void DefaultMethod() {
        // a default implementation
    }
}
```

## Records

```c#
records Person{
    public string? FirstName {get; init; }
    public string? LastName {get; init; }
}

var person = new Person { FirstName = "mads", LastName = "Nielson"};
var otherPerson = person with { LastName = "Torgesen" };

var name = person.FirstName;
```

C# generiert automatisch eine Equal methode.

## Threads

```c#
new Thread(() => some stuff).Start()
```

![image-20240301145937977](./res/01_Erweiterte%20Konzepte/image-20240301145937977.png)

Threads sind teuer, zum erstellen, zum laufen und zum zerstören, da bei allem ein Mode-Switch vernöten ist. Zusätzlich, wenn der aktive Thread gewechselt wird, dann gibt es zusätzlich noch ein Context-Switch.

## Coroutines

Courtines geben die Kontrolle aktive selbst ab. Dies hat den Vorteil, dass es keinen Kontext und Mode-Switch benötigt. Dies kommt mit der Einschränkung, dass dies nicht Preemptive ist.

```c#
class MyClass : IEnumerable<string> {
    public IEnumerator<string> GetEnumerator() 
    {
        yield return first;
        yield return second;
        yield return third;
        yield break; // specifies that the enumerator is finished
    }
}
```

## Tasks

```c#
Task task = new Task(() => ...);
task.Start();

Task.Run(() => ...); // creates and runs the task

Task<string> task2 = Task.Run(() => "Hello");
Console.WriteLine(task2.Result); // Result blocks until task2 is done

Task.Delay(1000).Wait(); 

task2.ContinueWith(t => Console.WriteLine(t)); // is exectued after task2 completed
// ContinueWith calls the lambda even if task2 is already 
//done when ContinueWith is executed

// alternatively it can be written with await:
async static void CallerWithAsync() {
    // await starts (if not already started) and waits for the task to finish
    String result = await Task.Run(() => "Test");
    Console.WriteLine(result);
}

Task<string> task3 = Task.Run(() => "test");
// returns a Task which completes once all the given Tasks finished
string[] all = await Task.WhenAll(task3, task2);

// returns a Task which completes once one of the given Tasks finished
string first = await Task.WhenAny(task3, task2);
```

Eine Methode, welche ein Task startet, enden nach Konvention in Async (z.B. `GreetingAsync(...)`)

Ein Task kann folgendermassen gecancled werden:

```c#
CancellationTokenSource source;
todo
```



### Mit Timeouts

```c#
var task = Task.Run(() => ...);

bool isCompletedSuccessfully = task.Wait(TimeSpan.FromMilliseconds(3000));
if(completedSuccessfully) {
    return task.Result;
} else {
    throw new TimeoutException("");
}

// alternative
var result = Task.WhenAny(task, Task.Delay(3000));
if(result == task) {
    return task.Result;
} else {
    throw new TimeoutException("");
}
```

### Control Flow

![image-20240301152814254](./res/01_Erweiterte%20Konzepte/image-20240301152814254.png)

Ein interesanteres Beispiel ist das folgende: Da `DoAsync()` mit `await task` blockiert wird, wird die Kontrolle über den Thread wieder an den  "Rufer" zurück gegeben. Wenn jetzt `task` fertig ist, dann wird ein "coroutine transfer" durchgeführt. Dies heisst, dass asynchrone Methode können von unterschiedlichen Threads bearbeitet werden.

![image-20240301152926856](./res/01_Erweiterte%20Konzepte/image-20240301152926856.png)

Das wird für folgenden Code noch extremer:

```c#
async void DoAsync() {
    while(...) {
        Task<int> task = Task.Run(...);
        int result = await task;
    }
}
```



![image-20240301153154228](./res/01_Erweiterte%20Konzepte/image-20240301153154228.png)

### Pitfalls

Tasks benützt Background Threads. Dies heisst, die Applikation kann schliessen, obwohl noch Tasks am laufen sind.

Ein zweiter Pitfall ist, dass Exception verpuffen, wenn nicht auf den Task gewartet wird. 

```c#
async void DoAsync() {
	throw Exception();
}

DoAsync(); // without await, Wait(), or accesing Result. This won't throw an exception
await DoAsync(); // will throw an exception 
```

### How to Convert

![image-20240301153625728](./res/01_Erweiterte%20Konzepte/image-20240301153625728.png)

## GUI-Thread

![image-20240301153934903](./res/01_Erweiterte%20Konzepte/image-20240301153934903.png)

Um nun trotzdem mehrere Thread benützten zu können, müssen die Threads sich queuen im STA Thread.

![image-20240301154012504](./res/01_Erweiterte%20Konzepte/image-20240301154012504.png)

![image-20240301154113066](./res/01_Erweiterte%20Konzepte/image-20240301154113066.png)

## Concurrent Collections

![image-20240301154303351](./res/01_Erweiterte%20Konzepte/image-20240301154303351.png)
