#include <stdio.h>
#include <string.h>

struct Person {
    char company[50];
    int lifespan;
};

int main() {
    struct Person person1;

    strcpy(person1.company, "GeeksforGeeks");
    person1.lifespan = 30;

    printf("Name: %s\n", person1.company);
    printf("Age: %d\n", person1.lifespan);

    return 0;
}