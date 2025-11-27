#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE* fptr;

    char data[50] = "GeeksforGeeks-A Computer "
        "Science Portal for Geeks";

    fptr = fopen("file.txt", "w");

    if(fptr == NULL){
        printf("The file is not opened.\n");
    }
    else{
        printf("The file is now opened.\n");
        fputs(data, fptr);
        fputs("\n", fptr);

        fclose(fptr);

        printf("Data successfully written in file "
            "file.txt\n");
        printf("The file is now closed.");
    }
    return 0;
}