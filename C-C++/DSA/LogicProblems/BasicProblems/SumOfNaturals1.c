#include <stdio.h>

int main(){
    int n;
    printf("n = ");
    scanf("%d", &n);

    int runningTotal = 0;
    for(int i = 1; i<n+1; i++) {
        runningTotal = runningTotal + i;
    }

    printf("%d\n", runningTotal);

    return 0;
}