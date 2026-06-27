"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login Failed");
        return;
      }

      localStorage.setItem("token", data.token);

      alert("Login Successful");

      window.location.href = "/admin/dashboard";
    } catch (error) {
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-5">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-4">
            <Lock className="text-black" size={35} />
          </div>

          <h1 className="text-3xl font-bold text-white">
            Admin Panel
          </h1>

          <p className="text-gray-300 mt-2">
            Secure Login Portal
          </p>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="text-gray-300 text-sm block mb-2">
            Email Address
          </label>

          <div className="relative">
            <Mail
              className="absolute left-4 top-3.5 text-gray-400"
              size={18}
            />

            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white outline-none focus:border-white"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-gray-300 text-sm block mb-2">
            Password
          </label>

          <div className="relative">
            <Lock
              className="absolute left-4 top-3.5 text-gray-400"
              size={18}
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/20 rounded-xl text-white outline-none focus:border-white"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3"
            >
              {showPassword ? (
                <EyeOff className="text-gray-400" size={20} />
              ) : (
                <Eye className="text-gray-400" size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition duration-300"
        >
          {loading ? "Signing In..." : "Login"}
        </button>

        <div className="text-center mt-6 text-gray-400 text-sm">
          © 2026 Admin Dashboard
        </div>

      </div>
    </div>
  );
}