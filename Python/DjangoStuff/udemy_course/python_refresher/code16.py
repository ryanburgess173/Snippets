from operator import itemgetter

def search(sequence, expected, finder):
    for elem in sequence:
        if finder(elem) == expected:
            return elem
    raise RuntimeError(f"Could not find an element with {expected}.")

friends = [
    {"name":"Rolf Smith", "age":24},
    {"name":"Adam Wool", "age":30},
    {"name":"Anne Pun", "age":27}
]

def get_friend_name(friend):
    return friend["name"]

print(search(friends, "Bob Smith", get_friend_name))

# OR use a lambda function:
print(search(friends, "Rolf Smith", lambda friend: friend["name"]))

# OR use operator from itemgetter:
print(search(friends, "Rolf Smith", itemgetter("name")))