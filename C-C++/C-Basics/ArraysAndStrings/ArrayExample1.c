#include <stdio.h>

int main() {
    int ages[] = {20, 22, 18, 35, 48, 26, 87, 70};

    float avg, sum = 0;

    int i;

    int length = sizeof(ages) / sizeof(ages[0]);

    for (i = 0; i < length; i++) { 
        sum += ages[i];
    }

    avg = sum / length;

    printf("The average age is: %.2f\n", avg);
    
    int lowestAge = ages[0];

    for(i = 0; i < length; i++) {
        if(lowestAge > ages[i]) {
            lowestAge = ages[i];
        }
    }
    printf("The lowest age is: %d\n", lowestAge);
    return 0;
}