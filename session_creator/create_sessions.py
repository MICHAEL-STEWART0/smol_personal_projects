# Large portions of this file have been replaced with # in order to protect certain data.


from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
import time
from typing import Tuple,List
from datetime import date,timedelta

RED = "\033[91m"
RESET = "\033[0m"
def get_home_page()->str:
    '''
    open home_url text file to grab the first line of the text file which should be the link to start off where the script should begin its processes. ie the home page.
    '''
    with open("home_url.txt") as file:
        return file.read()

def get_target_date()-> Tuple[date,str]:
    '''
    prompts the user 3 questions in order to generate a date object of the given date.
    '''
    print("Hey! Welcome to future of scheduling your 12 week class sessions! I need to ask you a couple of questions about your class start date before we begin!\n")
    year,month,day = None,None,None
    while True:
        try:
            print("I will be asking you 3 questions to build out the date range for your class in this format mm/dd/yyyy please fill it out accordingly. \n")
            month= int(input("What MONTH is this class starting? In NUMBER form please enter it in mm format: Ie 01. (for example your class starts in january that number form would be 01) \n > "))
            day= int(input("What DAY is this class starting? In NUMBER form please enter it in dd format: Ie 23. (for example your class starts on the 23rd of january) \n > "))
            year= int(input("What YEAR is this class starting? In NUMBER form Please enter it in YYYY format: Ie 2024 \n > "))
            print("Thanks! I am creating a text file that will hold the 12 week range of your class! Bare with me... \n")
            break
        except ValueError:
            print(RED + "Hey! An error has occured, please verify you are typing in the dates in the correct format when asked. Please try again. \n" + RESET)
    
    requested_date = date(year,month,day)
    
    return (requested_date,requested_date.strftime("%m/%d/%Y"))

def add_week_to_date(date:Tuple[date,str])->Tuple[date,str]:
    '''
    takes in a date object and shifts its delta 7 days and returns the new object and its text version in a tupple.
    '''
    today = date[0] #grabs the date object from the tuple passed into it
    
    next_week = today + timedelta(days=7) #adds 7 days to that date

    return (next_week,next_week.strftime("%m/%d/%Y")) #returns a tuple with the newly incremented date object and the string version of that time

def generate_list_of_dates()->None:
    """
    uses 2 helper functions get_target_date, and add_week_to_date in order to generate a file that stores the 12 week range of when the class is starting and ending.
    """
    todays_date = get_target_date()
    with open("week1-12-dates.txt","w") as file:
        file.write(todays_date[1] + "\n") #write the str of todays date to file.
        for i in range(11):
            next_week = add_week_to_date(todays_date)
            file.write(next_week[1] + "\n")
            todays_date = next_week

def grab_class_dates()->List[str]:
    class_dates = []
    with open("week1-12-dates.txt","r") as file: #grab all dates in the file and add them to the dates list for stack like popping
        for line in file:
            line = line.strip()
            class_dates.append(line)

    return class_dates

def main():
    generate_list_of_dates()
    driver = webdriver.Chrome() #open chrome
    dates:List[str] = grab_class_dates()

    with open("locator_ids.txt") as file:

        for locator_id in file:
            driver.get(get_home_page()) #go to talent center view my sessions home page
            locator_id_input = driver.find_element(By.ID,"#") #grabs the locator id and stores it 
            locator_id_input.clear() #ensures that the field is clear of any input
            locator_id_input.send_keys(locator_id.strip() + "\n") #ensures that every locator id sent has a \n because the \n is treated as an auto enter key press
            time.sleep(5) #ensures enough time for SSO to authenticate on page load
            copy_session_button = driver.find_element(By.ID,"#")
            copy_session_button.click()
            time.sleep(3) #ensures enough time for page load to make sure we are not searching for elements that are not present
            parts_schedule_date_field = driver.find_element(By.ID,"#")
            parts_schedule_date_field.click()
            parts_schedule_date_field.clear()
            parts_schedule_date_field.send_keys(dates.pop(0)) #grabs a date from the list of dates and sends it to the field to be applied
            time.sleep(2) #ensures enough time for page load to make sure we are not searching for elements that are not present
            parts_schedule_date_field_apply_button = driver.find_element(By.ID,"#")
            parts_schedule_date_field_apply_button.click() #clicks apply to ensure that the date sent to the date field is saved
            
            parts_schedule_date_save_button = driver.find_element(By.ID,"#")
            parts_schedule_date_save_button.click()

            wait = (WebDriverWait(driver,5))
            try:
                alert = wait.until(EC.alert_is_present())
                if alert:
                    alert.accept() 
            except TimeoutException:
                print("No alert was present... continuing execution..")
            
            print("session created!")


    print("operations completed... All sessions should be in your View My Sessions. Please verify. Closing app...")
    time.sleep(2)
    driver.quit()

if __name__ == "__main__":
    main()