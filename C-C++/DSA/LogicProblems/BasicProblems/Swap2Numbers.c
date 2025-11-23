#include <stdio.h>

int main() {
    int a;
    int b;

    printf("a = ");
    scanf("%d", &a);

    printf("b = ");
    scanf("%d", &b);

    // uses c as a placeholder to swap values
    int c = b;
    b = a;
    a = c;

    printf("a = %d, b = %d", a, b);

    return 0;
}

// this is considered the naive approach (woops)