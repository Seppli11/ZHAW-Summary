# Type System

```lisp
(define incr 
    (let ((amt 3))
         (lambda (msg n)
                 (cond ((eq? msg 'incr) 
                     	(+ n amt))
                     ((eq msg 'get) 
                      amt)
                     ((eq msg 'set) 
                      (set! amt n))
                     (#t (error "Unkown method ~S" msg))))))
    
; gets the current value
incr 'get 'dummy ; 'dummy is needed since the function expects two arguments

; calculates amt + n
incr 'incr 3 ; returns 6

; sets the amt value
incr 'set 4 ; amt=4
```

The code snippet is a way to simulate objects, where `incr` is the object. The callee can send messages (or methods) to `incr`. However, the callee cannot access `amt` directly, only through messages.

The snippet above can be modified with a factory which builds incrementprs:

```lisp
(define make-incr 
    (lambda (amt)
         (lambda (msg n)
                 (cond ((eq? msg 'incr) 
                     	(+ n amt))
                     ((eq msg 'get) 
                      amt)
                     ((eq msg 'set) 
                      (set! amt n))
                     (#t (error "Unkown method ~S" msg))))))

(define i (make-incr 3)) ; creates an increment with amt=3
(define j (make-incr 5)) ; creates an incr with amt=5

(i 'set 1) ; changes i.amt = 1, but doesn't touch j.amt
(i 'get 'dummy) ; returns 1
(j 'get 'dummy) ; returns 5
```

This, essentially, implements constructors.

```lisp
(define number-object 
    (lambda (num)
         (lambda (msg n)
                 (cond 
                     ((eq msg 'get) 
                      num)
                     ((eq msg 'set) 
                      (set! num n))
                     (#t (error "Number-Object: Unkown method ~S" msg))))))

(define make-incr 
    (lambda (amt)
         (let ((parent (number-object amt))
               (lambda (msg n)
                       (cond ((eq? msg 'incr) 
                              (+ n (parent 'get))
                             (#t (parent msg n)))))))

```

The code above shows how these "constructors" can be used in a composable-fashion. The incr object only knows about how to increment, everything else is handled by the parent number-object.