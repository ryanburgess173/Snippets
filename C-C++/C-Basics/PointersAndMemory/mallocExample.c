#include <stdio.h>
#include <stdlib.h>

int main() {

    int number = 0;
    printf("Enter the number of grades: ");
    scanf("%d", &number);

    // this is like renting space from the OS
    char *grades = malloc(number * sizeof(char));
    
    if(grades == NULL) {
        printf("Memory allocation failed!\n");
        return 1; // exit with error code
    }

    for(int i = 0; i < number; i++) {
        printf("Enter grade #%d ", i+1);
        scanf(" %c", &grades[i]);
    }

    for(int i = 0; i < number; i++) {
        printf("Grade #%d: %c\n", i+1, grades[i]);
    }

    // returning the "rented" space back to the OS
    free(grades);

    // avoid dangling pointer, like returning the "key" back to an apartment
    grades = NULL;

    return 0;
}