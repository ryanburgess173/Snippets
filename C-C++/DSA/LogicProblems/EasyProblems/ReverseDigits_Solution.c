// yeah this is 10x simpler than the solution I wrote

#include <stdio.h>

int reverseDigits(int n) {
    int revNum = 0;
    while (n > 0) {
        revNum = revNum * 10 + n % 10;
        n = n / 10;
    }
    return revNum;
}

int main() {
    int n = 4562;
    printf("%d",reverseDigits(n));
    getchar();
    return 0;
}