#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <conio.h>
#include <ctype.h>
main(){
    int Age = 17;
    int * pAge;
    pAge = &Age;
    //Prints Contents
    printf("Contents: %d\n", *pAge);
    //Prints Address
    printf("Address: %d\n", &pAge);
    return 0;

}
