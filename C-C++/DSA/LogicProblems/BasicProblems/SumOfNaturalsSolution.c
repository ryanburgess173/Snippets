#include <stdio.h>

int findSum(int n){
    // uses mathematical formula
    return n * (n + 1) / 2;
}

int main(){
    int n = 5;
    printf("%d", findSum(n));
    return 0;
}