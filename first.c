#include <stdio.h>
int main(){
    int a;
    int b;
    printf("Enter a and b = ");
    scanf("%d%d", &a, &b);

    int sum = a + b;
    printf("sum = %d", sum);
    return 0;
}