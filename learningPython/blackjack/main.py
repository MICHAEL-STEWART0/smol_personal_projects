from cards import Deck
from dealer import Dealer
from game import GameSession
from player import Player



#if the dealer card first card is a 10 check win
#dealer first card is shown to player second is hidden until the player stays
#both players cards will be shown, 
#ask player hit or stay,
#if hit check for bust if stay check win




print(GameSession().check_win(10,22,"stay"))