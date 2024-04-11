# Write a program that picks a random integer from 1 to 100, and has players guess the number. The rules are:

# If a player's guess is less than 1 or greater than 100, say "OUT OF BOUNDS"
# On a player's first turn, if their guess is
# within 10 of the number, return "WARM!"
# further than 10 away from the number, return "COLD!"
# On all subsequent turns, if a guess is
# closer to the number than the previous guess return "WARMER!"
# farther from the number than the previous guess, return "COLDER!"
# When the player's guess equals the number, tell them they've guessed correctly and how many guesses it took!



# Write a program that picks a random integer from 1 to 100, and has players guess the number.'

def  get_random_num(_range:list) -> int: #generate random int from given range in a list.
    import random
    return random.randint(_range[0],_range[1])

def generate_rules(path_to_file:str) -> None:
    rules = path_to_file
    if type(rules) != str: return

    try:
        with open(rules,"r") as f:
            print(f.read())
    except:
        print("file unable to be opened")
def get_user_guess() -> int:
    user_guess = input("Give me a number between 1 - 100 \n")
    while type(user_guess) == str:
        try:
            user_guess = int(user_guess)
            if type(user_guess) == int:
                if user_guess >= 1 and user_guess <= 100:
                    user_guesses.append(user_guess)
                    return user_guess 
                else:
                    raise ValueError("out of range.")
        except ValueError as error:
            print(f"Invalid input or out of range. see error -> {error}")
            user_guess = input("Give me a number between 1 - 100 \n")
    return user_guess

def handle_guess() -> None:
    user_guess  = get_user_guess()
    if user_guess == bot_num:
            print(f"You guessed correctly! it took you {len(user_guesses)} tries")
            return
    if len(user_guesses) == 1: #if this is the first time the user is guessing.
        if user_guesses[-1] >= (bot_num - 10) and user_guesses[-1] <= (bot_num + 10): #if the guess is in the range of +- 10
            print(f"{user_guesses[-1]} Was your guess and you were WARM!")
        else:
            print(f"{user_guesses[-1]} was your guess and you were COLD!")
    else:
        if  abs(user_guesses[-1] - bot_num) < abs(user_guesses[-2] - bot_num ): # if the distance between the latest guess is smaller than the distance from the previous guess
            print("warmer!")
        
        elif  abs(user_guesses[-1] - bot_num) > abs(user_guesses[-2] - bot_num): # if the distance between the latest guess is bigger than the distance from the previous guess
            print("colder!")

#begin program->

bot_num = get_random_num([1,100])

rules:str = "rules.txt" #path to rules

generate_rules(rules)

user_guess:int = None #set to none initially because the user has not guessed yet.
user_guesses = [] #history of user guesses.


while user_guess != bot_num:
    handle_guess()