#include <stdio.h>

int main() {

    int n;
    printf("n = ");
    scanf("%d", &n);

    int runningTotal = 0;
    for(int i = 1; i <= n; i++) {
        runningTotal = runningTotal + (i*i);
    }

    printf("%d", runningTotal);

    return 0;
}