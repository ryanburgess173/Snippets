#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <conio.h>
#include <ctype.h>
main(){
    /*For Windows 64 bit systems only*/
    int x, i;
    puts("\nHow many names do you want to enter?");
    scanf("%d", &x);
    if (x<1){
        puts("\nGoodbye!\n\a");
        exit(1);
    }
    char names[x][100];
    printf("\nThis program allows you to make a list of %d names!\n\n", x);
    for (i=1; i<=x; i++){
        printf("Enter name %d:", i);
        scanf("%s", names[i]);
    }
    puts("\nNow we will print out the names:\n");
    for(i=1; i<=x; i++){
        printf("The #%d name is %s\n", i,names[i]);
    }
    puts("\nDone!");
    printf("\a");
}
