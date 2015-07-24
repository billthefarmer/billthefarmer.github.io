# json.py

import json
import sqlite3 as db

conn = db.connect('buccaneers.db')
c = conn.cursor()
e = []

for row in c.execute('SELECT * FROM events ORDER BY date'):
    n = row[0]
    d = row[1]
    t = row[2]
    print 'row: ', n, d, t
    print row

conn.close()
