from fastapi import APIRouter

router = APIRouter()


@router.get("/data/stock")
def stock():
    return [
        {"date":"Mon","price":100},
        {"date":"Tue","price":105},
        {"date":"Wed","price":110},
        {"date":"Thu","price":108},
        {"date":"Fri","price":115},
    ]

@router.get("/data/gold")
def gold():
    return [
        {"date":"Mon","price":80},
        {"date":"Tue","price":82},
        {"date":"Wed","price":81},
        {"date":"Thu","price":84},
        {"date":"Fri","price":86},
    ]

@router.get("/data/silver")
def silver():
    return [
        {"date":"Mon","price":40},
        {"date":"Tue","price":41},
        {"date":"Wed","price":43},
        {"date":"Thu","price":42},
        {"date":"Fri","price":45},
    ]

@router.get("/data/crypto")
def crypto():
    return [
        {"date":"Mon","price":150},
        {"date":"Tue","price":160},
        {"date":"Wed","price":170},
        {"date":"Thu","price":168},
        {"date":"Fri","price":182},
    ]

assets = [
    {
        "id": 1,
        "name": "Stocks",
        "symbol": "NIFTY 50",
        "price": "₹24,850",
        "change": "+1.84%",
        "trend": "Bullish",
        "risk": "Medium",
        "action": "BUY",
        "icon": "📈",
    },
    {
        "id": 2,
        "name": "Gold",
        "symbol": "24K",
        "price": "₹9,850/g",
        "change": "+0.62%",
        "trend": "Bullish",
        "risk": "Low",
        "action": "BUY",
        "icon": "🥇",
    },
    {
        "id": 3,
        "name": "Silver",
        "symbol": "999",
        "price": "₹118/g",
        "change": "-0.25%",
        "trend": "Neutral",
        "risk": "Medium",
        "action": "HOLD",
        "icon": "🥈",
    },
    {
        "id": 4,
        "name": "Bitcoin",
        "symbol": "BTC",
        "price": "₹89,50,000",
        "change": "+4.22%",
        "trend": "Bullish",
        "risk": "High",
        "action": "BUY",
        "icon": "₿",
    },



]

@router.get("/assets")
def get_assets():
    return assets


@router.get("/news")
def get_news():
    return [
        {
            "title": "Bitcoin Surges Above $120K",
            "source": "CoinDesk",
            "time": "10 min ago"
        },
        {
            "title": "Gold Prices Rise Amid Market Uncertainty",
            "source": "Reuters",
            "time": "25 min ago"
        },
        {
            "title": "Indian Stock Market Closes Higher",
            "source": "Economic Times",
            "time": "1 hour ago"
        },
        {
            "title": "AI Stocks Continue Strong Rally",
            "source": "Bloomberg",
            "time": "2 hours ago"
        }
    ]

