"""
Brief: This script is used to run the flow with the given message and tweaks.

Description: This script is used to run the flow with the given message and tweaks.
It uses the Flask framework to create a web server that listens for incoming requests.
The run_flow function sends a POST request to the LangFlow API to run the flow with the given message and tweaks.
The generate_report function generates a report based on the query provided in the request.
The process_query function processes the query and returns the response from the flow.

Usage: python server.py

Author: Team Genz-AI
"""

import os
import requests
from flask import Flask, request, jsonify
from typing import Optional
from dotenv import load_dotenv
from datastore import suggestions_store

app = Flask(__name__)

BASE_API_URL = os.environ.get("BASE_API_URL")
LANGFLOW_ID = os.environ.get("LANGFLOW_ID")
FLOW_ID = os.environ.get("FLOW_ID")
APPLICATION_TOKEN = os.environ.get("APPLICATION_TOKEN")
ENDPOINT = os.environ.get("ENDPOINT")


def run_flow(message: str, tweaks: Optional[dict] = None) -> dict:
    """
    Run the flow with the given message.

    Args:
        message (str): The message to send to the flow.
        tweaks (Optional[dict]): The tweaks to apply to the flow.

    Returns:
        dict: The response from the flow.
    """
    api_url = f"{BASE_API_URL}/lf/{LANGFLOW_ID}/api/v1/run/{ENDPOINT}"

    payload = {
        "input_value": message,
        "output_type": "chat",
        "input_type": "chat",
    }

    if tweaks:
        payload["tweaks"] = tweaks

    headers = {
        "Authorization": "Bearer " + APPLICATION_TOKEN,
        "Content-Type": "application/json",
    }

    response = requests.post(api_url, json=payload, headers=headers)
    return response.json()


@app.route("/report", methods=["POST"])
def generate_report() -> dict:
    """
    Generate a report based on the query.

    Returns:
        dict: The response from the flow.

    Raises:
        ValueError: If the query is not provided.
        RuntimeError: If an error occurs while processing the query.
    """
    data = request.json
    query = data.get("query", "")

    if not query:
        raise ValueError("'query' is required.")
    try:
        response = run_flow(query)
        message = response["outputs"][0]["outputs"][0]["results"]["message"]["data"][
            "text"
        ]
        return jsonify({"message": message, "response": response})
    except Exception as e:
        raise RuntimeError(str(e))


@app.route("/query", methods=["POST"])
def process_query(isFirstTime: bool = False):
    """
    Process the query and return the response.

    Returns:
        dict: The response from the flow.

    Raises:
        ValueError: If the query is not provided.
        RuntimeError: If an error occurs while processing the query.
    """
    data = request.json
    query = data.get("query", "")
    sesion_id = data.get("session_id", "")

    if not query:
        raise ValueError("'query' is required.")
    
    suggestions = []
    if not isFirstTime:
        suggestion_ids = ["sug1", "sug2", "sug3"]
        for sug_id in suggestion_ids:
            suggestion = suggestions_store.get(sug_id)
            if suggestion:
                suggestions.append({
                    "suggestion_id": sug_id,
                    "text": suggestion["text"],
                    "nested_suggestions": [
                        {
                            "suggestion_id": nested_sug_id,
                            "text": nested_sug["text"]
                        }
                        for nested_sug_id, nested_sug in suggestion["nested_suggestions"].items()
                    ]
                })
    tweaks = {
            "ChatInput-LKM8B": {
            "background_color": "",
            "chat_icon": "",
            "files": "",
            "sender": "User",
            "sender_name": "User",
            "session_id": sesion_id,
            "should_store_message": True,
            "text_color": "",
        },
    }
    try:
        response = run_flow(query, tweaks)
        message = response["outputs"][0]["outputs"][0]["results"]["message"]["data"][
            "text"
        ]
        return jsonify({"message": message, "response": response})
    except Exception as e:
        raise RuntimeError(str(e))


if __name__ == "__main__":
    load_dotenv()
    app.run(
        debug=os.environ.get("DEBUG", False),
        host=os.environ.get("HOST", "localhost"),
        port=os.environ.get("PORT", 5000),
    )
