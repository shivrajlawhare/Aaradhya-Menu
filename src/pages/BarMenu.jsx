import React from "react";
import Drawer from "../components/Drawer";
import MenuSection from "../components/MenuSection";

const sections = [
  { id: "scotch", name: "Scotch Whisky", images: ["/Bar_Menu/1.jpg"] },
  { id: "premium-whisky", name: "Premium Whisky", images: [] },
  { id: "rum", name: "Rum", images: [] },
  { id: "vodka", name: "Vodka", images: ["/Bar_Menu/2.jpg"] },
  { id: "gin", name: "Gin", images: [] },
  { id: "brandy", name: "Brandy", images: [] },
  { id: "wine", name: "Wine", images: [] },
  { id: "strong-beers", name: "Strong Beers", images: [] },
  { id: "mild-beers", name: "Mild Beers", images: [] },
  { id: "breezer", name: "Breezer", images: ["/Bar_Menu/3.jpg"] },
  { id: "cocktails", name: "Classic Cocktails", images: [
    "/Bar_Menu/4.jpg",
    "/Bar_Menu/5.jpg"
] },
  { id: "mocktails", name: "Classic Mocktails", images: [
    "/Bar_Menu/6.jpg",
    "/Bar_Menu/7.jpg"
] }
];

export default function BarMenu() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-brandBg font-ramillas">
      <Drawer
        logo="/logo.png"
        sections={sections.map(s => ({ id: s.id, name: s.name }))}
        onSelect={scrollToSection}
        switchTo={{ path: "/restaurant", label: "Restaurant Menu" }}
      />

      <main className="pt-20 pb-10">
        {sections.map((s) => (
          <MenuSection key={s.id} id={s.id} title={s.name} images={s.images} />
        ))}
      </main>
    </div>
  );
}
