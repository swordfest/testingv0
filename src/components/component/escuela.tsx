"use client";

import layout from "@/app/layout";
import Rive, { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

export default function Escuela() {
  const { RiveComponent } = useRive({
    src: "escuela_infinita_artboard.riv",
    autoplay: true,
    // artboard: "Portada",
    stateMachines: "Cabezas",
    // animations:['Appear'],
    onLoadError: () => console.log("ERROR LOADING RIVE"),
    onLoad: () => console.log("LOADED RIVE"),
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.TopLeft,
      maxX: 480,
      maxY: 480,
    }),
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log(isMounted);
  }, [isMounted]);

  return (
    <div>
      {/* <Rive
                src="../escuela_infinita_artboard.riv"   
                artboard="Portada"
                stateMachines="Cabezas"
                // animations="Idle"
                layout={new Layout({
                    fit: Fit.Cover,
                    alignment: Alignment.TopLeft,
                    maxX: 480,
                    maxY: 480,
                })}
            /> */}
      <RiveComponent style={{ width: 480, height: 480 }} />
    </div>
  );
}
