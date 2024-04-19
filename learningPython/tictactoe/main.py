from typing import List
rule_set = {
    "turn" : 1,
    "current_piece" : None
}
def generate_gameboard()->list:
    '''
    generate the game board with coordinates
    '''
    gameboard = [
                ["0,0","0,1","0,2"],
                ["1,0","1,1","1,2"], 
                ["2,0","2,1","2,2"]  
                ] 
    return gameboard
def generate_rules()->None:
    '''
    Print the rules to std.out
    '''
    with open(r"rules.txt",'r') as file:
        for row in file:
            print(row)
def set_game_piece(player_turn:int)->str:
    '''
    handles returning which game piece is at play
    '''
    match player_turn:
        case 1:
            rule_set["current_piece"] = "x"
            return "x"
        case 2:
            rule_set["current_piece"] = "o"
            return "o" 
def update_turn(rule_set:dict)->int:
    '''
    handles updating the  player turn
    '''
    if rule_set["turn"] == 1:
        rule_set["turn"] = 2
        return 1
    elif rule_set["turn"] == 2:
        rule_set["turn"] = 1
        return 2
def show_gameboard(game_board)->list:
    print("Here are the current options available! -> see below\n")
    for row in game_board:
        print(row)
def get_user_input()->List[int]:
    '''
    Asks user for input via stdin, recursively calls it self if the length of the input is greater than 2
    '''
    user_choice = input("Which Cell Do you want to play? \n").split(",")
    approved_chars = ["0","1","2"]

    try: 
        if len(user_choice) > 2 or user_choice[0] not in approved_chars or user_choice[1] not in approved_chars:
            raise ValueError("Input too long please make sure you follow the (x,y) format you can only enter values from 0-2")
    except ValueError as error:
        print(error)
        get_user_input()

    user_choice = [int(num) for num in user_choice]

    if gameboard[user_choice[0]][user_choice[1]] == "x" or gameboard[user_choice[0]][user_choice[1]] == "o":
        print("The cell is selected already, try again.")
        show_gameboard(gameboard)
        get_user_input()
    return user_choice
def update_gameboard(cell1:int,cell2:int)->None:
    gameboard[cell1][cell2] = set_game_piece(update_turn(rule_set))
def horizontal_win_check()->bool:
    for row in gameboard:
        if row[0] == row[1] and row[0] == row[2]:
            rule_set["current_piece"] = row[0]
            return True
    return False
def vertical_win_check()->bool:
    for i in range(len(gameboard)):
        if gameboard[0][i] == gameboard[1][i] and gameboard[0][i] == gameboard[2][i] :
            return True
    return False
def diagonal_win_check()->bool:
    three_in_a_row1 = ""
    three_in_a_row2 = ""
    for i in range(len(gameboard)):
        three_in_a_row1+=gameboard[i][i]
        three_in_a_row2+=gameboard[len(gameboard)-i-1][i]
    if three_in_a_row1 == "xxx" or three_in_a_row1 == "ooo" or three_in_a_row2 == "xxx" or three_in_a_row2 == "ooo": 
        return True
    return False

#initiate game logic
generate_rules()
gameboard = generate_gameboard() #Set the game board
show_gameboard(gameboard) #sends default gameboard to std.out

while True:
    user_choices = get_user_input()
    update_gameboard(user_choices[0],user_choices[1])
    show_gameboard(gameboard)
    did_user_win_horizonal = horizontal_win_check()
    did_user_win_vertical = vertical_win_check()
    did_user_win_diagonal = diagonal_win_check()
    if did_user_win_horizonal or did_user_win_vertical or did_user_win_diagonal:
        break
    
print(f"{rule_set['current_piece']} won!")