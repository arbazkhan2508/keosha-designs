"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import wallCovering1 from "../../public/images/wall-coverings/Wall_Coverings_1.jpg";
import wallCovering2 from "../../public/images/wall-coverings/Wall_Coverings_2.jpg";
import homesBanner from "../../public/images/Sarita_Handa_Homes_banner_new.jpg";

const wallCoverings = [
    {
        id: 1,
        image: wallCovering1,
        collection: "ECHLEON FOR SARITA HANDA",
        title: "AYDIN HONEY",
        description:
            "Embroidered Art Deco-inspired geometry on Sisal, with rhythmic fan-like patterns, earthy tones and refined texture, blending craftsmanship, depth and architectural elegance in contemporary interiors.",
    },
    {
        id: 2,
        image: wallCovering2,
        collection: "ECHLEON FOR SARITA HANDA",
        title: "SATPURA TAN",
        description:
            "Hand-embroidered trees, foliage and wildlife on Sisal, rendered in warm earthy tones and intricate texture, blending craftsmanship, colour and natural grandeur for refined, timeless spaces.",
    },
];

export const WallCoveringsSection: React.FC = () => {
    return (
        <section className="w-full bg-[#F4F1EC] overflow-hidden">

            {/* Top Section */}
            <div className="px-5 md:px-8 lg:px-10 pt-10 md:pt-12">

                {/* Heading */}
                <h2 className="font-serif text-[#25231F] text-[32px] md:text-[44px] lg:text-[58px] leading-[1.06] tracking-[-0.03em]">
                    A New Era of Ultra-Luxury: Embroidered Wall Coverings
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-8 md:mt-10">

                    {wallCoverings.map((item) => (
                        <div key={item.id} className="group">

                            {/* Image */}
                            <div className="relative w-full aspect-[1/1.05] overflow-hidden bg-[#E8E1D8]">

                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                                />

                            </div>

                            {/* Content */}
                            <div className="pt-4 md:pt-5">

                                {/* Collection */}
                                <p className="uppercase text-[#75706A] text-[12px] md:text-[13px] tracking-[0.16em] font-light">
                                    {item.collection}
                                </p>

                                {/* Title */}
                                <h3 className="mt-5 uppercase text-[#3A3835] text-[18px] md:text-[20px] tracking-[0.10em] font-light leading-[1.2]">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-5 max-w-[92%] text-[#706C67] text-[14px] md:text-[15px] leading-[1.65] tracking-[0.03em] font-light">
                                    {item.description}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>
            </div>

            {/* Bottom Banner */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-16 md:mt-20">

                {/* Left Content */}
                <div className="bg-[#706355] flex items-center justify-center px-8 md:px-12 lg:px-16 py-16 md:py-20">

                    <div className="w-full max-w-[560px] text-center">

                        {/* Main Heading */}
                        <h2 className="font-serif text-white text-[34px] md:text-[48px] lg:text-[58px] leading-[1] tracking-[-0.03em]">
                            Sarita Handa Homes
                        </h2>

                        {/* Sub Heading */}
                        <h3 className="mt-5 font-serif text-white text-[24px] md:text-[34px] lg:text-[42px] leading-[1.18] tracking-[-0.025em]">
                            Love The Way Our Stores Look?
                        </h3>

                        {/* Description */}
                        <p className="mt-10 text-white text-[15px] md:text-[17px] leading-[1.75] font-light max-w-[500px] mx-auto">
                            Our expert stylists will assist you in recreating our signature
                            look in your space. Whether you are styling a corner or a
                            complete home, we will work with you to design rooms that are
                            warm, curated and distinctly yours.
                        </p>

                        {/* CTA */}
                        <div className="mt-12 md:mt-14">
                            <Link
                                href="/homes"
                                className="group inline-flex items-center gap-3 uppercase text-white text-[14px] md:text-[15px] tracking-[0.22em] font-light"
                            >
                                <span>
                                    Know More
                                </span>

                                <svg
                                    className="w-7 h-7 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M5 12h14m-5-5l5 5-5 5"
                                    />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-full min-h-[520px] md:min-h-[760px] overflow-hidden">

                    <Image
                        src={homesBanner}
                        alt="Sarita Handa Homes"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />

                </div>
            </div>
        </section>
    );
};








// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import wallCovering1 from "../../public/images/wall-coverings/Wall_Coverings_1.jpg";
// import wallCovering2 from "../../public/images/wall-coverings/Wall_Coverings_2.jpg";
// import homesBanner from "../../public/images/Sarita_Handa_Homes_banner_new.jpg";

// const wallCoverings = [
//     {
//         id: 1,
//         image: wallCovering1,
//         collection: "ECHLEON FOR SARITA HANDA",
//         title: "AYDIN HONEY",
//         description:
//             "Embroidered Art Deco-inspired geometry on Sisal, with rhythmic fan-like patterns, earthy tones and refined texture, blending craftsmanship, depth and architectural elegance in contemporary interiors.",
//     },
//     {
//         id: 2,
//         image: wallCovering2,
//         collection: "ECHLEON FOR SARITA HANDA",
//         title: "SATPURA TAN",
//         description:
//             "Hand-embroidered trees, foliage and wildlife on Sisal, rendered in warm earthy tones and intricate texture, blending craftsmanship, colour and natural grandeur for refined, timeless spaces.",
//     },
// ];

// export const WallCoveringsSection: React.FC = () => {
//     return (
//         <section className="w-full bg-[#F4F1EC]">

//             {/* Top Section */}
//             <div className="px-6 md:px-10 lg:px-14 pt-10 md:pt-14 lg:pt-16">

//                 {/* Heading */}
//                 <h2 className="font-serif text-[#2A2926] text-[34px] md:text-[48px] lg:text-[64px] leading-[1.05] tracking-[-0.03em] max-w-[1400px]">
//                     A New Era of Ultra-Luxury: Embroidered Wall Coverings
//                 </h2>

//                 {/* Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8 mt-10 md:mt-14">

//                     {wallCoverings.map((item) => (
//                         <div key={item.id} className="group">

//                             {/* Image */}
//                             <div className="relative w-full aspect-[0.95/1] overflow-hidden bg-[#E8E1D8]">

//                                 <Image
//                                     src={item.image}
//                                     alt={item.title}
//                                     fill
//                                     priority
//                                     sizes="(max-width: 768px) 100vw, 50vw"
//                                     className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
//                                 />

//                             </div>

//                             {/* Content */}
//                             <div className="pt-5 md:pt-6">

//                                 <p className="uppercase text-[#74706B] text-[13px] md:text-[15px] tracking-[0.14em] font-light">
//                                     {item.collection}
//                                 </p>

//                                 <h3 className="mt-5 text-[#3A3835] uppercase text-[20px] md:text-[30px] leading-[1.1] tracking-[0.08em] font-light">
//                                     {item.title}
//                                 </h3>

//                                 <p className="mt-6 max-w-[92%] text-[#74706B] text-[15px] md:text-[18px] leading-[1.7] tracking-[0.04em] font-light">
//                                     {item.description}
//                                 </p>

//                             </div>

//                         </div>
//                     ))}

//                 </div>
//             </div>

//             {/* Bottom Banner Section */}
//             <div className="grid grid-cols-1 md:grid-cols-2 mt-20 md:mt-24">

//                 {/* Left Content */}
//                 <div className="bg-[#6E6255] flex items-center justify-center px-8 md:px-14 lg:px-20 py-16 md:py-20 lg:py-24">

//                     <div className="w-full max-w-[640px] text-center">

//                         <h2 className="font-serif text-white text-[40px] md:text-[56px] lg:text-[72px] leading-[1] tracking-[-0.035em]">
//                             Sarita Handa Homes
//                         </h2>

//                         <h3 className="mt-6 font-serif text-white text-[26px] md:text-[38px] lg:text-[48px] leading-[1.15] tracking-[-0.03em]">
//                             Love The Way Our Stores Look?
//                         </h3>

//                         <p className="mt-12 text-white text-[16px] md:text-[20px] leading-[1.8] font-light max-w-[560px] mx-auto">
//                             Our expert stylists will assist you in recreating our signature
//                             look in your space. Whether you are styling a corner or a complete
//                             home, we will work with you to design rooms that are warm,
//                             curated and distinctly yours.
//                         </p>

//                         {/* CTA */}
//                         <div className="mt-14 md:mt-16">
//                             <Link
//                                 href="/homes"
//                                 className="group inline-flex items-center gap-4 uppercase text-white text-[15px] md:text-[18px] tracking-[0.22em] font-light"
//                             >
//                                 <span>Know More</span>

//                                 <svg
//                                     className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-1"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={1}
//                                         d="M5 12h14m-5-5l5 5-5 5"
//                                     />
//                                 </svg>
//                             </Link>
//                         </div>

//                     </div>
//                 </div>

//                 {/* Right Image */}
//                 <div className="relative w-full h-[520px] md:h-auto overflow-hidden">

//                     <Image
//                         src={homesBanner}
//                         alt="Sarita Handa Homes"
//                         fill
//                         priority
//                         sizes="(max-width: 768px) 100vw, 50vw"
//                         className="object-cover"
//                     />

//                 </div>
//             </div>
//         </section>
//     );
// };