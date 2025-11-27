#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE* fptr;

    fptr = fopen("file.txt", "w");

    if(fptr == NULL){
        printf("The file is not opened.\n");
    }
    else{
        printf("The file is created successfully.\n");
    }
    
    return 0;
}