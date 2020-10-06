import json 
import pandas as pd
from urllib import request
import re

url = 'https://test-b2aac.firebaseio.com/goods.json' #要改firebase 資料庫的網址
json_data = request.urlopen(url).read().decode("utf-8")
goodlist = [json_data]
f = open('test.json', 'w+')
f.writelines(goodlist)
f.close()




#抓取 firebase json 檔的code 
