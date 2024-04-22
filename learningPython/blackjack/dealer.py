class Dealer:
    def __init__(self,deck_of_cards:list) -> None:
        '''
        This class is the bot that the player plays against, when initializing this bot make sure to pass in a shuffled deck of cards from the Cards class.
        '''
        self.count = 0 #Current dealer card count
        self.deck = deck_of_cards
        
    def deal_card(self,current_card_count:int)->int:
        '''
        Takes in a pre-shuffled deck and grabs the bottom card out of the deck and checks the card count, if it is an ace it will determine to return a 1 or 11
        '''
        delt_card = self.deck.pop(0)

        if delt_card =="A":
            if current_card_count <= 10:
                return 11
            else:
                return 1

        return delt_card
    
    def match_player_bet(self,player_bet:int,total_pot)->int:
        '''
        Match the bet of the player and return the new pot total.
        '''
        total_pot += player_bet
        return total_pot
