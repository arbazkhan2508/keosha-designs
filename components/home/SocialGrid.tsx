"use client";

import React from "react";
import Image from "next/image";

export const SocialGrid: React.FC = () => {
  const posts = [
    {
      url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400&h=400",
      likes: "432",
      comments: "28",
    },
    {
      url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400&h=400",
      likes: "892",
      comments: "41",
    },
    {
      url: "https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&q=80&w=400&h=400",
      likes: "567",
      comments: "19",
    },
    {
      url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400&h=400",
      likes: "1,204",
      comments: "72",
    },
    {
      url: "https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&q=80&w=400&h=400",
      likes: "618",
      comments: "30",
    },
    {
      url: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=400&h=400",
      likes: "945",
      comments: "52",
    },
  ];

  return (
    <section className="w-full border-t border-[#E6E2D8] py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center space-y-2 mb-12">
        <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">Social Atelier</span>
        <h2 className="font-serif text-2xl sm:text-3xl tracking-wide text-[#1A1A1A]">
          <a
            href="https://www.instagram.com/keosha_designs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C5A059] transition-colors"
          >
            Follow @keosha_designs
          </a>
        </h2>
        <p className="text-[11px] text-[#7A6F62] tracking-widest uppercase">
          Stories from Lucknow studio &bull; Client diaries &bull; Behind the stitch
        </p>
      </div>

      {/* Instagrid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {posts.map((post, idx) => (
          <a
            key={idx}
            href="https://www.instagram.com/keosha_designs"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group aspect-square bg-[#F0EDE6] overflow-hidden border border-[#E6E2D8]"
          >
            <Image
              src={post.url}
              alt="Instagram post from Keosha designs"
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 text-[#FCFAF6] text-xs font-semibold">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 fill-[#FCFAF6]" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                {post.likes}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 fill-[#FCFAF6]" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                </svg>
                {post.comments}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
