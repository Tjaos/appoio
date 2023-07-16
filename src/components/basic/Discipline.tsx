import React, { useState } from "react";
import { discipline } from "./Period";

interface Props {
  disciplines: discipline[];
}

export const Discipline = ({ disciplines }: Props) => {
  const [disciplineActive, setDisciplineActive] = useState(false);
  const [discipline, setDiscipline] = useState<any>({});

  const toggleDisciplineActive = (id: number) => {
    let clickedDiscipline = disciplines.find((d) => d.id === id);
    setDiscipline({ ...clickedDiscipline, active: true });
  };

  return (
    <div className="mt-4 flex w-15 gap-5 ">
      {disciplines.map((d) => (
        <div
          key={d.id}
          className="border border-gray-200 p-4 cursor-pointer"
          onClick={() => toggleDisciplineActive(d.id)}
        >
          <h4 className="text-lg font-semibold">{d.title}</h4>
          {discipline?.active && (
            <div className="mt-2">
              <p>{d.summary}</p>
              <ul className="list-disc list-inside">
                {d.links.map((link, index) => (
                  <li key={index}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
