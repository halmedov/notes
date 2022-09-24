#%%
from aiohttp import payload
import requests

url = 'https://xkcd.com/353/'

res = requests.get(url)

print(res)
#%%
print(dir(res))  # Shows us attributes and methods we can access
#%%
print(help(res))
# %%
print(res.text)
# %%
img_url = 'https://imgs.xkcd.com/comics/python.png'

r = requests.get(img_url)

print(r.content)
# %%
with open('comic.png', 'wb') as f:
    f.write(r.content)

# %%
print(r.status_code)
# %%
print(r.ok)
# %%
print(r.headers)
# %%
payload = {'page': 2, 'count': 25}

new_url = 'https://eu.httpbin.org/get'

req = requests.get(new_url, params=payload)

print(req.text)
# %%
print(req.url)
# %%
changed_url = 'https://eu.httpbin.org/post'
data = {'username': 'my_name', 'password': 'testing'}

req2 = requests.post(changed_url, data=data)

print(req2.text)
# %%
print(req2.json())
# %%
req2_dict = req2.json()

print(req2_dict['form'])
# %%
# Basic Authentication
req3 = requests.get('https://eu.httpbin.org/basic-auth/my_name/testing',
                    auth=('my_name', 'testing'))

print(req3.json())
# %%
# Timeout
req4 = requests.get('https://eu.httpbin.org/delay/1', timeout=3)
print(req4)
# %%
req5 = requests.get('https://eu.httpbin.org/delay/6', timeout=3)
print(req5)