from flask import Flask
from flask_cors import CORS

from routes.login import login_bp
from routes.register import register_bp
#from routes.profile import profile_bp
#from routes.trails import trail_bp

app = Flask(__name__)

CORS(app)


app.register_blueprint(login_bp)
app.register_blueprint(register_bp)
#app.register_blueprint(profile_bp)
#app.register_blueprint(trail_bp)



@app.route("/")
def home():

    return "Account Service Running"



if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=5001,
        debug=True
    )