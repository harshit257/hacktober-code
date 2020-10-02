# Armstrong number is that number whose sum of cubes of all the 
# digits is equal to original number.
# eg:153 is an Armstrong number ,1+ 125+27=153, i.e 1^3+5^3+3^3.

#include <iostream>
using namespace std;

int main() {
    int num, r, result = 0;
    cout << "Enter an integer: ";
    cin >> num;
    int temp = num;

    while (num != 0) {
        // number modulo 10 contains remainder which is  the last digit
        r = num % 10;

        result += r * r * r;

        // number divided by 10 removing last digit from the original number
        num /= 10;
    }

    if (result == temp)
        cout << temp << " is an Armstrong number.";// printing
    else
        cout << temp << " is NOT an Armstrong number.";

    return 0;
}
