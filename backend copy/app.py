from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({"message": "Hello from Azure Flask Backend!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
