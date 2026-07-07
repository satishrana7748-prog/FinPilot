import pandas as pd
import numpy as np

import os

# dataset folder create karna agar nahi hai
os.makedirs("dataset", exist_ok=True)

dates = pd.date_range(start="2024-01-01", periods=200)

def generate_asset(name, base_price):
    return pd.DataFrame({
        "date": dates,
        "asset": name,
        "price": base_price + np.random.randn(len(dates)).cumsum()
    })

stock = generate_asset("STOCK", 100)
gold = generate_asset("GOLD", 2000)
silver = generate_asset("SILVER", 25)
crypto = generate_asset("BITCOIN", 40000)

stock.to_csv("dataset/stock.csv", index=False)
gold.to_csv("dataset/gold.csv", index=False)
silver.to_csv("dataset/silver.csv", index=False)
crypto.to_csv("dataset/crypto.csv", index=False)

print("Dataset ready ✔")