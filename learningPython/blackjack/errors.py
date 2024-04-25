class CustomError:
    def __init__(self) -> None:
        '''
        class contains its own version of print to use color coding.
        props include (betting_error,error_colors)
        '''
        self.betting_error = "You do not have enough money to bet that amount! Please try again!"

    @staticmethod 
    def print(error_type:str)->None:
        error_colors = {
            "Red": "\u001b[31m",
            "Green": "\u001b[32m",
            "Yellow": "\u001b[33m",
            "RESET": "\u001b[37m"
        }
        print(error_colors["Red"] + error_type + error_colors["RESET"])


