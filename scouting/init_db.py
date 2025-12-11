import sqlite3
import os

DB_PATH = '/media/alex/LargeStorage/Projects/iScamHunter/scouting/data/scams.db'

def init_db():
    # Ensure directory exists
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    
    # 1. Mechanisms (The "DNA" of the deception)
    # This abstracts the method from the specific technology/era.
    c.execute('''
        CREATE TABLE IF NOT EXISTS mechanisms (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,          -- e.g., "Insurance Fraud via Destruction"
            psychology TEXT,                    -- e.g., "Moral Hazard, Information Asymmetry"
            abstract_hook TEXT,                 -- e.g., "Borrow against asset value"
            abstract_sting TEXT                 -- e.g., "Destroy asset to keep loan + cargo"
        )
    ''')

    # 2. Scams (The Specific Instances)
    # Links a specific historical event to a mechanism.
    c.execute('''
        CREATE TABLE IF NOT EXISTS scams (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            mechanism_id INTEGER,
            title TEXT NOT NULL,                -- e.g., "The Hegestratos Bottomry Fraud"
            year INTEGER,                       -- e.g., -300 (for 300 BC)
            location TEXT,                      -- e.g., "Syracuse / Athens"
            actors TEXT,                        -- e.g., "Hegestratos, Zenothemis"
            medium TEXT,                        -- e.g., "Maritime Shipping", "Telegram", "Blockchain"
            description TEXT,
            FOREIGN KEY(mechanism_id) REFERENCES mechanisms(id)
        )
    ''')

    # 3. Sources (Evidence)
    # Where did we find this?
    c.execute('''
        CREATE TABLE IF NOT EXISTS sources (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            scam_id INTEGER,
            title TEXT,                         -- e.g., "Speech against Zenothemis"
            author TEXT,                        -- e.g., "Demosthenes"
            citation TEXT,                      -- e.g., "Demosthenes 32"
            url TEXT,
            quote TEXT,
            FOREIGN KEY(scam_id) REFERENCES scams(id)
        )
    ''')

    # 4. Tags (For flexible taxonomy)
    c.execute('''
        CREATE TABLE IF NOT EXISTS tags (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE
        )
    ''')
    
    c.execute('''
        CREATE TABLE IF NOT EXISTS scam_tags (
            scam_id INTEGER,
            tag_id INTEGER,
            FOREIGN KEY(scam_id) REFERENCES scams(id),
            FOREIGN KEY(tag_id) REFERENCES tags(id)
        )
    ''')

    conn.commit()
    return conn

def seed_data(conn):
    c = conn.cursor()
    
    # --- INSERT ANCIENT ANCESTOR (300 BC) ---
    print("Seeding Ancient History...")
    
    # Mechanism: Maritime Insurance Fraud
    c.execute('''
        INSERT OR IGNORE INTO mechanisms (name, psychology, abstract_hook, abstract_sting)
        VALUES (?, ?, ?, ?)
    ''', (
        "Maritime Barratry / Insurance Fraud",
        "Profit from destruction vs. creation",
        "Secure loan against cargo value",
        "Sink ship, keep loan, keep cargo (if possible)"
    ))
    mech_id_ancient = c.lastrowid or c.execute("SELECT id FROM mechanisms WHERE name = ?", ("Maritime Barratry / Insurance Fraud",)).fetchone()[0]

    # Instance: Hegestratos
    c.execute('''
        INSERT INTO scams (mechanism_id, title, year, location, actors, medium, description)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ''', (
        mech_id_ancient,
        "The Hegestratos Bottomry Fraud",
        -300,
        "Mediterranean Sea (Syracuse to Athens)",
        "Hegestratos",
        "Corn Ship",
        "Hegestratos took out a bottomry loan (insurance) on a ship full of corn. He plotted to sink the ship, save himself in a lifeboat, and keep the loan money. He was caught in the act by passengers and drowned trying to escape."
    ))
    scam_id_ancient = c.lastrowid

    # Source: Demosthenes
    c.execute('''
        INSERT INTO sources (scam_id, title, author, citation, url, quote)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (
        scam_id_ancient,
        "Against Zenothemis",
        "Demosthenes",
        "Demost. 32",
        "http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0078",
        "He tried to cut a hole in the ship's bottom... but being detected, he threw himself into the sea."
    ))

    # --- INSERT MODERN DESCENDANT (2025) ---
    print("Seeding Modern Descendant...")
    
    # Mechanism: Exit Scam (Rug Pull) - conceptually similar to sinking the ship
    # Actually, a Rug Pull IS sinking the ship!
    c.execute('''
        INSERT OR IGNORE INTO mechanisms (name, psychology, abstract_hook, abstract_sting)
        VALUES (?, ?, ?, ?)
    ''', (
        "Liquidity Removal / Rug Pull",
        "Trust exploitation in unregulated markets",
        "Inflate token value / Lock liquidity",
        "Remove liquidity (sink the pool), keeping investor ETH"
    ))
    mech_id_modern = c.lastrowid or c.execute("SELECT id FROM mechanisms WHERE name = ?", ("Liquidity Removal / Rug Pull",)).fetchone()[0]

    c.execute('''
        INSERT INTO scams (mechanism_id, title, year, location, actors, medium, description)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ''', (
        mech_id_modern,
        "The 'AnubisDAO' Rug Pull",
        2021,
        "Ethereum Blockchain",
        "Anonymous Devs",
        "Crypto Token (ANKH)",
        "Developers raised $60M in ETH for a 'currency backed by baskets of assets'. 20 hours into the sale, the liquidity was removed (ship sunk), and the funds were transferred to personal wallets."
    ))
    
    conn.commit()
    print("✅ Database Seeded Successfully.")

if __name__ == "__main__":
    conn = init_db()
    seed_data(conn)
    conn.close()
