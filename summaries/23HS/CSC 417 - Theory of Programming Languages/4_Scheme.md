# Scheme

In scheme everything is a procedure (`+` is one, constructors are one, ...)

```scheme
1/3  ; 1/3 primitive
1+3i ; this is a complex number

#t ; is true
#f ; is false

(* 5 (+ 1 3)) ; 5 * (1 + 3)

(display (+ 4 3)) ; prints 4 + 3
(newline) ; prints a new line
(rational? 1/3) ; will return #t
; predicate functions usually have a ? at the end

; DATA STRUCTURES
'(1 2 3)
(list 1 2 3)

(car (list 1 2 "hello")) ; returns the first element (1 in this case)
(cdr (list 1 2 "hello")) ; returns the rest of the list ((2 "hello") in this case)

(caddr (list 1 2 "hello")) ; is equivalent to
(car (cdr (cdr (list 1 2 "hello")))) ; and returns "hello"

'() ; creates an empty sit
; the quote tells scheme that the following is data and not a program

(cons "hello" '()) ; this will return ("hello")
(cons 2 (cons "hello" '())) ; this will reutrn (2, "hello")

; to create a lambda
(lambda (n) (* n n))

; run lambda directly
((lambda (n) (* n n)) 6) ; will return 36

; map
; takes a function and maps the function over the given list
(map (lambda (i) (- i 2)) (list 4 5 6)) ; will return '(3 4 5)

; map also supports multiple arguments by supplying multiple list
(define avg (lambda (a b) (/ (+ a b) 2.0)))
(avg 5 10) ; return 7.5
(map avg '(5 100) '(10 101))  ; returns (7.5 100.5)

; let expression
(let ((x 1)
      (y 10)
      (z 200))
  (+ x y 100))

; this can also be written as
((lambda (x y z) (+ x y 100)) 1 10 200)

; the variables x, y, z are only available in the body of let
(define x 10)
(let ((x x) (+ x 5))) ; this will return 15, since x is bound to 10

(let ((x 5) (y x) (+ x y))) ; this will return 15, since y is bound to the global x
  
(let* ((x 5) (y x) (+ x y))) ; this will return 10, since first x=5 and then y=x=5
; let* is a macro which is equal to (let ((x 5)) (let ((y x)) (+ x y)))


; TAIL RECURSION
(define mymap
	(lambda (fn ls)
      (if (null? ls)
          '()
          (cons (fn (car ls))
                (mymap fn (cdr ls))))))

; SYMBOLS
; symbols dont' have an identity
'abc ; this represents the symbol abc
(quote abc) ; 'abc is syntactic sugar for 'abc
(quote (a b c)) ; is equal to '(a b c)
(eq? 'ABC 'abc) ; will return #t since symbols are case-INsensitive

; CURYING
(define make-incr
  (lambda (amt)
    (lambda (n) (+ n amt))))

(make-incr 12) ; this binds amt=12 and returns a lambda
((make-incr 12) 1) ; this will return 13

; In a sense, the following is very simmilar
(define foo (let ((amt 12)) 
  (lambda (n) (+ n amt))))

; the example above, amt cannot be change since it is buried in the function foo 

; COND
(lambda (exp)
	(cond ((number? exp) 
       exp)
      ((list? exp)
       #t)
      (#t (error "Unhandled expression type"))))
; this is equal to a switch statement
```

