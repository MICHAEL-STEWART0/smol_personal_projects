class GameSession:
    def __init__(self) -> None:
        self.current_pot = 0 #betting pot
    
    @staticmethod
    def check_win(player_hand:int,dealer_hand:int,player_action:str)->str:
        '''
        Checks If Dealer or player wins in order of tie -> dealer_hand -> player_hand
        '''
        #TODO: handle debiting or crediting of the players wallet.

        if player_hand == 21 and dealer_hand == 21:
            return "Both Dealer And PLayer Hit 21! It Is A Draw"
        elif dealer_hand == 21:
            return "Dealer Wins"
        elif player_hand == 21:
            return "Player Wins"
        elif player_hand > 21:
            return "Player Busts! Dealer Wins"
        elif dealer_hand > 21:
            return "Dealer Busts! Player Wins"
        
        if player_action == "stay":
            if player_hand == dealer_hand:
                    return f"Both players have {dealer_hand} It is a draw!"
            if dealer_hand > player_hand:
                return "Dealer Wins"
            elif dealer_hand < player_hand:
                return "Player Wins"

    @staticmethod
    def verify_user_bet(users_wallet:int,user_bet_amount:int)->bool:
        '''
        verifies that the user wallet amount has enough money in it in order to bet
        '''
        return users_wallet >= user_bet_amount

    def debit_user_wallet(self,user_wallet:int,debit_amount:int)->None: #if user bet is verified we should run this function
        '''
        subtracts the debit amount from the wallet in question
        '''
        user_wallet -= debit_amount
        self.update_pot_total(debit_amount)

    def update_pot_total(self,amount:int)->None:
        '''
        update current session betting pot
        '''
        self.current_pot += amount

