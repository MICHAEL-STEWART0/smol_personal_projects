from random import shuffle

class Deck:
    '''
    contains all 52 cards in a list and shuffles list of cards then assigns the shufled deck to self.deck
    '''
    def __init__(self):
        cards = ["A","A","A","A",2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10]
        shuffle(cards)
        self.deck = cards