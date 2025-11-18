#include <stdio.h>

int main() {
    int x = 4;
    int *pX = &x;
    // integer named y is set to the thing pointed to by pX
    int y = *pX;

    printf("Value of x: %d\n", x);
    printf("Address of x: %p\n", (void*)&x);
    printf("Value of pX (address of x): %p\n", (void*)pX);
    printf("Value pointed to by pX: %d\n", *pX);
    printf("Value of y (copied from *pX): %d\n", y);
    return 0;
}