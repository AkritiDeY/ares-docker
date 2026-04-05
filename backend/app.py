from flask import Flask, request, jsonify
from business import get_data

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World. This message is from backend EC2 Server. created only for the flask application.'

@app.route('/api', methods=['GET'])
def api():
    data = get_data()
    data = {
        'data': data
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0' , port=8000)