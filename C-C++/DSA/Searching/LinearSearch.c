#include <stdio.h>

int search(int arr[], int n, int x) {
    // Iterate over the array in order to find
    // the key x
    for(int i=0; i<n; i++){
        if(arr[i]==x){
            return i;
        }
    }
    return -1;
}

int main(void) {
    int arr[] = {18, 24, 48, 88, 20, 12, 2, 5, 11, 99, 6, 16, 17, 19};
    int x;
    printf("x = ");
    scanf("%d", &x);
    int n = sizeof(arr) / sizeof(arr[0]);

    int result = search(arr, n, x);
    (result == -1)
        ? printf("Element is not present in array\n")
        : printf("Element is present at index %d\n", result);
    return 0;
}