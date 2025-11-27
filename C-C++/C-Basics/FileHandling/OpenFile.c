#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE* fptr;

    fptr = fopen("file.txt", "r");

    if(fptr == NULL){
        printf("The file is not opened.\n");
    }

    return 0;
}