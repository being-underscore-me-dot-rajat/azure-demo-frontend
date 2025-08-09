from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder="build", static_url_path="/")

@app.route("/")
def serve_index():
    return send_from_directory(app.static_folder, "index.html")

# Your API routes
@app.route("/api/hello")
def hello():
    return {"message": "Hello from Flask + React!"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
