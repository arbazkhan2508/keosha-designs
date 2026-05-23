"use client";

import React, { useState } from "react";
import Link from "next/link";

type FlowState = "login" | "signup" | "forgot";

export default function AccountPage() {
  const [flowState, setFlowState] = useState<FlowState>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Form states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  const [signUpFirst, setSignUpFirst] = useState("");
  const [signUpLast, setSignUpLast] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
  
  const [forgotEmail, setForgotEmail] = useState("");
  
  // Feedback states
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      setMessage({
        type: "success",
        text: "Successfully logged in. Welcome back to Keosha Designs!",
      });
    }, 1200);
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signUpPassword !== signUpConfirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return;
    }
    setIsLoading(true);
    setMessage(null);

    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      setMessage({
        type: "success",
        text: "Account created successfully! Transitioning to login...",
      });
      
      // Auto transition to login after 2s
      setTimeout(() => {
        setFlowState("login");
        setMessage(null);
        // Clear sign up form
        setSignUpFirst("");
        setSignUpLast("");
        setSignUpEmail("");
        setSignUpPassword("");
        setSignUpConfirmPassword("");
      }, 2000);
    }, 1200);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      setMessage({
        type: "success",
        text: "Password recovery link has been sent to your email / mobile number.",
      });
      setForgotEmail("");
    }, 1200);
  };

  const handleStateChange = (state: FlowState) => {
    setFlowState(state);
    setMessage(null);
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  // SVGs for eye icons
  const EyeIcon = () => (
    <svg className="w-5 h-5 text-[#7A6F62]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );

  const EyeOffIcon = () => (
    <svg className="w-5 h-5 text-[#7A6F62]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
    </svg>
  );

  return (
    <div className="w-full flex-1 bg-white flex items-center justify-center py-20 px-6 font-sans min-h-[75vh]">
      
      {/* Outer Auth Card */}
      <div className="max-w-[430px] w-full bg-[#FBF9F6] px-8 py-14 sm:px-10 sm:py-16 border border-[#EAE6DF] shadow-none relative overflow-hidden animate-fade-in">
        
        {/* Loading Spinner overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xs flex items-center justify-center z-15">
            <div className="w-8 h-8 border-2 border-[#C5A059] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Feedback Message */}
        {message && (
          <div className={`mb-6 p-4 text-xs tracking-wider uppercase font-medium border ${
            message.type === "success" 
              ? "bg-green-50 text-green-800 border-green-200" 
              : "bg-red-50 text-red-800 border-red-200"
          }`}>
            {message.text}
          </div>
        )}

        {/* 1. LOGIN FLOW SCREEN */}
        {flowState === "login" && (
          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <h1 className="font-serif text-3xl sm:text-[36px] text-[#1A1A1A] font-light text-center tracking-wide mb-8">
              Login
            </h1>

            {/* Email/Phone Input */}
            <div className="space-y-1.5 pt-2">
              <label className="block text-[9px] uppercase tracking-[0.25em] text-[#7A6F62] font-semibold">
                Please enter your email or mobile number
              </label>
              <input
                type="text"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full bg-transparent border-b border-[#EAE6DF] pb-2 pt-1 text-sm outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A] tracking-wide font-light"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-1.5 relative pt-2">
              <label className="block text-[9px] uppercase tracking-[0.25em] text-[#7A6F62] font-semibold">
                Enter password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full bg-transparent border-b border-[#EAE6DF] pb-2 pt-1 text-sm outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A] tracking-wide font-light"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 bottom-2.5 p-1 hover:text-[#1A1A1A] text-[#7A6F62] transition-colors cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-8 bg-[#2A2A2A] hover:bg-[#1A1A1A] text-white py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 rounded-none cursor-pointer"
            >
              Login
            </button>

            {/* Forgot Password trigger */}
            <div className="text-right">
              <button
                type="button"
                onClick={() => handleStateChange("forgot")}
                className="text-[9px] uppercase tracking-[0.2em] text-[#7A6F62] hover:text-[#C5A059] transition-colors font-medium cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>

            {/* Divider OR */}
            <div className="relative flex items-center justify-center my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#EAE6DF]"></div>
              </div>
              <span className="relative px-4 bg-[#FBF9F6] text-[10px] uppercase tracking-[0.25em] text-[#7A6F62] font-light">
                Or
              </span>
            </div>

            {/* Sign Up trigger */}
            <button
              type="button"
              onClick={() => handleStateChange("signup")}
              className="w-full border border-[#1A1A1A] bg-transparent hover:bg-[#1A1A1A] hover:text-[#FAF8F5] text-[#1A1A1A] py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 rounded-none cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        )}

        {/* 2. SIGN UP FLOW SCREEN */}
        {flowState === "signup" && (
          <form onSubmit={handleSignUpSubmit} className="space-y-5">
            <h1 className="font-serif text-3xl sm:text-[36px] text-[#1A1A1A] font-light text-center tracking-wide mb-8">
              Sign up
            </h1>

            {/* First and Last Name Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-[9px] uppercase tracking-[0.25em] text-[#7A6F62] font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  value={signUpFirst}
                  onChange={(e) => setSignUpFirst(e.target.value)}
                  className="w-full bg-transparent border-b border-[#EAE6DF] pb-2 pt-1 text-sm outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A] font-light"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[9px] uppercase tracking-[0.25em] text-[#7A6F62] font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  value={signUpLast}
                  onChange={(e) => setSignUpLast(e.target.value)}
                  className="w-full bg-transparent border-b border-[#EAE6DF] pb-2 pt-1 text-sm outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A] font-light"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-1.5 pt-2">
              <label className="block text-[9px] uppercase tracking-[0.25em] text-[#7A6F62] font-semibold">
                Email
              </label>
              <input
                type="email"
                required
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
                className="w-full bg-transparent border-b border-[#EAE6DF] pb-2 pt-1 text-sm outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A] font-light"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-1.5 relative pt-2">
              <label className="block text-[9px] uppercase tracking-[0.25em] text-[#7A6F62] font-semibold">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
                className="w-full bg-transparent border-b border-[#EAE6DF] pb-2 pt-1 text-sm outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A] font-light"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 bottom-2.5 p-1 hover:text-[#1A1A1A] text-[#7A6F62] transition-colors cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="space-y-1.5 relative pt-2">
              <label className="block text-[9px] uppercase tracking-[0.25em] text-[#7A6F62] font-semibold">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                value={signUpConfirmPassword}
                onChange={(e) => setSignUpConfirmPassword(e.target.value)}
                className="w-full bg-transparent border-b border-[#EAE6DF] pb-2 pt-1 text-sm outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A] font-light"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-0 bottom-2.5 p-1 hover:text-[#1A1A1A] text-[#7A6F62] transition-colors cursor-pointer"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>

            {/* Create Button */}
            <button
              type="submit"
              className="w-full mt-8 bg-[#2A2A2A] hover:bg-[#1A1A1A] text-white py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 rounded-none cursor-pointer"
            >
              Create
            </button>

            {/* Divider OR */}
            <div className="relative flex items-center justify-center my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#EAE6DF]"></div>
              </div>
              <span className="relative px-4 bg-[#FBF9F6] text-[10px] uppercase tracking-[0.25em] text-[#7A6F62] font-light">
                Or
              </span>
            </div>

            {/* Login trigger */}
            <button
              type="button"
              onClick={() => handleStateChange("login")}
              className="w-full border border-[#1A1A1A] bg-transparent hover:bg-[#1A1A1A] hover:text-[#FAF8F5] text-[#1A1A1A] py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 rounded-none cursor-pointer"
            >
              Login
            </button>
          </form>
        )}

        {/* 3. FORGOT PASSWORD FLOW SCREEN */}
        {flowState === "forgot" && (
          <form onSubmit={handleForgotSubmit} className="space-y-6">
            <h1 className="font-serif text-3xl sm:text-[36px] text-[#1A1A1A] font-light text-center tracking-wide mb-6">
              Forgot Password
            </h1>

            <p className="text-xs text-[#7A6F62] leading-relaxed font-light tracking-wide text-center max-w-[320px] mx-auto mb-6">
              Please enter your email or registered mobile number below. We will send you instructions to reset your password.
            </p>

            {/* Email Input */}
            <div className="space-y-1.5 pt-2">
              <label className="block text-[9px] uppercase tracking-[0.25em] text-[#7A6F62] font-semibold">
                Please enter your email or mobile number
              </label>
              <input
                type="text"
                required
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                className="w-full bg-transparent border-b border-[#EAE6DF] pb-2 pt-1 text-sm outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A] font-light"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-8 bg-[#2A2A2A] hover:bg-[#1A1A1A] text-white py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 rounded-none cursor-pointer"
            >
              Reset Password
            </button>

            {/* Back to Login trigger */}
            <div className="text-right">
              <button
                type="button"
                onClick={() => handleStateChange("login")}
                className="text-[9px] uppercase tracking-[0.2em] text-[#7A6F62] hover:text-[#C5A059] transition-colors font-medium cursor-pointer"
              >
                Back To Login
              </button>
            </div>

            {/* Divider OR */}
            <div className="relative flex items-center justify-center my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#EAE6DF]"></div>
              </div>
              <span className="relative px-4 bg-[#FBF9F6] text-[10px] uppercase tracking-[0.25em] text-[#7A6F62] font-light">
                Or
              </span>
            </div>

            {/* Sign Up trigger */}
            <button
              type="button"
              onClick={() => handleStateChange("signup")}
              className="w-full border border-[#1A1A1A] bg-transparent hover:bg-[#1A1A1A] hover:text-[#FAF8F5] text-[#1A1A1A] py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 rounded-none cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
