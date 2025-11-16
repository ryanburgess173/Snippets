#include <stdio.h>
int main() {
    int myNumbers[4] = {25, 50, 75, 100};
    int i;

    for (i = 0; i < 4; i++) {
        printf("%p\n", &myNumbers[i]);
    }


    // In C, the name of the array is a pointer
    // to the first element of the array
    printf("==========\n");
    int myNums[4] = {10, 20, 30, 40};

    printf("%p\n", myNums);
    printf("%p\n", &myNums[0]);

    // Another example:
    int numbers[4] = {5, 10, 15, 20};
    printf("%d\n", *numbers);

    return 0;
}