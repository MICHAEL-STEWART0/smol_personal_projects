#include <cs50.h>
#include <stdio.h>

bool prime(int number);

int main(void)
{
    int min;
    do
    {
        min = get_int("Minimum: ");
    }
    while (min < 1);

    int max;
    do
    {
        max = get_int("Maximum: ");
    }
    while (min >= max);

    for (int i = min; i <= max; i++)
    {
        if (prime(i)) // if number passed in print to terminal
        {
            printf("%i\n", i);
        }
    }
    return 0;
}

bool prime(int number)
{
    //if a number is greater than 1 divisible by 1 its self and no other number it is prime
    //number is a number passed in over and over again you need to check divisibility other than that
    for(int i = 2; i * i <= number; i++) //If number has a divisor greater than its square root, it must also have a corresponding divisor smaller than its square root.
    {
        if(number % i == 0)
        {
            return false;

        }
    }

    return true;
}
