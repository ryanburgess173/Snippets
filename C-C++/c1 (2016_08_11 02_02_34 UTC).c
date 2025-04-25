
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

main()
{
  system("clear");
  puts("Welcome to the OS1");
  getchar();
  spaces();
  logo();
  int i1;
  printf("\n\nWelcome to the operating system!\n");
  printf("These are your options:\n\n");
  commands1();
  do
  {
     printf("What do you wish to do?");
     scanf(" %d", &i1);
     switch(i1)
     {
       case (1):
           printf("Welcome to the Applications!\n");
           applications();
           break;

       case (2):
           printf("Program under construction! Try again later...\n");
           break;
       case (3):
           printf("My name is Ryan your official helper!\n");
           printf("This program was written in C\n");
           break;
       case (6):
           printf("Exiting...\n");
           exit(1);
       case (5):
           helpfunction();
           break;
       case (4):
           FileSystem();
           break;
       default : printf("Not a valid number!\n\a");
                 break;
      }
   }while (5>1);
   return 0;

}
FileSystem()
{
    printf("This function is currently under construction!\n");
}
helpfunction()
{
   printf("Talk to the system admin for help regarding usage!\n");
   printf("Command Line help can be found by typing 'help'\n");
   printf("This program is still under construction and has bugs...\n");
}
logo()
{
   char s1[500] = "                                  ";
   printf("%s______________________________________________________\n",s1);
   printf("%s------------------------------------------------------\n",s1);
   printf("%s______________________________________________________\n",s1);
   printf("%s------------------------------------------------------\n",s1);
   printf("%s|||                                                   \n",s1);
   printf("%s||| OOOOOOOOOOO   *     SSSSSSSSSSSSSSS     11111111  \n",s1);
   printf("%s||| OO       OO  ***    SSS          SS    @     111  \n",s1);
   printf("%s||| OO       OO   *     SSS               @@@    111  \n",s1);
   printf("%s||| OO       OO         SSS        ^       @     111  \n",s1);
   printf("%s||| OO       OO         SSS      ^ ^ ^           111  \n",s1);
   printf("%s||| OO       OO         SSS        |             111  \n",s1);
   printf("%s||| OO       OO  SS     SSS        |         111111111\n",s1);
   printf("%s||| OOOOOOOOOOO  SSSSSSSSSS        |       11111111111\n",s1);
   printf("%s|||___________________________________________________\n",s1);
   printf("%s|||---------------------------------------------------\n",s1);
   printf("%s|||___________________________________________________\n",s1);
   printf("%s|||---------------------------------------------------\n",s1);
   printf("%s======================================================\n",s1);
}


spaces()
{
  int i4;
  for (i4=0; i4<25; i4++)
  {
    putchar('\n');
  }

}
commands1()
{
  printf("\nOptions:");
  printf("\n\n1. Applications\n");
  printf("2. Command Prompt\n");
  printf("3. Information\n");
  printf("4. File System\n");
  printf("5. Help Menu\n");
  printf("6. Exit\n\n");
}
commands2()
{
  printf("\nOptions:");
  printf("\n\n1. Calculator\n");
  printf("2. Text Editor\n");
  printf("3. Calendar\n");
  printf("4. Exit\n\n");
}
applications()
{
  int i2, i3;
  char c1;
  i3=0;
  i2=0;
  printf("\n\nWelcome to the applications menu!\n");
  commands2();
  while (i3<1)
  {
    printf("What do you want to do?");
    scanf(" %d", &i2);
    switch(i2)
    {
      case (1):
           printf("Welcome to the Calculator!\n");
           while (1){
               char mathchar;
               printf("Type of math:");
               scanf("%c", &mathchar);
               if (mathchar='x'){
                   printf("Multiplication it is!");
               }
               if (mathchar='e'){
                  break;
               }
           }
           break;
      case (2):
           printf("Welcome to the Text Editor!\n");
           break;
      case (3):
           printf("Welcome to the Calendar!\n");
           break;
      case (4):
           printf("Exiting Applications...\n");
           i3++;
           commands1();
           break;
      default:
           printf("Not a valid number!\n\a");
           break;
    }
  }





}



