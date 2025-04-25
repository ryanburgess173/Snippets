#include <stdio.h>
#include <string.h>
#include <stdlib.h>

main()
{
  printf("Hello User!\n");
  puts("Welcome to my program used for calculating multiples");
  int num;
  int answer;
  printf("Enter number:");
  scanf("%d", &num);
  for(int i=0; i<26; i++){
        answer=num*i;
        printf("\n%d X %d = %d", num, i, answer);
  }
}
