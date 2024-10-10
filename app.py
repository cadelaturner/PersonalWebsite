from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def hello_website():
	return render_template("index.html")

@app.route("/secret")
def secret():
	return render_template("secret.html")

@app.route("/dogs")
def dogs():
	return render_template("dogs.html")
