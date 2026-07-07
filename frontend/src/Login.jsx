import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Register Failed");
    }
  };

  const loginUser = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.access_token) {
        localStorage.setItem("token", data.access_token);
        alert("Login Successful ✅");
        onLogin(true);
      } else {
        alert(data.message || "Login Failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server Error");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background:
          "linear-gradient(135deg,#2563eb 0%,#4f46e5 40%,#7c3aed 100%)",
      }}
    >
      <div
        className="bg-white"
        style={{
          width: "430px",
          borderRadius: "25px",
          padding: "45px",
          boxShadow: "0 20px 60px rgba(0,0,0,.25)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div
            style={{
              fontSize: "55px",
              marginBottom: "10px",
            }}
          >
            💹
          </div>

          <h1
            style={{
              fontSize: "34px",
              fontWeight: "700",
              color: "#1e3a8a",
              marginBottom: "5px",
            }}
          >
            FinPilot
          </h1>

          <p
            style={{
              color: "#6b7280",
            }}
          >
            AI Powered Investment Recommendation System
          </p>
        </div>

        <label
          style={{
            fontWeight: "600",
          }}
        >
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "8px",
            marginBottom: "20px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            fontSize: "16px",
          }}
        />

        <label
          style={{
            fontWeight: "600",
          }}
        >
          Password
        </label>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "8px",
            marginBottom: "30px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            fontSize: "16px",
          }}
        />

        <button
          onClick={loginUser}
          style={{
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "12px",
            background: "#2563eb",
            color: "white",
            fontWeight: "700",
            fontSize: "17px",
            cursor: "pointer",
            marginBottom: "15px",
          }}
        >
          Login
        </button>

        <button
          onClick={registerUser}
          style={{
            width: "100%",
            padding: "15px",
            border: "2px solid #2563eb",
            borderRadius: "12px",
            background: "white",
            color: "#2563eb",
            fontWeight: "700",
            fontSize: "17px",
            cursor: "pointer",
          }}
        >
          Register
        </button>

        <p
          style={{
            marginTop: "30px",
            textAlign: "center",
            color: "#6b7280",
            fontSize: "14px",
          }}
        >
          © 2026 FinPilot | B.Tech Major Project
        </p>
      </div>
    </div>
  );
}

export default Login;