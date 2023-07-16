import { useState } from "react";
import { Period } from "../basic/Period";

export default function Home() {
  const [periods, setPeriods] = useState([
    {
      id: 1,
      name: "1º Período",
      disciplines: [
        {
          id: 1,
          title: "matematica",
          summary: "calculos",
          links: ["https://www.google.com/"],
        },
        {
          id: 2,
          title: "port",
          summary: "gramaticas loucas",
          links: ["https://www.google.com/"],
        },
      ],
    },
  ]);

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-appoio-color py-4">
        <nav className="flex items-center justify-between px-6">
          <div className="text-white text-xl font-bold">Appoio</div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              Períodos
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Perfil
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Disciplinas
            </a>
            <a href="/entri/login" className="text-white hover:text-gray-300">
              Sair
            </a>
          </div>
        </nav>
      </header>
      {periods.map((period) => (
        <Period
          key={period.id}
          id={period.id}
          name={period.name}
          disciplines={period.disciplines}
        />
      ))}
      <footer className="bg-appoio-color py-4 text-white text-center">
        © 2023 Appoio. Todos os direitos reservados.
      </footer>
    </div>
  );
}
