from cards import Deck
from dealer import Dealer
from game import GameSession
from player import Player
from errors import CustomError
#if the dealer card first card is a 10 check win until the player stays
#both players cards will be shown, 
#ask player hit or stay,
#if hit check for bust if stay check win

current_game_session = GameSession()
dealerBOT = Dealer(Deck().deck)
user = Player()
user_bet = user.bet()
print(user.wallet,current_game_session.current_pot)

while True:
    while True:
        try:
            if current_game_session.verify_user_bet(user.wallet,user_bet):
                current_game_session.debit_user_wallet(user,user_bet)
                dealerBOT.match_player_bet(user_bet,current_game_session)
                print(f"The user bet {user_bet} and the dealer matched it! The total pot is {current_game_session.current_pot}")
                break
            else:
                raise ValueError
        except ValueError as error:
            CustomError.print(CustomError().betting_error)
            user_bet = user.bet()

    if current_game_session.initial_turn:
        dealerBOT.count += dealerBOT.deal_card(dealerBOT.count)
        print(f"dealer was delt cards.. Its count is {dealerBOT.count}")
        dealerBOT.count += dealerBOT.deal_card(dealerBOT.count)
        print(f"dealer was delt cards.. Its count is {dealerBOT.count}")
        user.count += dealerBOT.deal_card(user.count)
        print(f"You were delt cards your count is {user.count}")
        user.count += dealerBOT.deal_card(user.count)
        print(f"You were delt cards your count is {user.count}")
        current_game_session.initial_turn = False

    winner = current_game_session.check_win(user.count,dealerBOT.count)
    print("checking if there was a winner..")
    if  winner != None:
        current_game_session.print_winner(winner)
        break
    print("there was no winner.. continuing")
    user_action = user.hit_or_stay()

    if user_action == "hit":
        if current_game_session.does_dealer_hit(dealerBOT.count):
            dealerBOT.count += dealerBOT.deal_card(dealerBOT.count)
            print(f"dealer was delt cards.. Its count is {dealerBOT.count}")
        user.count += dealerBOT.deal_card(user.count)
        print(f"You were delt cards your count is {user.count}")
        winner = current_game_session.check_win(user.count,dealerBOT.count)
        if  winner != None:
            if winner == -1:
                print("Dealer wins! The player busted!")
                break
            if winner == -2:
                print("Player wins! The dealer busted!")
                break
            print(current_game_session.print_winner(winner))
            break
    elif user_action == "stay":
        winner = current_game_session.check_win(user.count,dealerBOT.count,user_action)
        if  winner != None:
            if winner == -1:
                print("Dealer wins! The player busted!")
                break
            elif winner == -2:
                print("Player wins! The dealer busted!")
                break
            print(current_game_session.print_winner(winner))
            play_again = current_game_session.play_again()
            if  play_again == False:
                break
            elif play_again == True:
                dealerBOT.count = 0
                user.count = 0
                current_game_session.current_pot = 0
                current_game_session.initial_turn = True
                dealerBOT.deck = Deck().deck
        

print("Thanks for playing!")