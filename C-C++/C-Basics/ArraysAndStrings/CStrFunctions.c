#include <stdio.h>
#include <string.h>

int main() {
    char alphabet[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    printf("%zu characters\n", strlen(alphabet));
    printf("%zu bytes\n", sizeof(alphabet));
    
    char str1[20] = "Hello ";
    char str2[] = "World!";

    strcat(str1, str2);

    printf("Concatenated String: %s\n", str1);

    char str3[20] = "Hello World!";
    char str4[20];

    strcpy(str4, str3);

    printf("Copied String: %s\n", str4);

    char str5[] = "Sample String";
    char str6[] = "Sample String";
    char str7[] = "Different String";

    printf("%d\n", strcmp(str5, str6)); // Outputs 0 (equal)
    printf("%d\n", strcmp(str5, str7)); // Outputs a non-zero value (not equal)

    return 0;
}