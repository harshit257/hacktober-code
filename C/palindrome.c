  
#include <stdio.h> 

int isPalindrome(int n) 
{ 
    int r = 0; 
    while (num > 0) { 
        r = r * 10 + num % 10; 
        num = num / 10; 
    } 
    if (r == n) 
        return 1; 
    else
        return 0; 
} 
  

int main() 
{ 
    int n = 1221; 
    if(isPalindrome(n)) {
      printf("Palindrome");
    }
    else
    printf("Not Palindrome");
    return 0; 
} 
