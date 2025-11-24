#include <stdio.h>
#include <math.h>
#include <stdlib.h>

int* reverseDigits(int list[], int n, int count){
    list[count] = n % 10;
    n = n / 10;
    count++;
    if(n==0){
        return list;
    }
    reverseDigits(list, n, count);
}

int main() {
    int n;
    printf("n = ");
    scanf("%d", &n);
    int nLength = floor(log10(abs(n)))+1;
    int *intList = calloc(nLength, sizeof(int));
    int count = 0;
    int *intList2 = reverseDigits(intList, n, count);
    for(int i = 0; i <= (sizeof(intList2)/sizeof(intList2[0])); i++) {
        printf("%d", intList2[i]);
    }
    printf("\n");
    return 0;
}

// yeah this doesn't work except for 221
// 12345 is outputted at 543 and 200 as 002 instead of just '2'