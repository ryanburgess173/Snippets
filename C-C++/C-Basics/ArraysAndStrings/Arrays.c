#include <stdio.h>

int main(){
    int myNumbers[] = {25, 50, 75, 100};
    printf("%d\n", myNumbers[0]);
    
    myNumbers[0] = 33;
    printf("%d\n", myNumbers[0]);

    int myNumbers2[4];

    myNumbers2[0] = 25;
    myNumbers2[1] = 50;
    myNumbers2[2] = 75;
    myNumbers2[3] = 100;
    return 0;
}