number = 7
user_input = input("Enter 'y' if you would like to play: ")

if user_input == "y":
    user_number = int(input("Guess our number: "))
    if user_number == number:
        print("You guessed correctly!")
    else:
        print("Sorry, it's wrong!")