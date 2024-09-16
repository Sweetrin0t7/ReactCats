import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import cat1 from "../assets/cat1.webp";
import cat2 from "../assets/cat2.jpg";

interface iProps {
  catVariation: 1 | 2;
}

export default function ImageText(props: iProps) {
  const { data, contador } = useContext(DataContext);

  return (
    <div className="flex w-1/2 mt-8 gap-8">
      {props.catVariation == 1 && (
        <>
          <p className="w-1/2">{data?.components.imageText.text1}</p>
          <figure className="w-2/5">
            <img src={cat1} alt="gatos" />
          </figure>
        </>
      )}

      {props.catVariation == 2 && (
        <>
          <figure className="w-2/5">
            <img src={contador%2==0 ? cat2 : cat1} alt="gatos" />
          </figure>
          <p className="w-1/2">{data?.components.imageText.text2}</p>
        </>
      )}
    </div>
  );
}
