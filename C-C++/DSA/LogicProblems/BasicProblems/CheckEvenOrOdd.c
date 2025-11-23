#include <stdio.h>

// More efficient approach example given:
//=============================================
#include <math.h>
#include <stdbool.h>

// essentially, bitwise works at binary level and is faster
// than using mathematical operators like %

bool isEven(int n){
    // taking bitwise and of n with 1
    if((n & 1) == 0)
        return true;
    else
        return false;
}

void efficientMain(){
    int n = 15;
    if(isEven(n)){
        printf("true");
    }else{
        printf("false");
    }
}
//=============================================

// My original work:
int main() {
    int n;
    printf("Input: n = ");
    scanf("%d", &n);

    if(n % 2 == 0){
        printf("Output: true\nExplanation: %d % 2 = 0, so %d is even.\n", n, n);
    }else{
        printf("Output: false\nExplanation: %d % 2 = 1, so %d is odd.\n", n, n);
    }

    efficientMain();

    return 0;
}