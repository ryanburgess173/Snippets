#include <stdio.h>

int main() {
    // Example of the limitations of scanf
    char fullName[30];

    printf("Type your full name: \n");
    scanf("%s", &fullName);

    printf("Hello %s\n", fullName);

    // Clear the input buffer (consume the leftover newline)
    int c;
    while ((c = getchar()) != '\n' && c != EOF);

    // Advantage of using fgets() is that it
    // can read an entire line of text
    char fullName2[30];

    printf("Type your full name: \n");
    fgets(fullName2, sizeof(fullName2), stdin);

    printf("Hello %s", fullName2);
    return 0;
}