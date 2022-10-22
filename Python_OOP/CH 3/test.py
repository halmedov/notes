#%%
import pandas
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

x = pandas.read_html("https://ipho-unofficial.org/timeline/")

x[0]

# %%
