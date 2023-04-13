# SOLID

## S - Single Responsibility Principle

> A module should be responsible to one, and only one, actor.

The single responsibility principle does **not** state that every function/module/... needs to have one responsibility. Rather, it states, that every module should have one actor, which can demand change.

This should be done to limit the impact different stakeholder's demands can have.

### Symptom 1 - Accidental Duplication

One symptom of SRP being violated occures when different actors use the same functionality facilitated by the same module (e.g. overtime calculations used by the COO and CFO, but in different ways). If one user demands changes, the developer then implements those, it can be easy to miss the second actor. This will lead to features changing subtly enough (maybe some altered numbers) that nobody notices until it is too late.

### Symptom 2 - Merges

A second problem occurs, when two actors want a change. The changes might be implemented by two different developers, who both will change the same module (as it is shared). When completing the request, a merge conflict is practically guaranteed.

### Solutions

One possible solution is to split the data from the functions. To reduce the amount of classes a developer has to deal with, one can introduce a facade, which in turn uses the different logic classes. The classes, that actually implement the logic, mustn't know each other to avoid accidental duplication.

<img src="res/SOLID/image-20230331215525529.png" alt="image-20230331215525529" style="zoom:67%;" />

If one prefers to keep the logic closer to the data, one can implement the most important method in the original class and then use a facade for the other functions.

<img src="res/SOLID/image-20230331215914276.png" alt="image-20230331215914276" style="zoom:67%;" />

One possible downside of this "pattern" is that it promotes duplication to some part as some shared logic might be needed in multiple implementations.

## Presentation Notes

* Create a code example (maybe with a bit of role playing?)

* Make a change (or prepare an already changed variant) which exemplifies the problem

* Show the two solutions

* Mention downsides and upsides of this pattern

  * Cons:
    * If we have an application where 90% of logic is shared between two actors, should we duplicate those 90%? Probably not, but how much should be duplicated?
      * This even applies to the example: What if  a field is added to `EmplyeeData`. Then we have the two symptoms again, so should we duplicate this class as well? Where do we stop? What if the facade needs two change? If this is thought to the end, should we duplicate even the login screen? Probably not...
      * This leads to this principal only being applicable if its already set in stone, what will change in the future (which is almost never the case) 
    * One of the scrum principals is, that we should forget about the future. Adding unneeded complexity kills your project. This seems to be a primary case of adding complexity when its not clear if it is needed in the future.

* Usage:

  * What will change is set in stone
  * When its clear that those changes will be made in the future
  * Repeated bugs related to the two symptoms

* Mention that this pattern exists on the functions and class level, the component level (Common Closure Principle) and the architectural level (Axis of Change)

  

## O - Open Close Principle

> Software entities should be open for extension but closed for modification

This means, functions should be easily be added to existing code, but existing code shouldn't be altered. To do this, while writing code, ask your self, can more functionality be added to this code.

Advantages:

* Maintainability
  Easier to add code 
* Flexibility
* Scaleability

## D - Dependency Inversion Principle

> 