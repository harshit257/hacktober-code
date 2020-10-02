# import modules
import json 
import difflib
from difflib import get_close_matches 

# import the json file 
data = json.load(open("data.json"))

# function to search the word 
def search(word):
    if word in data: # if the word matches with the word in dictionary it returns the word. 
        return data[word]
    elif len(get_close_matches(word, data.keys()))>0: # if the input word is not in the json file then it checks the close match with the input word
        y=input("did you mean %s ? if yes press Y or if no press N : " %get_close_matches(word, data.keys())[0]) #1st word of the similar match
        yn=y.lower() # covert the input in the lower case if the user gives it in the upper case
        if yn == 'y':
            return data[get_close_matches(word, data.keys())[0]] # it returns the data of the similar word
        elif yn == 'n':
            return "NOT FOUND !!!" # it returns an error
        else:
            return "Word doesn't exist. Do check it again." # if no word exist it would raise an alert to check the word again.

# take the input from the user
i = input(" enter the word : ")
# convert the input to the lowercase 
a=i.lower()
# seach the word 
out=search(a)

if type(out) == list:
    for i in out:
        print(i)
else:
    print(out)
