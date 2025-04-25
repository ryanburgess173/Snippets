#include <string.h>
#include <stdlib.h>
#include <stdio.h>
#include <ctype.h>
#include <time.h>
FILE *fptr2;
FILE *fptr1;
char filename1[50];
char fileprop1[50];
createfunction(){
   //Creates Directory
   system("mkdir file1"); 
   //Creates Main File
   char path1[100]="/root/Desktop/CPrograms/file1/";
   strcat(path1, filename1);
   puts(path1);
   fptr1=fopen(path1, "w");
   fclose(fptr1);
   char path2[100]="/root/Desktop/CPrograms/file1/";
   strcat(fileprop1, filename1);
   strcat(fileprop1, "prop");
   strcat(path2, fileprop1);
   //Creates Properties File   
   fptr2=fopen(path2, "w");
   fclose(fptr2);
}
main(){
   system("clear");
   printf("Welcome to the file system control!\nThis was written in C by Ryan your root and admin!\n");
   printf("If at anytime you wish to exit, type 'exit' and the program will quit.\n\n");
   while(1){
      char input1[50];
      printf("FileIO>Command>");
      scanf("%s", input1);
      if(strcmp(input1, "create")==0){
           puts("Name of new text file:");
           scanf("%s", filename1);
           createfunction();
      }
      if(strcmp(input1, "exit")==0){
           break;
      }
   }
   system("clear");
   return 0;
}
