"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) && event.target.id !== "menu-toggle") {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="w-full bg-[#1B2347] py-4 shadow flex items-center justify-center px-6 relative">
        <div className="absolute left-6">
          <button
            id="menu-toggle"
            className="text-[#E3E2D7] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 h-full w-64 bg-[#1B2347] text-[#E3E2D7] p-0 shadow-lg z-50 overflow-hidden rounded-r-lg transition-all duration-300 transform ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"}`}
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/menu-illustration.jpeg"
              alt="Illustration"
              fill
              className="object-cover opacity-20 absolute top-0 left-0 w-full h-full"
            />
            <div className="relative z-10 flex flex-col gap-6 p-6">
              <a href="#" className="hover:underline">Accueil</a>
              <a href="#presentation" className="hover:underline">Présentation</a>
              <a href="#" className="hover:underline">Nos Soins</a>
              <a href="#" className="hover:underline">Contact</a>
              <a href="#" className="hover:underline">Tarifs</a>
            </div>
          </div>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-r from-white to-[#f5f5dc]">
        <section id="presentation" className="w-full max-w-3xl mt-16 px-4 text-center">
          <h2 className="text-2xl font-semibold mb-6">🌿 MN Médecine Esthétique – Une histoire de famille, de science et d’équilibre</h2>
          <p className="text-base leading-relaxed text-[#1B2347]">
            MN Médecine Esthétique est né de l’union de deux frères, deux médecins animés par la même passion:
            Allier science médicale et sens du détail esthétique pour sublimer la peau de chacun avec précision, douceur et respect.<br /><br />
            Le nom "MN" reflète cette dualité fraternelle : les initiales de leurs prénoms, symbole d’un projet commun et profondément humain. Mais il porte aussi une signification plus intime : en kabyle, “Amane” signifie l’eau, cet élément pur et vital qui nettoie, régénère, et accompagne chaque transformation en profondeur.<br /><br />
            Dans leur cabinet, la technologie de pointe rencontre une approche médicale personnalisée. Ici, chaque peau est écoutée, chaque besoin est respecté.<br /><br />
            MN Médecine Esthétique, c’est plus qu’un lieu de soin : c’est un lieu de confiance, d’écoute et de beauté responsable, où la médecine devient art, et l’art devient soin.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center bg-[#f5f5dc] p-4 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-40 h-40 overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <Image src="/images/massy.png" alt="Soin 1" width={160} height={160} className="object-cover w-full h-full" />
              </div>
              <p className="mt-4 text-[#1B2347] text-sm text-center">Dr Massinissa GHELBOUN</p>
              <p className="mt-4 text-[#1B2347] text-sm text-center">Médecin urgentiste, Diplômes Universitaire d’Implantation Capillaire, Diplôme Universitaire d’Agent Physique en Médecine Esthétique, Diplôme Universitaire en Technique d’Injection et de Comblement </p>

            </div>

            <div className="flex flex-col items-center bg-[#f5f5dc] p-4 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-40 h-40 overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <Image src="/images/nacer.jpeg" alt="Soin 2" width={160} height={160} className="object-cover w-full h-full" />
              </div>
              <p className="mt-4 text-[#1B2347] text-sm text-center">Dr Nacer GHELBOUN</p>
              <p className="mt-4 text-[#1B2347] text-sm text-center">Médecin Généraliste, Diplôme Universitaire d’Implantation Capillaire</p>
            </div>

            <div className="flex flex-col items-center bg-[#f5f5dc] p-4 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-40 h-40 overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <Image src="/images/katou.jpeg" alt="Soin 3" width={160} height={160} className="object-cover w-full h-full" />
              </div>
              <p className="mt-4 text-[#1B2347] text-sm text-center">Katia GHELBOUN</p>
              <p className="mt-4 text-[#1B2347] text-sm text-center">Assisitante Médicale, Experte en Cosmétologie</p> 

            </div>
          </div>
        </section>
      </main>
    </>
  );
}