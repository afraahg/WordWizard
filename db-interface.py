import sys
import sqlite3
import json

output = 'output'
input = sys.argv[1]

conn = sqlite3.connect("testdb.db")
c = conn.cursor()

rows = c.execute(input).fetchall()


data = {}
data['key'] = 'value'
json_data = json.dumps(data)


print(rows)

conn.close()
sys.stdout.flush()