// so this uses the neat trick that the sum of 
// 2 sides of a die are always equal to 7.

#include <stdio.h>

int oppositeFaceOfDice(int n) {
    
    // Stores number on opposite face
    // of dice
    int ans = 7 - n;
    return ans;
}

int main() {
    int n = 2;
    printf("%d", oppositeFaceOfDice(n));
    return 0;
}