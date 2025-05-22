from flask import Flask, jsonify, session, request, redirect, url_for
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity,get_jwt
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///site.db'
app.config["JWT_SECRET_KEY"] = 'blahblahpajamadaymilk'
app.config["JWT_TOKEN_LOCATION"] = ['headers']

db = SQLAlchemy(app)

jwt = JWTManager(app)

if __name__ == "__main__":
    with app.app_context():
        app.run(debug=True)

from core import views

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    is_active = db.Column(db.Boolean(), default=True)
    cart = db.Column(JSON, nullable=True, default=list)
    cart_products = relationship('CartProducts', backref="user", lazy="dynamic")
    wishlists = db.relationship('Wishlists', backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.username}>'

@app.route('/get_name', methods=['GET'])
@jwt_required
def get_name():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()

    if user:
        return jsonify({'message':'User found', 'name':user.name})
    else:
        return jsonify({'message':'User not found'}), 404


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    print('Received data:',username, password)

    user = User.query.filter_by(username=username).first()
    
    if user and bcrypt.check_password_hash(user.password, password):
        access_token = create_access_token(identity=user.id)
        return jsonify({'message':'Login Success'
