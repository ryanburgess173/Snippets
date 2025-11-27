#include <stdio.h>

int binarySearch(int arr[], int n, int x){
    int low = 0;
    int high = n - 1;
    while(low <= high) {
        int mid = low + (high-low) / 2;
        if(arr[mid] == x){
            return mid;
        }

        if(arr[mid] < x){
            low = mid + 1;
        }

        else{
            high = mid - 1;
        }
    }
    return -1;
}

int main() {
    int arr[] = {1,2,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,24,26,28,29,31,38,40,41,42,43,44,45,47,48,49,55,70,77,83,84,88,96,99};
    int x;
    printf("x = ");
    scanf("%d", &x);
    int n = sizeof(arr) / sizeof(arr[0]);
    int result = binarySearch(arr, n, x);
    if(result == -1){
        printf("Element is not present in array\n");
    }else{
        printf("Element is present at index %d\n", result);
    }
    return 0;
}