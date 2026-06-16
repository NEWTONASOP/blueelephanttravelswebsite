"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Plane, ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { DESTINATIONS } from "@/app/destinations/seasonentry/destination.data";

const SECONDARY = "#0b1f3a";
const ACCENT    = "#e07b00"; // darker orange

export default function Destinations() {
  const [activeTab, setActiveTab] = useState<"india" | "international">("india");

  // Get exactly 7 India destinations (Indian Wonders)
  const indiaDestinations = DESTINATIONS.filter(
    (d) => d.region === "India"
  ).slice(0, 7);

  // Get featured international destinations (7 outside)
  const featuredIntSlugs = [
    "thailand",
    "japan",
    "vietnam",
    "dubai",
    "bali",
    "maldives",
    "singapore",
  ];
  const internationalDestinations = DESTINATIONS.filter((d) =>
    featuredIntSlugs.includes(d.slug)
  ).slice(0, 7);

  const displayedDestinations =
    activeTab === "india" ? indiaDestinations : internationalDestinations;

  return (
    <section
      id="destinations"
      style={{
        background: "#ffffff",
        paddingTop: 80,
        paddingBottom: 88,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: 8 }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              margin: "0 0 10px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: ACCENT,
              textTransform: "uppercase",
            }}
          >
            ✦ Discover Your Next Adventure ✦
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{
              margin: 0,
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              fontFamily: "Georgia, serif",
              color: SECONDARY,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Explore Handpicked
            <br />
            <span
              style={{
                color: SECONDARY,
                opacity: 0.45,
                fontStyle: "italic",
              }}
            >
              Destinations
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            style={{
              margin: "14px auto 0",
              maxWidth: 540,
              fontSize: 15,
              lineHeight: 1.65,
              color: SECONDARY,
              opacity: 0.55,
            }}
          >
            Choose from our signature domestic wonders or popular international getaways,
            crafted for maximum comfort and unforgettable memories.
          </motion.p>
        </header>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="flex justify-center gap-4 mt-8"
        >
          <div className="inline-flex rounded-full bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setActiveTab("india")}
              className={`relative flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                activeTab === "india" ? "text-white" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {activeTab === "india" && (
                <motion.span
                  layoutId="active-dest-tab"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: SECONDARY }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <MapPin size={13} />
                Indian Wonders (7)
              </span>
            </button>

            <button
              onClick={() => setActiveTab("international")}
              className={`relative flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                activeTab === "international" ? "text-white" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {activeTab === "international" && (
                <motion.span
                  layoutId="active-dest-tab"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: SECONDARY }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Plane size={13} />
                World / International (7)
              </span>
            </button>
          </div>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            height: 1,
            background:
              "linear-gradient(to right, transparent, rgba(224,123,0,0.2), transparent)",
            margin: "32px auto 44px",
            maxWidth: 320,
            transformOrigin: "center",
          }}
        />

        {/* Grid Display */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                show: { transition: { staggerChildren: 0.08 } },
                hidden: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
              }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {displayedDestinations.map((dest) => (
                <motion.a
                  key={dest.slug}
                  href={dest.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 24, scale: 0.96 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative flex flex-col justify-end overflow-hidden rounded-[24px] bg-slate-900 shadow-md hover:shadow-xl transition-all duration-300"
                  style={{ aspectRatio: "4/5", cursor: "pointer" }}
                >
                  {/* Background Image */}
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent opacity-90 transition-opacity duration-300" />

                  {/* Corner Badge */}
                  <div
                    className="absolute top-4 left-4 text-[9px] font-bold tracking-wider uppercase text-white rounded-full px-3 py-1 shadow-sm"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {dest.tag}
                  </div>

                  {/* Action Icon overlay */}
                  <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 backdrop-blur-sm transition-all duration-300 hover:bg-[#e07b00]">
                    <MessageSquare size={13} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 flex flex-col justify-end text-white">
                    <p
                      className="text-[10px] font-bold tracking-widest uppercase mb-1"
                      style={{ color: "#ff9a2e" }}
                    >
                      {dest.region === "India" ? dest.country : dest.region}
                    </p>

                    <h4 className="font-heading text-2xl font-bold leading-tight mb-2 font-serif text-white group-hover:text-[#ff9a2e] transition-colors duration-200">
                      {dest.name}
                    </h4>

                    {/* Expandable description on hover */}
                    <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-16 group-hover:opacity-100 group-hover:mb-4">
                      <p className="text-[11px] leading-relaxed text-white/70">
                        {dest.description}
                      </p>
                    </div>

                    {/* Divider & details */}
                    <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-white/75 font-semibold">
                      <span className="flex items-center gap-1">⏱ {dest.duration}</span>
                      <span
                        className="py-0.5 px-2 rounded font-bold"
                        style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#ff9a2e" }}
                      >
                        {dest.budget}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Global CTA button */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <motion.a
            href="/destinations"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: SECONDARY }}
          >
            <span>Explore All Destinations</span>
            <ArrowRight size={14} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}