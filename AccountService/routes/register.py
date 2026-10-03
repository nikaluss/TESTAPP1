from flask import Blueprint, request, jsonify
from database import get_connection

register_bp = Blueprint("register", __name__)


@register_bp.route("/register", methods=["POST"])
def register():

    try:

        data = request.get_json()

        if not data:

            return jsonify({
                "status": "failed",
                "message": "No JSON data received"
            }), 400


        username = data.get("username")
        password = data.get("password")
        fullname = data.get("fullname")
        email = data.get("email")
        role = data.get("role", "USER")


        if not username or not password or not fullname or not email:

            return jsonify({
                "status": "failed",
                "message": "Please complete all required fields."
            }), 400


        conn = get_connection()
        cursor = conn.cursor()


        # Check duplicate username
        cursor.execute(
            "SELECT AccountID FROM accounts WHERE Username = ?",
            username
        )

        if cursor.fetchone():

            conn.close()

            return jsonify({
                "status": "failed",
                "message": "Username already exists."
            }), 409


        # Check duplicate email
        cursor.execute(
            "SELECT AccountID FROM accounts WHERE Email = ?",
            email
        )

        if cursor.fetchone():

            conn.close()

            return jsonify({
                "status": "failed",
                "message": "Email already exists."
            }), 409


        cursor.execute("""

            INSERT INTO accounts
            (
                Username,
                Password,
                FullName,
                Email,
                Role
            )

            VALUES
            (
                ?, ?, ?, ?, ?
            )

        """,

        username,
        password,
        fullname,
        email,
        role

        )


        conn.commit()
        conn.close()


        return jsonify({

            "status": "success",
            "message": "Registration successful."

        }),201


    except Exception as e:

        return jsonify({

            "status": "error",
            "message": str(e)

        }),500