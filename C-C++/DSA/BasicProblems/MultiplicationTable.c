#include <stdio.h>

// my original work:
void original() {
    int number;
    printf("Input: ");
    scanf("%d", &number);
    printf("Output: \n");

    for(int i = 1; i < 13; i++) {
        printf("%d * %d = %d\n", number, i, number * i);
    }
}

// recursive example given:
// ==============================
void printTable(int n, int i){
    if(i == 11){
        return;
    }
    printf("%d * %d = %d\n", n, i, n * i);
    i++;
    printTable(n, i);
}

void recursive() {
    int n = 5;
    printTable(n, 1);
}
// ==============================

int main(){
    original();

    recursive();

    return 0;
}