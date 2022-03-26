# Threads

## Share Data between Multiple Threads

### Atomic

Use the atomic

### Synchronized

```java
class Account {
    private int balance;
   	public synchronized void transferAmount1(int amount) {
        this.balance += amaount;
    }
    
    public void transferAmount2(int amount) {
        synchronized(this) {
        	this.balance += amaount;
        }
    }
    
    public synchronized static staticLock1() {
        //do stuff
    }
    public static staticLock1() {
        synchronized(Amount.class) {
            // do stuff
        }
    } 
}
```

Never call an other synchronized method which uses a different object. This can cause a dead lock.

### Monitor

A java object can be used as a locked. 

```java
class FooBar {
	private Object monitor;
    
    public void test() {
        synchronized(monitor) {
            // waits for the monitor to be called with monitor.notify() or monitor.notifyAll()
            monitor.wait();
        }
    }
}
```

