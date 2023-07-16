import React, { useState } from "react";
import { Discipline } from "./Discipline";

export type discipline = {
  id: number;
  title: string;
  summary: string;
  links: string[];
  active?: boolean;
};

interface PeriodProps {
  id: number;
  name: string;
  disciplines: discipline[];
}

export const Period: React.FC<PeriodProps> = ({
  name,
  id,
  disciplines,
}: PeriodProps) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <main className="flex-grow bg-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h3 className="text-xl font-semibold">{name}</h3>
        <button
          className={`bg-transparent text-black border-none outline-none ${
            active ? "rotate-180" : ""
          }`}
          onClick={toggleActive}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition-transform duration-300 transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {active && <Discipline disciplines={disciplines} />}
    </main>
  );
};
