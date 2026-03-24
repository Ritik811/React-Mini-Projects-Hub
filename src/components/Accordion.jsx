import { useEffect, useState } from "react";
import feq from "../API/feq.json";
import { FEQ } from "./UI/FEQ";
export const Accordion = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);
  useEffect(() => {
    setData(feq);
  }, []);

  const handleButton = (id) => {
    setActiveId((prevId) => {
        console.log(prevId);
        return (prevId === id ? false : id)
    });
  };

  return (
    <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data.map((curEle) => {
          return (
            <FEQ
              key={curEle.id}
              curData={curEle}
              isActive={activeId === curEle.id}
              toggle={() => handleButton(curEle.id)}
            />
          );
        })}
      </ul>
    </>
  );
};
