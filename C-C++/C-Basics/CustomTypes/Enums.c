#include <stdio.h>

enum Cafes {
    Union_Coffee_Co,
    Green_Bean,
    Daily_Grind,
    Common_Grounds
};

int main() {
    enum Cafes today = Daily_Grind;
    printf("Today's cafe is: %d\n", today);
    return 0;
}