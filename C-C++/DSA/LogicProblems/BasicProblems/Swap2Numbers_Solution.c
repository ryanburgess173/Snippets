// this is the proper approach using math

#include <stdio.h>

int main() {
    int a = 2, b = 3;
    printf("a = %d b = %d\n", a, b);

    a = a + b;
    b = a - b;
    a = a - b;

    printf("a = %d b = %d\n", a, b);
    return 0;
}