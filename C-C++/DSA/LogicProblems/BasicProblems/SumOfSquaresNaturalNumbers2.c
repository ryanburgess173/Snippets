#include <stdio.h>

int SumOfSquares(int runningTotal, int n, int i){
    i++;
    runningTotal = runningTotal + (i*i);
    if(i == n){
        return runningTotal;
    }
    SumOfSquares(runningTotal, n, i);
}

int main() {

    int n;
    printf("n = ");
    scanf("%d", &n);

    int runningTotal = 0;
    int i = 0;
    int total = SumOfSquares(runningTotal, n, i);

    printf("%d", total);

    return 0;
}