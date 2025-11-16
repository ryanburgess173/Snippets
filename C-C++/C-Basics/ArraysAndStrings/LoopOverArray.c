#include <stdio.h>

int main(){
    int myNumbers[] = {25, 50, 75, 100};
    int i;
    int length = sizeof(myNumbers) / sizeof(myNumbers[0]);
    printf("Length of Array: %d\n", length);
    for(i = 0; i < length; i++) {
        printf("%d\n", myNumbers[i]);
    }
    return 0;
}


