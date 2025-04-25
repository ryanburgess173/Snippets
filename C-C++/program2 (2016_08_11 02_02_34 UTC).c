#include <conio.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>---Round 2:---
#include <time.h>
#include <stdbool.h>
/* Windows 64 bit systems only */
main2()
{
    printf("Hello User!\n");
    int i1, c4=0;
    char c2, c3;
    char c1[15];
    c1[0] = '\n';
    c1[1] = 'Y';
    c1[2] = 'O';
    c1[3] = 'G';
    c1[4] = 'I';
    c1[5] = '\0';
    for(i1=0; i1<=strlen(c1); i1++)
    {
        printf("%c\n", c1[i1]);
    }
    printf("Now we will search for a variable which will then be printed if it exists!\n");
    puts("Enter Letter you wish to search for:");
    scanf("%c", &c2);
    for(i1=0; i1<=strlen(c1); i1++)
    {
        c3 = c1[i1];
        if (c3 == c2)
        {
            printf("Character variable found at the #%d character\n", i1);
            printf("The character you searched for was %c\n", c2);
            c4++;
        }
    }
    if (c4 == 0)
    {
        printf("Variable not found in string\n");
    }
}
main(){
    int week=1;
    int timeclock=0;
    char c1[50];
    float money=1000;
    float gold=967.68;
    float silver=16.80;
    float oil=0.01106;
    float platinum=950.55;
    float naturalgas=0.01718;
    int employees=0;
    int specialemp=0;
    int fulltemp=0;
    int parttemp=0;
    float minwage=7.25;
    float wageexpense=0;
    float taxexpense=0;
    float hireexpense=0;
    float mygold=0, mysilver=0, myoil=0, myplatinum=0, mynaturalgas=0;
    puts("Welcome to Wall Street! You're now the CEO of a company");
    puts("that can do whatever you want! You will be given $1,000");
    puts("to start out and have 53 weeks to reach $3,000 in the bank");
    puts("before your renters kick you out! Have fun!");
    puts("(Type 'help' for help)");
    putchar('\n');
    system("COLOR 0B");
    while (1){
        if (timeclock>6){
            week=week+1;
            printf("\a");
            puts("Paying all of your expenses");
            puts("Check expenses this week for more");
            timeclock=0;
        }
        printf(">");
        gets(c1);
        if (strcmp(c1, "exit")==0){
            exit(1);
        }
        if (strcmp(c1, "help")==0){
        puts("");
        puts("Type 'money' to view your cash");
        puts("Type 'assets' to view your assets");
        puts("Type 'commodities' to buy, sell, or view commodities");
        puts("Type 'jobs' to view jobs needed in the market");
        puts("Type 'stocks' to view the stock market");
        puts("Type 'land' to view land on the market");
        puts("Type 'expenses' to view needed expenses");
        puts("Type 'hire' to hire somebody for a job");
        puts("Type 'fire' to fire somebody for a job");
        puts("Type 'borrow' to borrow money");
        puts("Type 'week' to view the week");
        puts("Type 'employees' to view details about workers");
        puts("");
        }
        if (strcmp(c1, "money")==0){
            printf("$%f\n", money);
        }
        if (strcmp(c1, "week")==0){
            printf("Week %d\n", week);
        }
        if (strcmp(c1, "employees")==0){
            putch('\n');
            printf("Employee Type:     Weekly Pay:    Number of workers:\n");
            printf("Special            $%f            %d         \n", (minwage * 45), specialemp);
            printf("Full-Time          $%f            %d         \n", (minwage * 30), fulltemp);
            printf("Part-Time          $%f            %d         \n", (minwage * 15), parttemp);

            putch('\n');

        }
        if (strcmp(c1, "hire")==0){
            timeclock=timeclock+1;
            int tempnum1;
            putchar('\n');
            char ch1[50]; /*this is important for the hire process*/
            puts("Part time employees aren't as useful as full time ones and lack certain skills");
            puts("Special employees charge higher wages than other employees");
            printf("Minimum wage is currently $%f an hour.\n", minwage);
            puts("Basic part time employees work for about 15 hours a week");
            puts("Full time employees work 30 hours a week. Special workers work 45 hours a week.");
            puts("There is a $50 fee to hire somebody. This cannot be refunded.");
            putchar('\n');
            puts("How many people do you want to hire?");
            scanf("%d", &tempnum1);
            printf("Part time, full time, or special?\n");
            scanf("%s", ch1);
            employees=employees+tempnum1;
            if (strcmp(ch1, "part")==0){
                    parttemp=parttemp+tempnum1;
                    hireexpense=hireexpense+(50*tempnum1);
            }
            if (strcmp(ch1, "full")==0){
                fulltemp=fulltemp+tempnum1;
                hireexpense=hireexpense+(50*tempnum1);
            }
            if (strcmp(ch1, "special")==0){
                specialemp = specialemp+tempnum1;
                hireexpense=hireexpense+(50*tempnum1);
            }
            putchar('\n');
        }
        if (strcmp(c1, "assets")==0){
            putchar('\n');
            printf("Employees:   %d\n", employees);
            printf("Gold:        %f oz.\n", mygold);
            printf("Silver:      %f oz.\n", mysilver);
            printf("Platinum:    %f oz.\n", myplatinum);
            printf("Natural Gas: %f oz.\n", mynaturalgas);
            printf("Crude Oil:   %f oz.\n", myoil);
            putchar('\n');

        }
        if (strcmp(c1, "commodities")==0){
                putchar('\n');
                puts("Price of Commodities:");
                putchar('\n');
                printf("Gold:        $%f\n", gold);
                printf("Silver:      $%f\n", silver);
                printf("Crude Oil:   $%f\n", oil);
                printf("Platinum:    $%f\n", platinum);
                printf("Natural Gas: $%f\n\n", naturalgas);
                puts("You can type 'buy commodities' to buy commodities,");
                puts("and 'sell commodities' to sell them back.");
                putchar('\n');
        }
        if (strcmp(c1, "sell commodities")==0){
            putchar('\n');
            char enter2[50];
            timeclock=timeclock+1;
            float number2;
            float price2;
            printf("Name of commodity you wish to sell:");
            gets(enter2);
            printf("Enter number of ounces you wish to sell:");
            scanf("%f", &number2);
            if (strcmp(enter2, "gold")==0){
                if (number2 > mygold){
                    puts("You don't have that much gold!");
                }
                else{
                    mygold=(mygold-number2);
                    price2=(mygold*gold);
                    money=(money+price2);
                }
            }
            if (strcmp(enter2, "silver")==0){
                if (number2 > mysilver){
                    puts("You don't have that much silver!");
                }
                else{
                    mysilver=(mysilver-number2);
                    price2=(mysilver*silver);
                    money=(money+price2);
                }
            }
            if (strcmp(enter2, "oil")==0){
                if (number2 > myoil){
                    puts("You don't have that much oil!");
                }
                else{
                    myoil=(myoil-number2);
                    price2=(myoil*oil);
                    money=(money+price2);
                }
            }
            if (strcmp(enter2, "natural gas")==0){
                if (number2 > mynaturalgas){
                    puts("You don't have that much natural gas!");
                }
                else{
                    mynaturalgas=(mynaturalgas-number2);
                    price2=(mynaturalgas*naturalgas);
                    money=(money+price2);
                }
            }
            if (strcmp(enter2, "platinum")==0){
                if (number2 > myplatinum){
                    puts("You don't have that much platinum!");
                }
                else{
                    myplatinum=(myplatinum-number2);
                    price2=(myplatinum*platinum);
                    money=(money+price2);
                }
            }
            else{
                puts("Not a valid commodity");
            }
            putchar('\n');
        }
        if (strcmp(c1, "buy commodities")==0){
            putchar('\n');
            char enter1[50];
            timeclock=timeclock+1;
            float number1;
            float price;
            printf("Enter name of commodity you wish to purchase:");
            gets(enter1);
            printf("Enter number of ounces you wish to purchase:");
            scanf("%f", &number1);
            if (strcmp(enter1, "gold")==0){
                price=(gold*number1);
                mygold=(mygold+number1);
                money=(money-price);
            }
            if (strcmp(enter1, "silver")==0){
                price=(silver*number1);
                mysilver=(mysilver+number1);
                money=(money-price);
            }
            if (strcmp(enter1, "crude oil")==0){
                price=(oil*number1);
                myoil=(myoil+number1);
                money=(money-price);
            }
            if(strcmp(enter1, "platinum")==0){
                price=(platinum*number1);
                myplatinum=(myplatinum+number1);
                money=(money-price);
            }
            if(strcmp(enter1, "natural gas")==0){
                price=(naturalgas*number1);
                mynaturalgas=(mynaturalgas+number1);
                money=(money-price);
            }
        putchar('\n');
        }
    }
    return 0;
}
