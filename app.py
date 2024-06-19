from flask import Flask, request, render_template
from speech_to_text import main

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":

        # Record speech and convert to text

        text = main()
    else:
        text = ""

    return render_template("index.html", text=text)

if __name__ == "__main__":
    app.run(debug=True)