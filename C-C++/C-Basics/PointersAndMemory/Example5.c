#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv){
    char *heapMemory = malloc(100);
    if(NULL == heapMemory){
        perror("Failed to allocate memory");
    }else{
        printf("Memory allocated at address: %p\n", heapMemory);
        free(heapMemory);
        printf("Memory freed.\n");
    }
    return 0;
}