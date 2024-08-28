#include <stdio.h>
char n1,n2,n3,n4,n5,n6,n7,n8;
char inputx,inputO;
char n0 = '0';
int win = 0;
int emptyspaces = 9;


void takeinputx(){
  printf("enter your move x: ");
scanf(" %c",&inputx);
  
}
void takeinputy(){
  printf("enter your move o: ");
scanf(" %c", &inputO);

}
void gameinputx()
{
  if(inputx == '0'){
    n0 = 'X';
  }
  else if(inputx == '1'){
    n1 = 'X';
  }
  else if(inputx == '2'){
    n2 = 'X';
  } else if(inputx == '3'){
    n3 = 'X';
  }
  else if(inputx == '4'){
    n4 = 'X';
  }
  else if(inputx == '5'){
    n5 = 'X';
  }
  else if(inputx == '6'){
    n6 = 'X';
  }
  else if(inputx == '7'){
    n7 = 'X';
  }
  else if(inputx == '8'){
    n8 = 'X';
  }
  else if(inputx !='0' || inputx !='1' || inputx !='2' || inputx !='3' || inputx !='4' || inputx !='5' || inputx !='6' || inputx !='7' || inputx !='8') {
    printf("invalid input");
  }
}
void gameinputy()
{
  if(inputO == '0'){
    n0 = 'O';
  }
  else if(inputO == '1'){
    n1 = 'O';
  }
  else if(inputO == '2'){
    n2 = 'O';
  } else if(inputO == '3'){
    n3 = 'O';
  }
  else if(inputO == '4'){
    n4 = 'O';
  }
  else if(inputO == '5'){
    n5 = 'O';
  }
  else if(inputO == '6'){
    n6 = 'O';
  }
  else if(inputO == '7'){
    n7 = 'O';
  }
  else if(inputO == '8'){
    n8 = 'O';
  }
  else if(inputO !='0' || inputO !='1' || inputO !='2' || inputO !='3' || inputO !='4' || inputO !='5' || inputO !='6' || inputO !='7' || inputO !='8') {
    printf("invalid input");
  }
}
void printboard() 
{
printf("  %c |  %c |  %c   ",n0,n1,n2);
printf("\n");
printf("-------------");
printf("\n");
printf("  %c |  %c |  %c   ",n3,n4,n5);
printf("\n");
printf("-------------");
printf("\n");
printf("  %c |  %c |  %c   ",n6,n7,n8);
}
void checkwinner() {
  if((n0 == 'X' && n1 == 'X' && n2 == 'X') || (n3 == 'X' && n4 == 'X' && n5 == 'X') || (n6 == 'X' && n7 == 'X' && n8 == 'X') || (n0 == 'X' && n3 == 'X' && n6 == 'X') || (n1 == 'X' && n4 == 'X' && n7 == 'X') || (n2 == 'X' && n5 == 'X' && n8 == 'X') || (n0 == 'X' && n4 == 'X' && n8 == 'X') || (n2 == 'X' && n4 == 'X' && n6 == 'X'))
  {
    win = 1; 
    printf("X is the winner");
  }
  else if((n0 == 'O' && n1 == 'O' && n2 == 'O') || (n3 == 'O' && n4 == 'O' && n5 == 'O') || (n6 == 'O' && n7 == 'O' && n8 == 'O') || (n0 == 'O' && n3 == 'O' && n6 == 'O') || (n1 == 'O' && n4 == 'O' && n7 == 'O') || (n2 == 'O' && n5 == 'O' && n8 == 'O') || (n0 == 'O' && n4 == 'O' && n8 == 'O') || (n2 == 'O' && n4 == 'O' && n6 == 'O'))
  {
    win = 1; 
    printf("X is the winner");
  }
}
int main() {
  n1 = '1';
  n2 = '2';
  n4 = '4';
  n5 = '5';
  n6 = '6';
  n7 = '7';
  n8 = '8';
  n3 = '3';
  while(win == 0 && emptyspaces > 0) {
     printf("\n");
    printboard();
    printf("\n");
    takeinputx();
    gameinputx();
    emptyspaces-- ;
     printf("\n");
    printboard();
    checkwinner();
    printf("\n");
    takeinputy();
    printf("\n");
    gameinputy();
    emptyspaces-- ;
    printboard();
    checkwinner();
  }
  return 0;
}
