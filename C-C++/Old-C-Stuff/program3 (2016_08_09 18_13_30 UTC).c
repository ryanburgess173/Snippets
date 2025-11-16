#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <math.h>
#include <time.h>
float wage, hours, tax=0.84;
float final;
main(){
  printf("\nEnter Hourly Wage: $");
  scanf("%f", &wage);
  printf("\nEnter Hours Per Week: ");
  scanf("%f", &hours);
  float temp1 = (hours*wage);
  float temp2 = (tax*temp1);
  final = temp2;
  printf("\n$%f is your take home for the week!\n", final);
  system("exit");
  return 0;
}
