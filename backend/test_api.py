import requests
import json

BASE_URL = "http://localhost:8000"

def test_get_reportes():
    print("Testing GET /reportes...")
    try:
        response = requests.get(f"{BASE_URL}/reportes")
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Success! Retrieved {len(data)} reports.")
            if len(data) > 0:
                print("Sample report:", json.dumps(data[0], indent=2))
        else:
            print(f"❌ Failed. Status: {response.status_code}")
            print(response.text)
    except Exception as e:
        print(f"❌ Connection error: {e}")

if __name__ == "__main__":
    test_get_reportes()
