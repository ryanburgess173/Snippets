#include <stdio.h>

// using mathematical formula:
int summation(int n)
{
    return (n * (n + 1) * 
           (2 * n + 1)) / 6;
}

int main()
{
    int n = 8;
    printf("%d", summation(n));
    return 0;
}