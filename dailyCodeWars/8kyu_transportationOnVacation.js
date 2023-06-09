/*After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d). */

//solution

//if d is 7 days or greater find the cost of rental and apply 50$ discount
// if d is 3 days or greater find the cost of rental and apply 20$ discount
// otherwise return total cose of rental at base rate.
function rentalCarCost(d) {
  return d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40;
}
