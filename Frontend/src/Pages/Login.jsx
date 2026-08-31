import React, { useState } from 'react';
import { GiWheat } from 'react-icons/gi';
import { FaUser, FaLock, FaPhone, FaArrowRight, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Login({ t, lang }) {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    role: 'farmer'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation of login action
    alert(isRegister ? 'Account created successfully!' : 'Login successful!');
    navigate('/');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center section-padding bg-gradient-to-b from-alt to-main transition-colors duration-200">
      <div className="w-full max-w-md bg-card border border-theme card-spec p-6 sm:p-8 shadow-xl space-y-6">

        {/* Brand Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center justify-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-lg bg-[#166534] dark:bg-[#22C55E] flex items-center justify-center text-white dark:text-[#0D140E]">
              <GiWheat className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-primary tracking-tight">AGRI AI</span>
          </Link>
          <h2 className="text-xl font-extrabold text-main">
            {isRegister ? 'Farmer & Expert Registration' : 'Welcome Back to AGRI AI'}
          </h2>
          <p className="text-xs text-muted font-medium">
            {isRegister
              ? 'Join KrishiRakshak AI platform for crop protection'
              : 'Enter your credentials to access farm telemetry'}
          </p>
        </div>

        {/* Login / Register Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label className="block text-xs font-bold text-main uppercase tracking-wider mb-1.5">
                Full Name / नाम
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 w-4 h-4 text-muted" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-9 pr-4 py-2.5 bg-alt border border-theme rounded-lg text-sm text-main focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-main uppercase tracking-wider mb-1.5">
              Mobile Number / मोबाइल नंबर
            </label>
            <div className="relative">
              <FaPhone className="absolute left-3 top-3 w-4 h-4 text-muted" />
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-9 pr-4 py-2.5 bg-alt border border-theme rounded-lg text-sm text-main focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-main uppercase tracking-wider mb-1.5">
              Password / पासवर्ड
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 w-4 h-4 text-muted" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-9 pr-4 py-2.5 bg-alt border border-theme rounded-lg text-sm text-main focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          {isRegister && (
            <div>
              <label className="block text-xs font-bold text-main uppercase tracking-wider mb-1.5">
                User Role / भूमिका
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2.5 bg-alt border border-theme rounded-lg text-sm text-main focus:outline-none focus:border-primary transition-colors font-medium"
              >
                <option value="farmer">Farmer (किसान)</option>
                <option value="expert">Agri Officer / Expert (कृषि अधिकारी)</option>
                <option value="admin">Krishi Kendra Admin</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full btn-spec bg-primary hover:opacity-95 text-white dark:text-[#0D140E] font-black uppercase tracking-wider shadow-md py-3 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <span>{isRegister ? 'Create Account' : 'Login to Dashboard'}</span>
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
            {isRegister
              ? 'Already have an account? Login here'
              : "Don't have an account? Register as a Farmer"}
          </button>
        </div>

        {/* Security Assurance */}
        <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-muted text-center pt-1">
          <FaShieldAlt className="w-3.5 h-3.5 text-primary shrink-0" />
          <span>Encrypted   2026 Portal Access</span>
        </div>

      </div>
    </div>
  );
}
