"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function StoresPage() {
  const [bookingInfo, setBookingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    topic: "Saree Customization",
    notes: "",
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  const handleReset = () => {
    setBookingInfo({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      topic: "Saree Customization",
      notes: "",
    });
    setBookingSuccess(false);
  };

  return (
    <div className="w-full bg-[#FCFAF6] font-sans pb-20">
      
      {/* Editorial Header Banner */}
      <section className="relative h-[45vh] w-full bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1600&h=700"
          alt="Studio Visit"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center px-6">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#C5A059] font-bold block mb-2">
            Visit Keosha
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#FCFAF6] tracking-wide font-light uppercase">
            Atelier Studios
          </h1>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mt-4" />
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left Column: Studio Locations & Details */}
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">Lucknow flagship</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-light uppercase">
              The Lucknow Studio
            </h2>
            <div className="w-12 h-px bg-[#C5A059]" />
            <p className="text-xs sm:text-sm text-[#7A6F62] leading-relaxed tracking-wider font-light">
              Experience the craftsmanship of Sanskriti Jain's atelier firsthand. Walk through our collections, explore handloom swatches, and meet our senior master tailors for a bespoke fitting session.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs uppercase tracking-widest text-[#7A6F62] border-t border-[#E6E2D8] pt-8">
            <div className="space-y-2">
              <span className="font-semibold text-[#1A1A1A]">Studio Address</span>
              <p className="normal-case leading-relaxed font-light">
                Keosha Designs Studio<br />
                Hazratganj, Lucknow<br />
                Uttar Pradesh, 226001
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-semibold text-[#1A1A1A]">Atelier Hours</span>
              <p className="normal-case leading-relaxed font-light">
                Monday &ndash; Saturday<br />
                11:00 AM &ndash; 7:00 PM<br />
                Sunday: By private request only
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-semibold text-[#1A1A1A]">Direct Contact</span>
              <p className="normal-case leading-relaxed font-light">
                WhatsApp: +91 95286 40429<br />
                Phone: +91 95286 40429<br />
                Email: studio@keoshaindia.com
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-semibold text-[#1A1A1A]">Virtual Studio Tour</span>
              <p className="normal-case leading-relaxed font-light">
                Available via WhatsApp Video Call.<br />
                Book an appointment to browse the catalog virtually.
              </p>
            </div>
          </div>

          {/* Luxury Atelier Promise banner */}
          <div className="bg-[#FAF8F5] border border-[#E6E2D8] p-6 rounded-xs space-y-3">
            <h4 className="font-serif text-sm text-[#1A1A1A] uppercase tracking-wider font-bold">
              The Bespoke Experience
            </h4>
            <p className="text-xs text-[#7A6F62] leading-relaxed font-light">
              Every appointment is designed around your needs. Whether you are planning a bridal lehenga, selecting luxury sarees, or requiring adjustments to custom sizes (up to 6XL), we dedicate our space entirely to you during your booked slot.
            </p>
          </div>
        </div>

        {/* Right Column: Appointment Booking Form */}
        <div className="bg-[#FAF8F5] border border-[#E6E2D8] p-8 rounded-xs flex flex-col justify-between min-h-[500px]">
          {bookingSuccess ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-12">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center border border-green-200">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl tracking-wide text-[#1A1A1A] uppercase">
                  Appointment Request Received
                </h3>
                <p className="text-xs text-[#7A6F62] leading-relaxed">
                  Thank you, {bookingInfo.name}. We have requested a slot in our Lucknow studio diary for you.
                </p>
              </div>

              <div className="w-full bg-white p-4 border border-[#E6E2D8] text-left text-xs space-y-1.5 rounded-xs">
                <p className="font-semibold uppercase tracking-wider text-[#1A1A1A] font-serif text-[11px] mb-2">Request Details</p>
                <p><span className="text-[#7A6F62]">Client:</span> {bookingInfo.name} ({bookingInfo.phone})</p>
                <p><span className="text-[#7A6F62]">Consultation:</span> {bookingInfo.topic}</p>
                <p><span className="text-[#7A6F62]">Date/Time:</span> {bookingInfo.date} at {bookingInfo.time}</p>
                {bookingInfo.notes && <p><span className="text-[#7A6F62]">Special Note:</span> "{bookingInfo.notes}"</p>}
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#1A1A1A] hover:bg-[#C5A059] text-white uppercase text-xs tracking-widest transition-colors font-medium w-full"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
              <div className="space-y-1.5">
                <h3 className="font-serif text-lg text-[#1A1A1A] uppercase tracking-wider mb-2">
                  Request Fitting Slot
                </h3>
                <p className="text-xs text-[#7A6F62] leading-relaxed font-light mb-4">
                  Please choose a date and time. Our coordinator will contact you to confirm the slot.
                </p>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#7A6F62] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={bookingInfo.name}
                  onChange={(e) => setBookingInfo({ ...bookingInfo, name: e.target.value })}
                  placeholder="Sanskriti Jain"
                  className="w-full bg-white border border-[#E6E2D8] px-4 py-2.5 outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#7A6F62] mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={bookingInfo.email}
                    onChange={(e) => setBookingInfo({ ...bookingInfo, email: e.target.value })}
                    placeholder="sanskriti@example.com"
                    className="w-full bg-white border border-[#E6E2D8] px-4 py-2.5 outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#7A6F62] mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={bookingInfo.phone}
                    onChange={(e) => setBookingInfo({ ...bookingInfo, phone: e.target.value })}
                    placeholder="+91 95286 40429"
                    className="w-full bg-white border border-[#E6E2D8] px-4 py-2.5 outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#7A6F62] mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={bookingInfo.date}
                    onChange={(e) => setBookingInfo({ ...bookingInfo, date: e.target.value })}
                    className="w-full bg-white border border-[#E6E2D8] px-4 py-2 text-xs outline-none focus:border-[#C5A059] transition-colors text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#7A6F62] mb-1">Preferred Time</label>
                  <select
                    required
                    value={bookingInfo.time}
                    onChange={(e) => setBookingInfo({ ...bookingInfo, time: e.target.value })}
                    className="w-full bg-white border border-[#E6E2D8] px-4 py-2.5 text-xs outline-none focus:border-[#C5A059] transition-colors text-gray-500"
                  >
                    <option value="">Select Time Slot</option>
                    <option value="11:00 AM">11:00 AM - 12:30 PM</option>
                    <option value="01:00 PM">01:00 PM - 02:30 PM</option>
                    <option value="03:00 PM">03:00 PM - 04:30 PM</option>
                    <option value="05:00 PM">05:00 PM - 06:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#7A6F62] mb-1">Reason for Visit</label>
                <select
                  value={bookingInfo.topic}
                  onChange={(e) => setBookingInfo({ ...bookingInfo, topic: e.target.value })}
                  className="w-full bg-white border border-[#E6E2D8] px-4 py-2.5 text-xs outline-none focus:border-[#C5A059] transition-colors text-gray-500"
                >
                  <option value="Saree Customization">Saree Customization</option>
                  <option value="Kurta & Sharara Fittings">Kurta & Sharara Fittings</option>
                  <option value="Bridal Customisation">Bridal & Trousseau Customisation</option>
                  <option value="Size Consultation">Size Inclusivity Consultation</option>
                  <option value="General Boutique Viewing">General Atelier Viewing</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#7A6F62] mb-1">Atelier Notes (Optional)</label>
                <textarea
                  rows={3}
                  value={bookingInfo.notes}
                  onChange={(e) => setBookingInfo({ ...bookingInfo, notes: e.target.value })}
                  placeholder="Provide sizing notes, outfit references, or customization needs..."
                  className="w-full bg-white border border-[#E6E2D8] p-3 text-xs outline-none focus:border-[#C5A059] transition-colors resize-none placeholder:text-[#7A6F62]/50"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-[#1A1A1A] hover:bg-[#C5A059] text-white py-3.5 uppercase text-xs tracking-widest transition-colors font-semibold"
              >
                Submit Slot Request
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
