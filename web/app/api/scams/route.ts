import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';


// Absolute path to the database file (matching the location used in init_db.py)
const DB_PATH = '/media/alex/LargeStorage/Projects/iScamHunter/scouting/data/scams.db';

export async function GET() {
    try {
        const db = new sqlite3.Database(DB_PATH, sqlite3.OPEN_READONLY);

        // Using a promise wrapper for standard sqlite3
        const query = (sql: string, params: any[] = []) => {
            return new Promise<any[]>((resolve, reject) => {
                db.all(sql, params, (err, rows) => {
                    if (err) reject(err);
                    else resolve(rows);
                });
            });
        };

        // Join Scams with Mechanisms
        // In a real app we would use more complex joins, but for now flat is fine
        // or we fetch scams and their mechanism name
        const sql = `
      SELECT 
        s.id, 
        s.title, 
        s.year, 
        s.location, 
        s.medium, 
        s.description,
        m.name as mechanism_name,
        m.psychology,
        m.abstract_hook,
        m.abstract_sting
      FROM scams s
      JOIN mechanisms m ON s.mechanism_id = m.id
      ORDER BY s.year ASC
    `;

        const rows = await query(sql);

        db.close();

        return NextResponse.json({ scams: rows });
    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch scams', details: String(error) },
            { status: 500 }
        );
    }
}
