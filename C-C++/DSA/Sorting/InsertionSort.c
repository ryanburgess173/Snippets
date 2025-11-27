#include <stdio.h>


void insertionSort(int arr[10], int n) {

    for (int i = 1; i < n; ++i) {

        int key = arr[i];
        int j = i - 1;

        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = key;
    }
}

int main() {
    int arr[10] = {210, 22, 2020, 11, 1, 2, 3, 4, 7, 6};
    int n = 10;

    insertionSort(arr, n);

    printf("Final sorted array: ");
    for (int i = 0; i < n; ++i) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    return 0;
}