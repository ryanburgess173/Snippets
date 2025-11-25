#include <stdio.h>
#include <stdlib.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void selectionSort(int arr[10], int n) {
    for(int i=0; i < n-1; ++i){

        // assume first element is the current minimum
        int min_idx = i;

        // look through unsorted partition to find new minimum
        for(int j = i + 1; j < n; ++j) {
            if (arr[j] < arr[min_idx]){
                // if smaller minimum is found
                min_idx = j;
            }
        }

        swap(&arr[i], &arr[min_idx]);
    }
}

int main() {
    int arr[10] = {1,7,8,21,2,7,23,33,31,44};
    int n = sizeof(arr)/sizeof(arr[0]);
    selectionSort(arr, n);

    for(int i=0; i < 10; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}