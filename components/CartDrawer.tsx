"use client";

import React, { useState } from "react";
import Link from "next/link";
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

      <div className="absolute inset-y-0 right-0 flex max-w-full">
        <div className="w-screen max-w-[500px] transform bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col h-full border-l border-[#E6E2D8]">
          {/* Header */}
          <div className="px-8 py-7 border-b border-[#E6E2D8] flex items-center justify-between bg-white">
            <h2 className="text-[34px] font-serif tracking-normal text-[#1A1A1A] font-light">
              {checkoutStep === "cart" && "Cart"}
              {checkoutStep === "shipping" && "Shipping Details"}
              {checkoutStep === "success" && "Order Confirmed"}
            </h2>
            <button
              onClick={handleClose}
              className="text-[#7A6F62] hover:text-[#1A1A1A] p-2 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Cart Contents */}
          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {checkoutStep === "cart" && (
              <>
                {cartItems.length === 0 ? (
                  /* Empty Cart View matching Image 5 */
                  <div className="h-full flex flex-col items-center justify-center text-center py-20 px-4 space-y-4">
                    {/* Cart with Exclamation Mark Icon */}
                    <svg
                      className="w-14 h-14 text-[#1A1A1A]/85 mb-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 3H5L6.68 14.39C6.8 15.2 7.5 15.8 8.32 15.8H18.4C19.18 15.8 19.85 15.26 20 14.5L21.8 6.5H6"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="9" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="18" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                      <path
                        d="M12 7.5V11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <circle cx="12" cy="13" r="0.75" fill="currentColor" />
                    </svg>

                    <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A]">
                      CART EMPTY
                    </p>

                    <p className="text-[11px] tracking-wider text-[#7A6F62] leading-[1.8] max-w-[280px]">
                      Your cart is currently empty. Explore{" "}
                      <Link
                        href="/shop"
                        onClick={handleClose}
                        className="underline hover:text-[#C5A059] transition-colors text-[#7A6F62]"
                      >
                        our collections
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/shop"
                        onClick={handleClose}
                        className="underline hover:text-[#C5A059] transition-colors text-[#7A6F62]"
                      >
                        discover something you love
                      </Link>{" "}
                      to add to your cart.
                    </p>
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
            <div className="border-t border-[#E6E2D8] bg-white p-8 space-y-4">
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
