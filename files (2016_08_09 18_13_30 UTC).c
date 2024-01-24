#include <stdio.h>
#include <stdlib.h>
FILE * fptr;
main(){
    char lines1[500] = "C:\\C and C++ Programs\\C Programs\\";
    char lines2[500];
    printf("\nEnter new file name:");
    scanf("%s", lines2);
    strcpy(lines1, lines2);
    fptr = fopen(lines1, "w");
    if (fptr == 0){
        puts("File already exists!");
        exit(1);
    }
    fclose(fptr);
    return (0);
}
