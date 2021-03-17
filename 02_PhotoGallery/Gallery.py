from flask import Flask, render_template, redirect, url_for, send_from_directory
app = Flask(__name__)
#To solve issue of browser caching CSS stylesheet data that was causing changes to the stylesheet to not be reflected in page.
#Can also be solved by hard reloading the browser (Ctrl + shift + R)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0		


@app.route("/")
def home():
	return render_template("home.html")



if __name__ == "__main__":
	    app.run(debug=True)