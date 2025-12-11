import json
import os
import sys

# In a real implementation, this would import a google.generativeai or openai client
# import google.generativeai as genai

def analyze_text(text):
    """
    Simulates the AI analysis of a text chunk.
    In production, this sends the 'text' + 'schema' to an LLM.
    """
    
    print("--- SCOUT AGENT ACTIVATED ---")
    print(f"Reading {len(text)} characters of text...")
    print("Identifying deception patterns...")
    print("Abstracting mechanism...")
    print("Matching to known archetypes...")
    
    # MOCKED RESPONSE (Simulating the extraction from the specific south_sea_bubble.txt text)
    if "South Sea" in text or "Cornhill" in text:
        return {
            "id": "south-sea-bubble-1720",
            "title": "The South Sea Bubble / The Cornhill Hustle",
            "year": 1720,
            "category": "Financial",
            "mechanism": {
                "hook": "Promise of infinite returns from a mysterious, exclusive undertaking",
                "sting": "Promoter collects capital and vanishes (Rug Pull) / Insiders sell at peak (Pump & Dump)",
                "psychology": "Fear Of Missing Out (FOMO) + Social Proof (Herd Behavior)"
            },
            "source_title": "Memoirs of Extraordinary Popular Delusions and the Madness of Crowds",
            "source_author": "Charles Mackay",
            "quote": "A company for carrying on an undertaking of great advantage, but nobody to know what it is.",
            "descendants": [
                "Crypto Rug Pull",
                "ICO Scams",
                "Yield Farming Ponzi",
                "Vaporware Startups"
            ]
        }
    else:
        return None

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 scout.py <text_file>")
        sys.exit(1)
        
    filepath = sys.argv[1]
    
    try:
        with open(filepath, 'r') as f:
            content = f.read()
            
        result = analyze_text(content)
        
        if result:
            output_path = os.path.join(os.path.dirname(filepath), "../scams.json")
            
            # Load existing or create new list
            db = []
            if os.path.exists(output_path):
                with open(output_path, 'r') as db_file:
                    try:
                        db = json.load(db_file)
                    except json.JSONDecodeError:
                        db = []
            
            # Append non-duplicate
            if not any(entry['id'] == result['id'] for entry in db):
                db.append(result)
                print(f"✅ Extracted new Ancestor: {result['title']}")
            else:
                print(f"⚠️ Ancestor already in DB: {result['title']}")
                
            with open(output_path, 'w') as db_file:
                json.dump(db, db_file, indent=2)
                
            print(f"💾 Database saved to: {output_path}")
            
    except FileNotFoundError:
        print(f"Error: File not found {filepath}")

if __name__ == "__main__":
    main()
