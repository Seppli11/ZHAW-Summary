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
(map (lambda (i) (- i 2)), (list 4 5 6)) ; will return '(3 4 5)

; map also supports multiple arguments by supplying multiple list
(define avg (lambda (a b) (/ (+ a b) 2.0)))
(avg 5 10) ; return 7.5
(map avg '(5 100) '(10 101))  ; returns (7.5 100.5)

; TAIL RECURSION
(define mymap
	(lambda (fn ls)
      (if (null? ls)
          '()
          (cons (fn (car ls))
                (mymap fn (cdr ls))))))
```

