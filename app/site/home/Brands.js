"use client";

import Image from "next/image";

const brandLogos = [
  { id: 1, src: "/brand1.jpg", alt: "Google" },
  { id: 2, src: "/brand2.png", alt: "Booking.com" },
  { id: 3, src: "/brand3.jpg", alt: "Basecamp" },
  { id: 4, src: "/brand4.png", alt: "Microsoft" },
];

export default function Brands() {
  return (
    <section style={{ backgroundColor: "white", borderRadius: "0.5rem", padding: "2rem", overflow: "hidden" }} className="my-12"> 
      <p style={{ textAlign: "center", fontSize: "1.125rem", fontWeight: "700", marginBottom: "1.5rem" }}>
        Trusted by 20,000+ companies
      </p>
      <div style={{ display: "flex", gap: "1.5rem", overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: "1rem" }} className="justify-center">
        {brandLogos.map((brand) => (
          <div
            key={brand.id}
            style={{
              width: "200px",
              height: "100px",
              position: "relative",
              flexShrink: "0",
              scrollSnapAlign: "start",
            }}
            className="text-center"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}