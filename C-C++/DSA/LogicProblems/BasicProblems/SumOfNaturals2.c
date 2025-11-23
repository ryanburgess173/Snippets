#include <stdio.h>

int sum(int runningTotal, int n, int i){
    i++;
    runningTotal = runningTotal + i;
    if(i == n){
        return runningTotal;
    }
    sum(runningTotal, n, i);
}

int main() {

    int n;
    printf("n = ");
    scanf("%d", &n);

    int i = 0;
    int runningTotal = 0;
    int total = sum(runningTotal, n, i);

    printf("Total: %d", total);

    return 0;
}