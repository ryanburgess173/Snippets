
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

main()
{
  char passwd[5000];
  int i1;
  printf("PASSWORD:");
  scanf("%s", passwd);
  if (strlen(passwd) < 1)
  {
     printf("Problem Found! Please enter the password!\n\a");
  }
  putchar('\n');
  for (i1 = 0; i1 < strlen(passwd); i1++)
  {
     if (isdigit(passwd[i1]))
     {
       printf("%d. character is a number!\n", i1);
       continue;
     }
     if (isupper(passwd[i1]))
     {
       printf("%d. character is uppercase!\n", i1); 
       continue;
     }
     if (islower(passwd[i1]))
     {
       printf("%d. character is lowercase!\n", i1);
       continue;
     }
     else
     {
       printf("%d. character is a random character!\n", i1);
     }
  }
  putchar('\n');
  int l1 = strlen(passwd);
  printf("The length of password is: %d\n", l1);
  printf("Done!\n");
  passwd[2] = 'R';
  puts(passwd);
  return 0;
}



