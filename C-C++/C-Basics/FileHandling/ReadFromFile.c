#include <stdio.h>
#include <string.h>

int main() {
    FILE* fptr;

    char data[50];
    fptr = fopen("file.txt", "r");

    if(fptr == NULL){
        printf("file.txt file failed to open.\n");
    }
    else{
        printf("The file is now opened.\n");

        while(fgets(data, 50, fptr) != NULL){
            printf("%s\n", data);
        }

        fclose(fptr);
    }
    return 0;
}