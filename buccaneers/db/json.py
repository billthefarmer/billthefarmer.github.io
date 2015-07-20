# json.py

import json
import sqlite3 as db

conn = db.connect('buccaneers.db')
c = conn.cursor()

for row in c.execute('SELECT * FROM events'):
    print 'row: ', row

conn.close()
