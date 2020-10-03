"""
Factorial of a positive integer n, denoted by n!, is the product of all positive integers less than or equal to n.
e.g: 5! = 5*4*3*2*1 = 120; 1! = 1; 0! = 1 (special case)
"""

# Using Loop
def factorial(n):
    """
    n: Positive Integer
    Returns the factorial of n
    """
    result = 1
    if n > 0:
        for i in range(1, n+1):
            result = result * i
    return result

# Using Recursion
def fact(n):
    """
    n: Positive Integer
    Returns the factorial of n
    """
    if n == 0:
        return 1
    elif n >= 1:
        return n * fact(n-1)
    #using for loop
    num = 7

# To take input from the user
#num = int(input("Enter a number: "))

factorial = 1

# check if the number is negative, positive or zero
if num < 0:
   print("Sorry, factorial does not exist for negative numbers")
elif num == 0:
   print("The factorial of 0 is 1")
else:
   for i in range(1,num + 1):
       factorial = factorial*i
   print("The factorial of",num,"is",factorial)

        

print(factorial(5))
print(factorial(10))

print(fact(5))
print(fact(10))

# Output
# 120
# 3628800
# 120
# 3628800
