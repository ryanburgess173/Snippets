// I researched nth term math formulas for this
// A = A1 + (N - 1) * D
// where A1 is first term, N is the nth term you're
// trying to find, and D is common difference in
// the series.

#include <stdio.h>

int main() {

    int n1;
    int n2;
    int n;
    printf("n1 = ");
    scanf("%d", &n1);
    printf("n2 = ");
    scanf("%d", &n2);
    printf("n = ");
    scanf("%d", &n);

    int D = n2 - n1;

    printf("%d\n", n1 + (n - 1) * D);

    return 0;
}

// And this was the expected approach in the solution!
// Always try and use math to simplify code complexity.
// Always explain the formula used though.