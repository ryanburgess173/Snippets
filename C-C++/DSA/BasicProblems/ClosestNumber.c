#include <stdio.h>


/* WORK IN PROGRESS NOT YET DONE */
int GetAbsoluteValue(int num){
    if(num < 0){
        return num * -1;
    }
    return num;
}

int DivisibleByMUp(int number, int m){
    if(number % m == 0){
        return number;
    }
    number++;
    DivisibleByMUp(number, m);
}

int DivisibleByMDown(int number, int m){
    if(number % m == 0){
        return number;
    }
    number--;
    DivisibleByMDown(number, m);
}

int main() {

    int n;
    int m;
    printf("n = ");
    scanf("%d", &n);
    printf("m = ");
    scanf("%d", &m);

    int up = GetAbsoluteValue(DivisibleByMUp(n, m) - n);
    int down = GetAbsoluteValue(DivisibleByMDown(n, m) - n);

    if(up == down){
        printf()
    }
    if(up > down){
        printf("%d\n", DivisibleByMDown);
    }else{
        printf("%d\n", DivisibleByMUp);
    }

    return 0;
}