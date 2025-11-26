from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/")
def portfolio():
    return render_template("index.html")

# Old routes can just redirect to the portfolio
@app.route("/mca")
def mca():
    return redirect(url_for("portfolio"))

@app.route("/sem")
def sem():
    return redirect(url_for("portfolio"))

if __name__ == "__main__":
    app.run()
