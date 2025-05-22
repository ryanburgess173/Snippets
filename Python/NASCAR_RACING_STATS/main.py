import requests
from bs4 import BeautifulSoup
import re
import pandas as pd

BASE_URL = 'http://racing-reference.info'

years = range(1979, 2019)

cup_results = [requests.get(BASE_URL + f'/raceyear/{year}/W') for year in years]

set([r.status_code for r in cup_results])

race_anchors = []
href_regex = re.compile('/race/.*W')