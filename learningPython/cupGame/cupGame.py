from random import shuffle
from typing import List
num_of_cups = 3
user_attempts = 0
def get_user_guess(totalCups:int)->int: #used to verify if you can cast the users input appropriately.
    user_guess = None
    try:
        try:
            user_guess = int(input("Which cup is it in? \n"))
        except ValueError as error:
            raise ValueError("you can not enter non intergers into this environment.")
        if user_guess not in range(0,totalCups):
            raise ValueError(f"Error! Please enter a number between 0 and {totalCups-1}")
    except ValueError as error:
        print(f"{error}")
    return user_guess

def verify_user_guess(): #gets the users guess and then verifies if it is an int or in the correct range, will continue to ask for the users guess until the specifications are met.
    user_guess = get_user_guess(num_of_cups)
    while type(user_guess) != int or user_guess not in range(0,num_of_cups):
        user_guess = get_user_guess(num_of_cups)
    return user_guess

def generate_cups()->list: #used to generate the "cups" that will be used for the game
    from random import randint
    occupied_cup = randint(0,num_of_cups-1)
    cups = [None for _ in range(3)]
    cups[occupied_cup] = "ball"
    return cups

def check_answer(user_guess:int,attempts:int)->tuple: #used to check if the cup the user chooses contains the ball
    if cups[user_guess] == "ball":
        return (f"You Win! it took you {attempts} attempts!",1)
    else:
        return ("Not quite! Try again!",2)

cups = generate_cups() #creates an array that holds 2 None type and one "occupied element" called "ball"

def shuffle_cups(cups:List[str])->List[str]:
        shuffle(cups)
    

while True: #Main game logic
    print(cups)
    user_guess = verify_user_guess()
    user_attempts+=1
    result_of_check = check_answer(user_guess,user_attempts)    
    if result_of_check[1] == 1:
        print(result_of_check[0])
        break
    else:
        print(result_of_check[0])
        shuffle_cups(cups)