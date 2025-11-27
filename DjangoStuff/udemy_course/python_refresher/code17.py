import functools

user = {"username":"jose", "access_level":"guest"}

def make_secure(func):
    @functools.wraps(func)
    def secure_function(*args, **kwargs):
        if user["access_level"] == "admin":
            return func(*args, **kwargs)
        else:
            return f"No admin permissions for {user['username']}."
        
    return secure_function

# note: if you do this, you need to use functools.wraps in make_secure otherwise
# the function get_admin_password() will get named secure_function() in memory.
# You can see this by printing out get_admin_password.__name__
@make_secure
def get_password(panel):
    if panel == "admin":
        return "1234"
    elif panel == "billing":
        return "super_secure_password"

print(get_password("billing"))