class ChatService:

    def generate_reply(self, message: str):

        msg = message.lower()

        if "stock" in msg:
            return (
                "📈 Stock Recommendation\n\n"
                "• Suitable for long-term wealth creation.\n"
                "• Moderate to High Risk.\n"
                "• Recommended allocation: 40%–60%."
            )

        elif "bitcoin" in msg or "crypto" in msg:
            return (
                "₿ Bitcoin Analysis\n\n"
                "• High Risk • High Return\n"
                "• Suitable for aggressive investors.\n"
                "• Recommended allocation: 5%–10%."
            )

        elif "gold" in msg:
            return (
                "🟡 Gold Analysis\n\n"
                "• Safe Haven Asset\n"
                "• Protects against inflation.\n"
                "• Recommended allocation: 15%–20%."
            )

        elif "silver" in msg:
            return (
                "⚪ Silver Analysis\n\n"
                "• Moderate Risk\n"
                "• Good diversification asset.\n"
                "• Useful for long-term holding."
            )

        elif "portfolio" in msg:
            return (
                "📊 Suggested Portfolio\n\n"
                "Stocks : 50%\n"
                "Gold : 20%\n"
                "Silver : 10%\n"
                "Bitcoin : 20%"
            )

        elif "risk" in msg:
            return (
                "⚠️ Investment Risk Levels\n\n"
                "Stocks : Medium\n"
                "Gold : Low\n"
                "Silver : Medium\n"
                "Bitcoin : High"
            )

        elif "hello" in msg or "hi" in msg:
            return (
                "👋 Hello!\n"
                "I'm FinPilot AI Assistant.\n"
                "Ask me anything about investments."
            )

        else:
            return (
                "🤖 FinPilot AI can answer questions about:\n\n"
                "📈 Stocks\n"
                "🟡 Gold\n"
                "⚪ Silver\n"
                "₿ Bitcoin\n"
                "📊 Portfolio\n"
                "⚠️ Risk Analysis"
            )