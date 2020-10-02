#This is a small program that takes an input string , then uses rot13 to secure it.
#https://en.wikipedia.org/wiki/ROT13


#This shifts all chars in the first value with 13 positions
translation = str.maketrans('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 
   'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm')

#This simple function does the translation with the rules above
def rot13(input):
    return input.translate(translation)

#This is the main function that takes your input , runs it through the rot13 function and prints the result
def main():
    secretmessage = input("Input your message here! ")
    print(rot13(secretmessage))

if __name__=="__main__":
    main()