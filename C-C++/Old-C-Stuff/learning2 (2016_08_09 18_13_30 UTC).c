#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

main()
{
   char name[50];
   puts("Enter name:");
   fgets(name, 50, stdin);
   puts(name);
   return 0;
}

