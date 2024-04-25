from player import Player
from typing import Tuple
class GameSession:
    '''
    methods contained are as follows(check_win,verify_user_bet,does_dealer_hit,update_pot_total)
    '''
    def __init__(self) -> None:
        self.current_pot = 0 #betting pot
        self.initial_turn = True
    
    @staticmethod
    def check_win(player_hand:int,dealer_hand:int,player_action:str = None)->int:
        '''
        Checks If Dealer or player wins in order of tie -> dealer_hand -> player_hand
        '''
        if player_hand == 21 and dealer_hand == 21:
            return 0
        elif dealer_hand == 21:
            return 1
        elif player_hand == 21:
            return 2
        elif player_hand > 21:
            return -1
        elif dealer_hand > 21:
            return -2
        
        if player_action == "stay":
            if player_hand == dealer_hand:
                return 0
            if dealer_hand > player_hand:
                return 1
            elif dealer_hand < player_hand:
                return 2
    @staticmethod
    def print_winner(winner:int)->str:
        if winner == 0:
            return "It Is A Draw"
        elif winner == 1:
            return "Dealer Wins"
        elif winner == 2:
            return "Player Wins"
    @staticmethod
    def verify_user_bet(users_wallet:int,user_bet_amount:int)->bool:
        '''
        verifies that the user wallet amount has enough money in it in order to bet
        '''
        return users_wallet >= user_bet_amount
    @staticmethod
    def does_dealer_hit(dealer_count:int)->bool:
        '''
        dealer should never hit if his count is higher than 17.
        '''
        return dealer_count < 17 

    def debit_user_wallet(self,user:Player,debit_amount:int)->None: #if user bet is verified we should run this function
        '''
        subtracts the debit amount from the wallet in question
        '''
        user.wallet -= debit_amount
        self.update_pot_total(debit_amount)

    def update_pot_total(self,amount:int)->None:
        '''
        update current session betting pot
        '''
        self.current_pot += amount
    @staticmethod
    def play_again()->bool:
        while True:
            play_again = input("Would you like to play again? Y or N \n > ")
            if play_again == "Y":
                return True
            elif play_again == "N":
                return False
            print("Please check your input and try again. \n")


