import React, { useState } from 'react';
import { GiWheat } from 'react-icons/gi';
import { FaUser, FaLock, FaPhone, FaArrowRight, FaShieldAlt, FaLeaf, FaCloudSun, FaWifi, FaCheckCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Auth({ t, lang }) {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    role: 'farmer'
  });

  const a = t?.auth || {
    welcomeTitle: "Welcome Back to KrishiRakshak",
    welcomeSub: "Access your AI farm telemetry & early threat alerts.",
    registerTitle: "Join KrishiRakshak AI",
    registerSub: "Register your farm for smart crop protection & AI advisories.",
    loginTab: "Sign In",
    registerTab: "Register",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "Ramesh Kumar",
    phoneLabel: "Mobile Number",
    phonePlaceholder: "+91 98765 43210",
    passwordLabel: "Password",
    passwordPlaceholder: "••••••••",
    roleLabel: "Account Role",
    roleFarmer: "Farmer (किसान)",
    roleOfficer: "Agri Officer / Expert",
    roleAdmin: "Krishi Kendra Admin",
    loginBtn: "Login to Dashboard",
    registerBtn: "Create Account",
    switchLogin: "Already have an account? Sign In",
    switchRegister: "New to KrishiRakshak? Register your farm",
    badgeSecure: "  2026 Encrypted Auth",
    sideTitle: "AI-Powered Farm Defense System",
    sideSubtext: "Real-time crop threat detection, automated pest risk scoring, and disaster warnings designed for Indian farmers.",
    feature1: "Instant Leaf Disease Detection",
    feature2: "Localized Weather & Climate Alerts",
    feature3: "Offline First Sync for Remote Areas"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isRegister ? 'Account created successfully!' : 'Login successful!');
    navigate('/');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center section-padding bg-gradient-to-b from-alt to-main transition-colors duration-200">
      <div className="max-page-width w-full">

        {/* Full Page 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Brand Hero & AI Value Highlights */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-6">

              {/* Title & Subtext */}
              <div className="space-y-3 pt-2">
                <h1 className="text-2xl sm:text-3xl font-black text-main leading-tight tracking-tight">
                  {a.sideTitle}
                </h1>
                <p className="text-sm font-medium text-muted leading-relaxed">
                  {a.sideSubtext}
                </p>
              </div>

              {/* Core Feature Bullet Points */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-card/60 border border-theme">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <FaLeaf className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-main">{a.feature1}</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-card/60 border border-theme">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <FaCloudSun className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-main">{a.feature2}</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-card/60 border border-theme">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <FaWifi className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-main">{a.feature3}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Form Container Card */}
          <div className="lg:col-span-6 bg-card border border-theme rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">

            {/* Header & Tabs */}
            <div className="space-y-4">

              {/* Tab Switcher */}
              <div className="grid grid-cols-2 bg-alt p-1 rounded-xl border border-theme text-xs font-extrabold">
                <button
                  type="button"
                  onClick={() => setIsRegister(false)}
                  className={`py-2 rounded-lg transition-all cursor-pointer ${!isRegister
                      ? 'bg-card text-primary shadow-xs'
                      : 'text-muted hover:text-main'
                    }`}
                >
                  {a.loginTab}
                </button>
                <button
                  type="button"
                  onClick={() => setIsRegister(true)}
                  className={`py-2 rounded-lg transition-all cursor-pointer ${isRegister
                      ? 'bg-card text-primary shadow-xs'
                      : 'text-muted hover:text-main'
                    }`}
                >
                  {a.registerTab}
                </button>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-black text-main">
                  {isRegister ? a.registerTitle : a.welcomeTitle}
                </h2>
                <p className="text-xs sm:text-sm font-medium text-muted mt-1">
                  {isRegister ? a.registerSub : a.welcomeSub}
                </p>
              </div>
            </div>

            {/* Auth Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {isRegister && (
                <div>
                  <label className="block text-xs font-extrabold text-main uppercase tracking-wider mb-1.5">
                    {a.fullNameLabel}
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3.5 top-3.5 w-4 h-4 text-muted" />
                    <input
                      type="text"
                      required
                      placeholder={a.fullNamePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-alt border border-theme rounded-xl text-sm font-medium text-main focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-extrabold text-main uppercase tracking-wider mb-1.5">
                  {a.phoneLabel}
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3.5 top-3.5 w-4 h-4 text-muted" />
                  <input
                    type="tel"
                    required
                    placeholder={a.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-alt border border-theme rounded-xl text-sm font-medium text-main focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-main uppercase tracking-wider mb-1.5">
                  {a.passwordLabel}
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3.5 top-3.5 w-4 h-4 text-muted" />
                  <input
                    type="password"
                    required
                    placeholder={a.passwordPlaceholder}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-alt border border-theme rounded-xl text-sm font-medium text-main focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full btn-spec bg-primary hover:opacity-95 text-white dark:text-[#0D140E] font-black uppercase tracking-wider shadow-md py-3 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>{isRegister ? a.registerBtn : a.loginBtn}</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Toggle Mode */}
            <div className="pt-2 text-center border-t border-theme">
              <button
                type="button"
                onClick={() => setIsRegister(!isRegister)}
                className="text-xs font-bold text-primary hover:underline cursor-pointer"
              >
                {isRegister ? a.switchLogin : a.switchRegister}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
