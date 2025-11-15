#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <conio.h>
#include <ctype.h>
main(){
    /*For Windows 64 bit systems only*/
    main2();
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
main2()
{
    printf("Welcome!\n");
    int a, b, c, d;
    int * randNumber;
    printf("How many races did you race in?");
    scanf("%d", &b);
    randNumber = (int *)malloc(b *sizeof(int));
    if (!randNumber){
        printf("Not enough memory!\n");
        exit(1);
    }
    for(a=1; a<=b; a++){
        printf("Enter finish in your #%d race of the season:", a);
        scanf("%d", &randNumber[a]);
    }
    printf("Now we will list the finishes of your races this season:");
    for(a=1; a<=b; a++){
        printf("\nIn Your #%d race, you finished %d",a,randNumber[a]);
    }
    return 0;

}


