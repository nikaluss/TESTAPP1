from flask import Blueprint, request, jsonify
from database import get_connection

login_bp = Blueprint("login", __name__)


@login_bp.route("/login", methods=["POST"])

def login():

    try:

        data = request.get_json(force=True)

        if not data:

            return jsonify({

                "status": "failed",
                "message": "No JSON data received"

            }), 400


        username = data.get("username")
        password = data.get("password")


        if not username or not password:

            return jsonify({

                "status": "failed",
                "message": "Username and password required"

            }), 400



        conn = get_connection()

        cursor = conn.cursor()


        # Check account from database

        cursor.execute('''

            SELECT
                AccountID,
                Username,
                FullName,
                Email,
                Role

            FROM accounts

            WHERE Username = ?
            AND Password = ?

        ''',
        username,
        password
        )


        user = cursor.fetchone()


        conn.close()



        if user:


            return jsonify({

                "status": "success",
                "message": "Login successful",

                "user": {

                    "AccountID": user[0],
                    "Username": user[1],
                    "FullName": user[2],
                    "Email": user[3],
                    "Role": user[4]

                },

                "token": "ABC123"

            }), 200



        else:


            return jsonify({

                "status": "failed",
                "message": "Invalid username or password"

            }), 401



    except Exception as e:


        return jsonify({

            "status": "error",
            "message": str(e)

        }), 500