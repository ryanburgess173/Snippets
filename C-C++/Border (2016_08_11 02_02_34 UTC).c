#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>
#include <time.h>
#include <ctype.h>
#include <stdbool.h>
#include "ryanInfo.h"
float interest1=1.00, totalm, cmpndi=1.12;
main()
{
    float deposit1;
    int i, years1;
    printf("Enter your Initial Deposit: $");
    scanf("%f", &deposit1);
    printf("\nEnter number of years that it will be deposited:");
    scanf("%d", &years1);
    putchar('\n');
    for(i=1; i<(years1+1); i++)
    {
        interest1 = interest1*(cmpndi);
        totalm = deposit1*(interest1);
        printf("Your money is at $%f, at the end of year %d\n", totalm, i);
    }
    puts("Program is complete!");
    printf("You have $%f at the end of year %d\n", totalm, years1);
    return 0;
}



