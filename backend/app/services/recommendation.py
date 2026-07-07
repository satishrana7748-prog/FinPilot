import random

def get_recommendations(asset: str):

    valid_assets = ["stock", "gold", "silver", "bitcoin"]

    asset = asset.lower()

    if asset not in valid_assets:
        return {
            "error": "Asset not supported",
            "supported_assets": valid_assets
        }

    # Dummy intelligent logic (presentation ready)
    signal_pool = ["BUY", "HOLD", "SELL"]

    # Simulated confidence logic
    confidence_map = {
        "BUY": random.uniform(70, 95),
        "HOLD": random.uniform(50, 75),
        "SELL": random.uniform(60, 90)
    }

    signal = random.choice(signal_pool)

    return {
        "asset": asset,
        "signal": signal,
        "confidence": round(confidence_map[signal], 2),
        "strategy": "Dummy ML Model v1"
    }