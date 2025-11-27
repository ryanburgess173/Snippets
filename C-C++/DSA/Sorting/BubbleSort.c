#include <stdio.h>
#include <stdbool.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void bubbleSort(int arr[10]){
    int n = 10; // array length of 10
    bool swapped;

    for (int i = 0; i < (n-1); i++) {
        swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap is built into C++, but in C you have to define it yourself
                swap(&arr[j], &arr[j + 1]);
                swapped = true;
            }
        }

        if(!swapped){
            break;
        }
    }
}

int main() {
    int arr[10] = {100, 233, 2, 43, 7, 3, 87, 2, 9, 10};
    bubbleSort(arr);
    for(int i = 0; i < 10; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}