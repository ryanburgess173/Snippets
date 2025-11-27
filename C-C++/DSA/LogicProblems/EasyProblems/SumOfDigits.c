// yeah im stuck on this one so im looking up guidance
// my struggle is determining how big the number n
// could be. My solution was dependent on it being
// below a certain maximum number like 10,000.

// According to the site GeeksForGeeks,
/*
We can sum the digits of a number by repeatedly extracting the last digit using n % 10,
adding it to the sum, and then removing it by dividing n by 10 using integer division.
*/

// Solution written out:

#include <stdio.h>

int sumOfDigits(int n) {
    int sum = 0;
    while (n != 0) {
        // Extracting the last digit
        int last = n % 10;

        // Adding the last digit to the sum
        sum += last;

        // Remove the last digit:
        n /= 10;
    }
    return sum;
}

int main() {
    int n = 12345;
    printf("%d", sumOfDigits(n));
    return 0;
}