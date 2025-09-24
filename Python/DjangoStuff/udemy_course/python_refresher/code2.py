listVar = ["Bob", "Rolf", "Anne"]
tupleVar = ("Bob", "Rolf", "Anne")
setVar = {"Bob", "Rolf", "Anne"}

friends = {"Bob", "Rolf", "Anne"}
abroad = {"Bob", "Anne"}

local_friends = friends.difference(abroad)
print(local_friends)

local_friends = abroad.difference(friends) # not the same as above!
print(local_friends)

localFriends = {"Rolf"}
abroadFriends = {"Bob", "Anne"}

friends = localFriends.union(abroadFriends)
print(friends)

art = {"Bob", "Jen", "Rolf", "Charlie"}
science = {"Bob", "Jen", "Adam", "Anne"}

inBoth = art.intersection(science)
print(inBoth)