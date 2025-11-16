import mysql.connector
from mysql.connector import Error

class DB:

    def __init__(self):
        try:
            self.connection = mysql.connector.connect(
                host = 'localhost',
                database = 'racing',
                user = '',
                password = '')
            if connection.is_connected():
                self.db_Info = connection.get_server_info()
                self.cursor = connection.cursor()
                cursor.execute("select database();")
                self.record = cursor.fetchone()
        except Error as e:
            print(e)

    def closeConnection(self):
        if self.connection.is_connected():
                self.cursor.close()
                self.connection.close()