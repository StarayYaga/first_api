import requests

q = requests.post('http://localhost:3001/', data={
    "pass": '2000'
})

print(q.text)