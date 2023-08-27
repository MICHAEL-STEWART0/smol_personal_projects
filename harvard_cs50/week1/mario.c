#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int height;
    do
    {
        height = get_int("Height: ");
    }
    while(height < 1);


    char hash = '#';
    char space = ' ';
    int space_count;
    int hash_count;

    for(int row = 1; row <= height; row++)
    {
        space_count = 0;
        hash_count = 0;

        for(int col = 1; col <= height; col++)
        {
            while(space_count < height-row)
            {
             printf("%c",space);
             space_count++;
            }
            while(hash_count < height - (height - row)){
                printf("%c",hash);
                hash_count++;
            }


        }
        printf("\n");
    }


return 0;
}