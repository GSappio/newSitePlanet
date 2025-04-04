import React, { useState } from "react";
import CardProductMenu from "../components/CardProductMenu";
import { burguers } from "../mocks/cardapiolanche";
import { drinks } from "../mocks/bebidas";
import WhatsAppButton from '../components/WhatsAppButton'

export default function Menu() {
  const [activeSection, setActiveSection] = useState("Lanches")

  const handleSectionChange = (section) => {
    setActiveSection(section)
  }

  return (
    <>
      <WhatsAppButton />
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="mt-10 px-4 md:px-[66px] xl:px-[175px] sm:px-4">
          <div className="flex space-x-4">
            <button
              className={`${activeSection === "Lanches" ? "bg-blue-500" : "bg-gray-400"
                } px-4 py-2 rounded-lg text-white hover:scale-105 duration-300`}
              onClick={() => handleSectionChange("Lanches")}
            >
              Lanches
            </button>
            <button
              className={`${activeSection === "Combos" ? "bg-blue-500" : "bg-gray-400"
                } px-4 py-2 rounded-lg text-white hover:scale-105 duration-300`}
              onClick={() => handleSectionChange("Combos")}
            >
              Combos
            </button>
            <button
              className={`${activeSection === "Bebidas" ? "bg-blue-500" : "bg-gray-400"
                } px-4 py-2 rounded-lg text-white hover:scale-105 duration-300`}
              onClick={() => handleSectionChange("Bebidas")}
            >
              Bebidas
            </button>

          </div>
        </div>
        <div className="py-10 md:px-12 xl:px-40">
          <p className="w-full px-5 py-2 text-3xl font-medium">{activeSection}</p>
          {activeSection === "Lanches" && <CardProductMenu data={burguers} />}
        </div>
      </div>
    </>

  )
}
