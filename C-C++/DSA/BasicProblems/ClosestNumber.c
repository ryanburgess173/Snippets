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

    int mUp = DivisibleByMUp(n, m);
    int mDown = DivisibleByMDown(n, m);
    int upDiff = GetAbsoluteValue(mUp - n);
    int downDiff = GetAbsoluteValue(mDown - n);

    if(upDiff == downDiff){
        if(GetAbsoluteValue(mUp) > GetAbsoluteValue(mDown)){
            printf("%d\n", mUp);
        }
        if(GetAbsoluteValue(mUp) < GetAbsoluteValue(mDown)){
            printf("%d\n", mDown);
        }
        return 0;
    }
    if(upDiff > downDiff){
        printf("%d\n", mDown);
    }else{
        printf("%d\n", mUp);
    }

    return 0;
}