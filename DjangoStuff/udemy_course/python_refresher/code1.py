name = "Bob"
greeting = f"Hello, {name}"

print(greeting)

name = "Rolf"
greeting = f"Hello, {name}"
print(greeting)

name = "Bob"
greeting = "Hello, {}"

with_name = greeting.format(name)

print(with_name)