"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { CartItemRow } from "./cart/CartItemRow";
import { CheckoutForm } from "./cart/CheckoutForm";
import { OrderSuccessPanel } from "./cart/OrderSuccessPanel";

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    setCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    clearCart,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<"cart" | "shipping" | "success">("cart");
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  if (!isCartOpen) return null;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep("success");
  };

  const handleClose = () => {
    setCartOpen(false);
    // Reset checkout step to cart on close if successful
    if (checkoutStep === "success") {
      clearCart();
      setCheckoutStep("cart");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-500"
        onClick={handleClose}
      />

      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md transform bg-[#FAF8F5] shadow-2xl transition-transform duration-500 ease-out flex flex-col h-full border-l border-[#E6E2D8]">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#E6E2D8] flex items-center justify-between bg-white">
            <h2 className="text-xl font-serif tracking-wider uppercase text-[#1A1A1A]">
              {checkoutStep === "cart" && "Your Atelier Cart"}
              {checkoutStep === "shipping" && "Shipping Details"}
              {checkoutStep === "success" && "Order Confirmed"}
            </h2>
            <button
              onClick={handleClose}
              className="text-[#7A6F62] hover:text-[#1A1A1A] p-1 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Cart Contents */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {checkoutStep === "cart" && (
              <>
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                    <svg
                      className="w-12 h-12 text-[#C5A059]/60"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    <p className="text-base text-[#7A6F62] tracking-wide">
                      Your wardrobe is empty.
                    </p>
                    <button
                      onClick={handleClose}
                      className="px-6 py-2.5 border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FCFAF6] text-[#1A1A1A] uppercase text-xs tracking-widest transition-colors font-medium"
                    >
                      Browse Shop
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <CartItemRow
                        key={item.id}
                        item={item}
                        updateQuantity={updateQuantity}
                        removeFromCart={removeFromCart}
                      />
                    ))}
                  </div>
                )}
              </>
            )}

            {checkoutStep === "shipping" && (
              <CheckoutForm
                shippingInfo={shippingInfo}
                setShippingInfo={setShippingInfo}
                onSubmit={handleCheckoutSubmit}
                cartTotal={cartTotal}
              />
            )}

            {checkoutStep === "success" && (
              <OrderSuccessPanel
                shippingInfo={shippingInfo}
                cartTotal={cartTotal}
                onClose={handleClose}
              />
            )}
          </div>

          {/* Footer controls for Cart Review */}
          {checkoutStep === "cart" && cartItems.length > 0 && (
            <div className="border-t border-[#E6E2D8] bg-white p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase tracking-widest text-[#7A6F62]">Subtotal</span>
                <span className="text-lg font-serif font-bold text-[#1A1A1A]">
                  ₹{cartTotal.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="text-[11px] text-[#7A6F62] leading-relaxed">
                Taxes and complimentary shipping will be calculated at checkout. Every garment is
                tailor-made in Lucknow to your requirements.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => clearCart()}
                  className="py-3 border border-[#E6E2D8] text-[#7A6F62] hover:text-red-600 hover:border-red-200 uppercase text-xs tracking-widest transition-colors font-medium cursor-pointer"
                >
                  Clear Cart
                </button>
                <button
                  onClick={() => setCheckoutStep("shipping")}
                  className="py-3 bg-[#1A1A1A] hover:bg-[#C5A059] text-white uppercase text-xs tracking-widest transition-colors font-medium cursor-pointer"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
