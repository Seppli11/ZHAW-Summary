# Testing

## Äquivalenzklassen

In einer Äquivalenzklassen sind alle möglichen Eingabewerte, welche vom Programm gleich verarbeitet werden.

Dabei gibt es **gültige** Äquivalenzklassen, welche Werte beinhalten, welche vom Programm verarbeitet werden sollen und es gibt **Ungültige** Äquivalenzklassen, welche vom Programm erkannt und korrekt behandelt werden sollen (Exception, Return-Value, ...)

Regeln, wenn Äquivalenzklassen gebildet werden:

* Wenn gültige Eingabewerte ein zusammenhängender Wertebereich bilden, so muss eine gültige Äquivalenzklasse und zwei ungültige Äquivalenzklassen gebildet werden
* Wenn Eingabewerte eine Bedinung erfüllen müssen (mit dem Buchstaben ' A' starten), dann muss eine gültige und eine ungültige Äquivalenzklasse gebildet werden.

Aus diesen Äquivalenzklassen können nun Testfälle abgeileit werden. Dabei kann folgendes beachtet werden:

* Ein Testfall darf mehrere gültige Äquivalenzklassen abdecken
* Ein Testfall für ungültige Äquivalenzklassen sollte nur einen ungültigen Wert enhalten
* **Grenzwerte** sollten berücksichtigt werden

## FIRST-Regeln

![image-20220120170501495](res/image-20220120170501495.png)

## Principles of Testing

1. Specification of Input and Output
   For each test case the input and the expected output should be specified.
2. Separation of Creation and Testing
   The developer of the code shouldn't write the test for their code.
3. Completeness of Tests
   Code should always be tested for valid inputs and **invalid** tests. The natural tendency is to test only the valid inputs.
4. Testing is an investement
   Test cases are reused
5. Error Cluster
   If an error is found in a section of code,  the probability of more errors increases. Error-prone Sections should be well tested.

## Mock Testing

Mock testing is used when a class with dependencies should be tested. The dependencies can be mocked that it implements the minimal of behaviour to function. This allows to only test the class and not its dependencies.

### Different Mocking Types

There are different type of mock classes.

![image-20220407104550751](res/image-20220407104550751.png)

#### Dummy

Dummies are objects which are never used. The fill parameters so methods don't complain about null pointers.

#### Stubs

A stub is the minimal implementation of an interface. Void method usually don't do anything and methods with a return value will usually return a hard coded value.

Here is an example.

```java
public class EmailStub implements EmailServer {
    public void sendMail(String mailTextt) {
        // do nothing
    }
    
    public String receiveMail() {
        return "Mail received"; // a hard coded value
    }
}
```

An `EmailDummy` would return `null` in `receiveMail()` because it is just a dummy.

#### Spies

Spies are similar to stubs, but record which members were invoked. This information can be checked in unit tests.

#### Fakes

#### Mock

A test double which implements the functions in away which we expect for the test. Depending on how they are implemented, they can function as a dummy, stub, spy or a fake.

Mock testing is usually split in multiple phases: 

1. Create: The mock object is created
2. Specify: The expected behaviour is specified
3. Use: The mock object is used in a normal unit test
4. Verify behaviour: The mock object is verified

```java
public class OrderInteractionTester extends MockObjectTestCase {
	private static String TALISKER = "Talisker";
    public void testFillingRemovesInventoryIfInStock() {
        // configuration
        Order order = new Order(TALISKER, 50);
        Mock warehouseMock = new Mock(Warehouse.class);
        // expectations
        warehouseMock
            .expects(once())
            .method("hasInventory")
            .with(eq(TALISKER),eq(50))
            .will(returnValue(true));
        warehouseMock
            .expects(once())
            .method("remove")
            .with(eq(TALISKER), eq(50))
            .after("hasInventory");
        //exercise
        order.fill((Warehouse)warehouseMock.proxy());
        //verify
        warehouseMock.verify();
        //verify expected behavior
        assertTrue(order.isFilled()); //verify state
    }
}
```



## Blacking-Box vs White-Box Testing

![image-20220407105410138](res/image-20220407105410138.png)

In black-box testing (or state testing), only the public interface is known. No assumptions is done about the internal implementaiton. Usually stubbing can be used.

In white-box testing (or behaviour testing) the inner working of the class is known and tested. Here, usually mocking can be used.

## Mockito

