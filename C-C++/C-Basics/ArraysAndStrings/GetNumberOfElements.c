#include <stdio.h>

int main() {
    int myNumbers[] = {99999999, 25, 50, 75, 100};
    int length = sizeof(myNumbers) / sizeof(myNumbers[0]);
    printf("Length of Array of ints: %d\n", length);

    double myValues[] = {1.1, 2.2, 3.3};
    int lengthD = sizeof(myValues) / sizeof(myValues[0]);
    printf("Length of Array of doubles: %d\n", lengthD);
    
    return 0;
}