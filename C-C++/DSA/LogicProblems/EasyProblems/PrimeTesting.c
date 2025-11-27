#include <stdio.h>

int isPrime(int n){
    if(n < 2){
        return -1;
    }
    for(int i=2; i<=(n-1); i++){
        if(n % i == 0){
            return -1;
        }
    }
    return 0;
}

int main(){
    int n;
    printf("n = ");
    scanf("%d", &n);
    int isP = isPrime(n);
    if(isP < 0){
        printf("false\n");
    }else{
        printf("true\n");
    }
    return 0;
}