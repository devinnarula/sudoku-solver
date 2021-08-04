from flask import Flask, jsonify, request, json
from flask_cors import CORS
import backtracing

app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)

# grid = [
#     [0, 0, 0, 0, 0, 0, 6, 8, 0],
#     [0, 0, 0, 0, 7, 3, 0, 0, 9],
#     [3, 0, 9, 0, 0, 0, 0, 4, 5],
#     [4, 9, 0, 0, 0, 0, 0, 0, 0],
#     [8, 0, 3, 0, 5, 0, 9, 0, 2],
#     [0, 0, 0, 0, 0, 0, 0, 3, 6],
#     [9, 6, 0, 0, 0, 0, 3, 0, 8],
#     [7, 0, 0, 6, 8, 0, 0, 0, 0],
#     [0, 2, 8, 0, 0, 0, 0, 0, 0]
# ]

# @app.route('/getGrid', methods=['GET'])
# def get_grid():
#     response = jsonify(grid)
#     return response

@app.route('/solve', methods=['POST'])
def solve():
    grid = request.json.get('grid')
    backtracing.solve(grid)
    return jsonify(grid)

if __name__ == '__main__':
    app.run(debug=True)