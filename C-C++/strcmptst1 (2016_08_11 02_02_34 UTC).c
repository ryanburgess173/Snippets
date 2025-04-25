#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <conio.h>
#include <ctype.h>
#include <math.h>
#include <time.h>
int score = 0;
int q1, q2, q3, q4, q5, q6, q7 , q8, q9, q10, q11, q12,q13, q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28;
info1(){
    puts("");
    puts("Communist");
    puts("Socialist");
    puts("Liberal        Left");
    puts("Democrat");
    puts("Moderate");
    puts("--------------------");
    puts("Independent");
    puts("--------------------");
    puts("Libertarian");
    puts("Republican");
    puts("Conservative   Right");
    puts("Tea Party");
    puts("Fascist");
}

main(){
    puts("Welcome to the political spectrum quiz!");
    puts("You will be put into a category as you see below:");
    info1();
    questions();
    return 0;

}
questions(){
    puts("");
    puts("What is your stance on Abortion?");
    puts("");
    puts("1. Pro-Life");
    puts("2. Pro-Choice");
    puts("");
    do{
            puts("Choice:");
            scanf("%d", &q1);
            switch(q1){
               case(1): score = (score + 4);
                        break;
               case(2): score = (score - 4);
                        break;;
               default: puts("Not a valid choice no points will count!");
                        break;
            }
    }while ((q1 < 1) || (q1 > 4));
    puts("");
    puts("What is your stance on Immigration?");
    puts("");
    puts("1. Export all current illegal immigrants, including\n ones seeking asylum and children, and leave the system.");
    puts("");
    printf("2. Let Children stay, export all criminals who\n aren't US citizens, and reform the system.\n\n");
    do{
        puts("Choice:");
        scanf("%d", &q2);
        switch(q2){
            case(1) : score = (score + 3);
                      break;
            case(2) : score = (score - 3);
                      break;
            default: puts("Not a valid decision no points counted!");
                     break;

        }
    }while ((q2 < 1)||(q2 > 4));
    puts("");
    puts("What is your position on Taxation?");
    puts("");
    puts("1. Lower Taxation for all, force congress to balance a budget.");
    puts("2. Lower Taxation on the poor, more taxes on the rich.");
    puts("3. Higher Taxation for all, raise state and federal spending.");
    puts("");
    do{
        puts("Choice:");
        scanf("%d", &q3);
        puts("");
        switch(q3){
            case(1) : score = (score + 4);
                      break;
            case(2) : score = (score - 2);
                      break;
            case(3) : score = (score - 4);
                      break;
            default : puts("Not valid!");
                      break;
        }

    } while ((q3 < 1)||(q3 > 4));
    puts("What is your belief in welfare?");
    putchar('\n');
    printf("1. Adults capable of working but cannot find jobs, and disabled adults receive\nwelfare only.Those who choose not to work do not receive welfare.\nThe idea that welfare is meant for those who truly cannot do for themselves.\n\n");
    printf("2. All adults receive welfare, regardless if they choose to work or not.\nThose who choose not to get a job will still receive welfare.\nThe belief that people shouldn't have to get a job if they don't want to and \nstill receive welfare checks.\n");
    putchar('\n');
    do{
        puts("Choice:");
        scanf("%d", &q4);
        puts("");
        switch(q4){
            case(1) : score=(score+4);
                      break;
            case(2) : score=(score-4);
                      break;
            default : puts("Not valid! No points counted!");
                      break;
        }
    }while((q4<1)||(q4>3));
    puts("");
    puts("What do you believe about our international trade laws?");
    puts("");
    printf("1. We should have the right to buy and sell to whatever country we please.\nIt is not government's job to regulate it. Do not tax it at all!\n\n");
    printf("2. We should have freedom to trade with whoever we please,\nbut government deserves to be able to tax us for it!\n\n");
    printf("3. We shouldn't be allowed to buy or sell with enemies of the United States,\nit is unpatriotic. All other trade must be taxed.\n\n");
    putchar('\n');
    do{
        puts("Choice:");
        scanf("%d", &q5);
        puts("");
        switch(q5){
            case(1) : score =(score+3);
                      break;
            case(2) : score=(score+2);
                      break;
            case(3) : score=(score-3);
                      break;
            default : printf("\nNot Valid\a\n\n");
                      break;
        }
    }while((q5<1)||(q5>4));
    puts("");
    puts("What is your stance on our country working with United Nations?");
    putchar('\n');
    printf("1. We should take orders from United Nations directly,\nand allow them to form our policies for us.\n\n");
    printf("2. We should cooperate with United Nations to an extent,\nbut remain under our own system and goals.\n\n");
    printf("3. We should not work with United Nations, because they\npromote global governments, socialism, and communist rule.\n\n");
    printf("4. We should take orders from United Nations, allow them\nto control our government, and make decisions on laws for us.\n\n");
    puts("");
    do{
        puts("Choice:");
        scanf("%d", &q6);
        puts("");
        switch(q6){
            case(1) : score = (score-3);
                      break;
        }
    }while((q6<1)||(q6>5));



}
