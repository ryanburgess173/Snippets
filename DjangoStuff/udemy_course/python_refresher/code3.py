friends = ["Rolf", "Jen", "Ryan"]

print("Ryan" in friends)

movies_watched = {"The Matrix", "Star Wars", "Her"}

user_movie = input("Enter something you've recently watched: ")

if user_movie in movies_watched:
    print(f"I've watched {user_movie} too!")
else:
    print("I haven't watched that yet.")
