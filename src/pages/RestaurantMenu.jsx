import React from "react";
import Drawer from "../components/Drawer";
import MenuSection from "../components/MenuSection";

const sections = [
  { id: "breakfast", name: "Breakfast", images: ["/Restaurant_Menu/breakfast.jpg"] },
  { id: "soup", name: "Soup", images: ["/Restaurant_Menu/soup.jpg"] },
  { id: "starters", name: "Starters", images: ["/Restaurant_Menu/starters.jpg"] },
  { id: "tandoor", name: "Tandoor and Raita", images: ["/Restaurant_Menu/tandoor_and_raita.jpg"] },
  { 
    id: "main-course", 
    name: "Main Course", 
    images: [
      "/Restaurant_Menu/main_course_1.jpg",
      "/Restaurant_Menu/main_course_2.jpg"
    ] 
  },
  { id: "sea-food", name: "Sea Food And Biryani", images: ["/Restaurant_Menu/sea_food_biryani.jpg"] },
  { id: "rice-noodles", name: "Rice and Noodles", images: ["/Restaurant_Menu/rice_and_noodles.jpg"] },
  { id: "thalis", name: "Thalis", images: ["/Restaurant_Menu/thali.jpg"] },
  { id: "beverages", name: "Beverages and Dessert", images: ["/Restaurant_Menu/beverages_and_desserts.jpg"] },
  { id: "neighborhood", name: "Explore the Neighborhood", images: ["/Restaurant_Menu/explore_the_neighborhood.jpg"] },
  { id: "amenities", name: "Amenities", images: [
    "/Restaurant_Menu/amenities_1.jpg",
    "/Restaurant_Menu/amenities_2.jpg"
    ] }
];

export default function RestaurantMenu() {
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
        switchTo={{ path: "/bar", label: "Bar Menu" }}
      />

      <main className="pt-20 pb-10">
        {sections.map((s) => (
          <MenuSection key={s.id} id={s.id} title={s.name} images={s.images} />
        ))}
      </main>
    </div>
  );
}
