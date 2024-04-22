
class Player:
    def __init__(self) -> None:
        self.count = 0
        self.wallet = self.deposit_in_to_wallet()

    def player_action(self):
        '''
        This allows the player to hit or stay.
        '''
        while True:
            player_action = input("What action would you like to take? Hit Or Stay? \n").lower().trim()
            if player_action == "hit" or player_action == "stay":
                return player_action
            else: 
                print("There was an error trying to process your action, Please try again")

    def bet(self)->int:
        '''
        allows the player to bet whatever number the player inputs. validation still required via gameinstance to update wallet.
        '''
        while True:
            player_bet = input("How much would you like to bet? \n")
            try:
                player_bet = int(player_bet)    
                return player_bet
            except ValueError:
                print("There was an error trying to place your bet! Please try again")
    
    def deposit_in_to_wallet(self)->None:
        '''
        Asks for user input to add ammount to wallet, uncapped ammount this is fake monies obviosly. player wallet is updated directly here due to no needing to verify funds.
        '''
        while True:
            player_deposit = input("How much would you like to deposit? \n")
            try:
                player_deposit = int(player_deposit)   
                self.wallet = player_deposit 
            except ValueError:
                print("There was an error trying to deposit your monies into your wallet, Please try again.")