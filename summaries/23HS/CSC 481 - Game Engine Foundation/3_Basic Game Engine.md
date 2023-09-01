# Basic Game Engine

## Engine Management

If there are static classes, these classes have to be created on start up dynamically. However, this means that the startup order is not defined. One solution for this, is a singleton, which creates the instance on demand. This comes with the drawback of performance spikes when a resource heavy system is loaded.

```cpp
class X {
   public:
       static X *inst = null;
       static X get() {
           if (inst == null) 
              inst = new X(); 
           return inst; 
       }
   public X() {
      y_inst = Y.get();
      z_inst = Z.get();
      //other startup
   }
}

```

A different solution is manualy startup.

```cpp
void main(int argc, char **argc) {
   x_inst = new X(); //order doesn’t matter
   y_inst = new Y(); //order doesn’t matter
   z_inst = new Z(); //order doesn’t matter
   z_inst->initialize(); //this order matters
   x_inst->initialize(); //this order matters
   y_inst->initialize(); //this order matters
   //main loop
   //shutdown
}

```

## Game Loop

The game loop has multiple targets