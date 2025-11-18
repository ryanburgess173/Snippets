#include <stdio.h>

struct Person {
    char name[64];
    int age;
};

void updateStruct(struct Person *p, int age){
    p->age = age;
}

int main(int argc, char **argv) {
    struct Person lowlevellearning = {"LowLevelLearning", 25};
    printf("Name (before update)...: %s, Age: %d\n", lowlevellearning.name, lowlevellearning.age);
    updateStruct(&lowlevellearning, 100);
    printf("Name (after update)....: %s, Age: %d\n", lowlevellearning.name, lowlevellearning.age);
    return 0;
}