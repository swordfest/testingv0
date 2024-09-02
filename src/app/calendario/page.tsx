/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import {
  Calendar,
  ChevronDown,
  Info,
  ListOrdered,
  MoreVertical,
  SortDesc,
  Tag,
} from "lucide-react";
import useScrollOnDragHorz from "@/lib/useScrollOnDragHorz";

const roomTypes = [
  { name: "Standard", count: 99, image: "/placeholder.svg?height=50&width=50" },
  {
    name: "Standard Junior",
    count: 99,
    image: "/placeholder.svg?height=50&width=50",
  },
  { name: "Premium", count: 99, image: "/placeholder.svg?height=50&width=50" },
  { name: "Suite", count: 99, image: "/placeholder.svg?height=50&width=50" },
  { name: "Standard", count: 99, image: "/placeholder.svg?height=50&width=50" },
  {
    name: "Standard Junior",
    count: 99,
    image: "/placeholder.svg?height=50&width=50",
  },
  { name: "Premium", count: 99, image: "/placeholder.svg?height=50&width=50" },
  { name: "Suite", count: 99, image: "/placeholder.svg?height=50&width=50" },
];

const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const configurations = [
  { adults: 3, children: 2 },
  { adults: 5, children: 1 },
  { adults: 7, children: 4 },
  { adults: 9, children: 6 },
  { adults: 11, children: 8 },
  { adults: 13, children: 10 },
];

const prices = [
  {
    netPrice: 99.99,
    salePrice: 89.99,
  },
  {
    netPrice: 49.99,
    salePrice: 39.99,
  },
  {
    netPrice: 199.99,
    salePrice: 179.99,
  },
  {
    netPrice: 299.99,
    salePrice: 269.99,
  },
  {
    netPrice: 399.99,
    salePrice: 369.99,
  },
  {
    netPrice: 49.99,
    salePrice: 39.99,
  },
];

const hotelContracts = [
  {
    id: 1,
    name: "Contrato Nacional de Cuba",
    contractName: "HTN",
    roomTypes: [
      {
        id: 1,
        name: "Standard",
        count: 99,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 2,
        name: "Deluxe",
        count: 98,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 3,
        name: "Suite",
        count: 97,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 4,
        name: "Junior Suite",
        count: 96,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 5,
        name: "Executive Room",
        count: 95,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 6,
        name: "Standard Room",
        count: 94,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 7,
        name: "Deluxe City View",
        count: 93,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 8,
        name: "Oceanview",
        count: 92,
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
  },
  {
    id: 2,
    name: "Contrato de Hotel Capri",
    contractName: "HCP",
    roomTypes: [
      {
        id: 1,
        name: "Junior Suite",
        count: 98,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 2,
        name: "Executive Room",
        count: 97,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 3,
        name: "President Suite",
        count: 96,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 4,
        name: "Standard Room",
        count: 95,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 5,
        name: "Deluxe City View",
        count: 94,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 6,
        name: "Oceanview",
        count: 93,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 7,
        name: "Suite Ocean View",
        count: 92,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 8,
        name: "Deluxe Room",
        count: 91,
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
  },
  {
    id: 3,
    name: "Contrato de Hotel Saratoga",
    contractName: "HSA",
    roomTypes: [
      {
        id: 1,
        name: "Suite Ocean View",
        count: 97,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 2,
        name: "Deluxe City View",
        count: 96,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 3,
        name: "Standard Room",
        count: 95,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 4,
        name: "Junior Suite",
        count: 94,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 5,
        name: "Executive Room",
        count: 93,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 6,
        name: "Deluxe Room",
        count: 92,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 7,
        name: "Standard Suite",
        count: 91,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 8,
        name: "Suite City View",
        count: 90,
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
  },
  {
    id: 4,
    name: "Contrato de Hotel Vedado",
    contractName: "HVD",
    roomTypes: [
      {
        id: 1,
        name: "Suite City View",
        count: 99,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 2,
        name: "Deluxe Room",
        count: 98,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 3,
        name: "Standard Suite",
        count: 97,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 4,
        name: "Executive Room",
        count: 96,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 5,
        name: "Oceanview",
        count: 95,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 6,
        name: "Deluxe City View",
        count: 94,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 7,
        name: "Junior Suite",
        count: 93,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 8,
        name: "Standard Room",
        count: 92,
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
  },
  {
    id: 5,
    name: "Contrato de Hotel Miramar",
    contractName: "HMIR",
    roomTypes: [
      {
        id: 1,
        name: "Deluxe City View",
        count: 98,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 2,
        name: "Oceanview",
        count: 97,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 3,
        name: "Standard Suite",
        count: 96,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 4,
        name: "Executive Room",
        count: 95,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 5,
        name: "Suite City View",
        count: 94,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 6,
        name: "Deluxe Room",
        count: 93,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 7,
        name: "Junior Suite",
        count: 92,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 8,
        name: "Standard Room",
        count: 91,
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
  },
];

export default function Component() {
  const [visibleItems, setVisibleItems] = useState(days.map(() => false));
  const [selectedRooms, setSelectedRooms] = useState(
    roomTypes.map(() => false)
  );
  const [expanded, setExpanded] = useState(false);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [selectedContract, setSelectedContract] = useState(0);
  const tableRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  const { events } = useScrollOnDragHorz(tableRef);

  useEffect(() => {
    if (document.documentElement.clientWidth < 480) {
      setExpanded(false);
    } else setExpanded(true);
  }, [expanded]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const toggleSelection = (roomIndex: number) => {
    setSelectedRooms((prev) =>
      prev.map((selected, i) => (i === roomIndex ? !selected : selected))
    );
  };

  const toggleVisibility = (dayIndex: number) => {
    setVisibleItems((prev) =>
      prev.map((visible, i) => (i === dayIndex ? !visible : visible))
    );
  };

  return (
    <div className="w-full h-screen mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-semibold">
          Hotel Room Availability Calendar
        </h1>
        <Button variant="destructive">Salir del Calendario</Button>
      </div>

      <div
        className={`p-4 border-b text-black lg:h-auto ${
          expanded ? "h-auto" : "h-12"
        }`}
      >
        <h2
          onClick={() => toggleExpanded()}
          className="text-lg font-semibold mb-2"
        >
          Filtros
        </h2>
        <div className="flex flex-wrap gap-4">
          <div className="w-64">
            {/* <Select> */}

            <select
              title="a"
              className="w-full border rounded p-2 form-select "
              defaultValue={hotelContracts[0].id}
              onChange={(e: any) => {
                setSelectedContract(e.target?.value);
              }}
            >
              <option value={hotelContracts[0].id} hidden>
                Selecciona el contrato
              </option>
              {hotelContracts.map((contract, index) => (
                <option value={contract.id} key={index}>
                  {contract.name}
                </option>
              ))}
            </select>
            {/* </Select> */}
          </div>
          <div className="w-64">
            {/* <Select> */}
            <select
              title="a"
              className="w-full border rounded p-2"
              defaultValue="roomstype"
            >
              <option value="roomstype" hidden>
                Selecciona la habitación
              </option>
              {roomTypes.map((room, index) => (
                <option key={index} value={index}>
                  {room.name}
                </option>
              ))}
            </select>
            {/* </Select> */}
          </div>
          <div className="flex items-center gap-2 w-64">
            <Input
              type="text"
              className="w-full border rounded p-2"
              placeholder="Fecha de inicio"
            />
            <Button variant="outline" size="icon" className="shrink-0">
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 w-64">
            <Input
              type="text"
              className="w-full border rounded p-2"
              placeholder="Fecha de fin"
            />
            <Button variant="outline" size="icon" className="shrink-0">
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
          <Button className="bg-teal-500 text-white">Aplicar Filtros</Button>
        </div>
      </div>

      <div
        {...events}
        ref={tableRef}
        className="relative overflow-auto h-[calc(100vh-180px)]"
      >
        <table className="w-full border-collapse cursor-pointer select-none">
          <thead>
            <tr className="sticky top-0 z-10 text-black">
              <th className="sticky left-0 top-0 z-20 bg-gray-50 p-4 min-w-[200px]">
                <div className="min-w-32 min-h-20 bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center gap-4 border hover:border-1 hover:border-gray-500 ">
                  Fechas
                </div>
              </th>

              {roomTypes.map((type, index) => (
                <th
                  key={index}
                  className={`p-2 min-w-[200px] ${
                    selectedRooms[index] ? "bg-gray-200" : "bg-gray-50"
                  }`}
                >
                  <div
                    className={`min-w-32 min-h-20 bg-white rounded-xl shadow-lg p-4 flex flex-col gap-4 ${
                      selectedRooms[index]
                        ? "border border-gray-500 hover:border-gray-500"
                        : "border hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <input
                          title="a"
                          type="checkbox"
                          name=""
                          id="roomSelected"
                          className="w-4 h-4 cursor-pointer rounded-[4px]"
                          onChange={() => {
                            toggleSelection(index);
                            setSelectedRoomIndex(index);
                          }}
                        />
                        <div className="w-10 h-10 rounded relative bg-gray-200">
                          <Image fill={true} src={`/room.png`} alt="room" />
                        </div>

                        <div>
                          <span className="w-6 text-black text-left text-ellipsis">
                            {type.name}
                          </span>
                          <div className="text-sm text-gray-500 flex items-center">
                            {type.count}{" "}
                            <Info className="w-4 h-4 ml-1 text-blue-500" />
                          </div>
                        </div>
                      </div>
                      <MoreVertical className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day, dayIndex) => (
              <tr key={dayIndex} className="bg-gray-50">
                <td className="sticky h-auto left-0 bg-gray-50 p-0">
                  <div className="day-wrapper p-2">
                    <div className="item-disp-wrapper min-w-[200px] flex gap-2">
                      <div className="wrapper min-h-52">
                        <div className="wrapper-date-actions flex items-start justify-between">
                          <div className="wrapper-date-day flex flex-col items-end">
                            <div className="font-semibold text-black">
                              {day}
                            </div>
                            <div className="text-sm text-gray-500 capitalize">
                              26 Jul 2024
                            </div>
                          </div>
                          <MoreVertical className="w-5 h-5 text-gray-400" />
                        </div>
                        <div
                          onClick={() => {
                            toggleVisibility(dayIndex);
                          }}
                          className="flex flex-col items-center py-2 text-gray-500 gap-2 cursor-pointer"
                        >
                          <span className="text-center text-sm">
                            Mostrar Configuraciones
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 transition-all ${
                              visibleItems[dayIndex] ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </div>
                      </div>
                      <div className="timeline-wrapper-draw flex flex-col items-center justify-start gap-4">
                        <div className=" circle w-4 h-4 shrink-0 border-2 border-[#005B7F] rounded-full"></div>
                        <div className=" vertical-line w-[1.5px] h-full bg-[#919EAB] bg-opacity-20"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-full origin-top transition-all duration-500 ease-in-out bg-white flex-col text-black overflow-hidden ${
                      visibleItems[dayIndex] ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    {/* <span className="w-full text-sm p-4">Configuración</span> */}
                    <table className="w-full border-y-px border-x-0">
                      <thead>
                        <tr className="p-4">
                          <th className="p-0">
                            <div className="h-8 flex items-center justify-center font-semibold text-start">
                              Configuración
                            </div>
                          </th>
                        </tr>
                        {configurations.map((conf, confIndex) => (
                          <tr key={confIndex}>
                            <th className="border border-b-px border-x-0 border-slate-300 border-dashed p-0">
                              <div className="w-full min-h-10 font-normal flex flex-col items-center justify-center py-2">
                                <div className="font-normal text-start">
                                  {conf.adults} Adultos
                                </div>
                                <div className="inline font-normal text-start">
                                  {conf.children} Niños
                                </div>
                              </div>
                            </th>
                          </tr>
                        ))}
                      </thead>
                    </table>
                  </div>
                </td>

                {roomTypes.map((_, typeIndex) => (
                  <td
                    key={typeIndex}
                    className={`text-black ${
                      selectedRooms[typeIndex] ? "bg-gray-200" : "bg-gray-50"
                    }`}
                  >
                    <div className="item-disp-wrapper p-2 min-w-[200px]">
                      <div className="min-w-64 min-h-52 bg-white rounded-xl shadow-lg p-4 flex flex-col gap-4 border hover:border-1 hover:border-gray-500 ">
                        <div className="flex justify-between items-center">
                          <input
                            title="a"
                            type="checkbox"
                            name=""
                            id="disponSelected"
                            className="w-4 h-4 cursor-pointer rounded-[4px]"
                          />
                          <div className="flex gap-2 items-center justify-center">
                            <div className="bg-green-500 text-white px-2 py-px rounded text-sm">
                              Abierta
                            </div>
                            <MoreVertical className="w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="font-semibold">Disponibles</div>
                          <div className="text-right">35</div>
                          <div className="font-semibold">Bloqueadas</div>
                          <div className="text-right">30</div>
                          <div className="font-semibold">B2C</div>
                          <div className="text-right">5</div>
                          <div className="font-semibold">R. Netas</div>
                          <div className="text-right">32</div>
                          <div className="font-semibold">R. Externas</div>
                          <div className="text-right">24</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`w-full bg-white flex flex-col origin-top transition-all duration-500 ease-in-out overflow-hidden text-black font-normal ${
                        visibleItems[dayIndex] ? "max-h-screen" : "max-h-0"
                      }`}
                    >
                      <table className="border-y-px border-x-0">
                        <thead>
                          <tr className="p-4">
                            <th className="p-0">
                              <div className="wrapper-header h-8 px-2 flex gap-4 items-center justify-between">
                                <div className="font-normal">Valores</div>
                                <div className="wrapper-valores flex gap-2 items-center justify-center">
                                  <div className="bg-blue-500 text-white px-2 py-px rounded text-sm font-normal">
                                    CUP
                                  </div>
                                  <Tag className="w-5 h-5" />
                                  <SortDesc className="w-5 h-5" />
                                </div>
                              </div>
                            </th>
                          </tr>
                          {prices.map((p, priceIndex) => (
                            <tr key={priceIndex}>
                              <th className="border border-b-px border-x-0 border-slate-300 border-dashed py-2 ">
                                <div className="wrapper-precios min-h-10 px-2">
                                  <div className="flex items-center justify-between">
                                    <div className="font-semibold">Neto</div>
                                    <div className="font-normal">
                                      {p.netPrice}
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <div className="font-semibold">Venta</div>
                                    <div className="font-normal">
                                      {p.salePrice}
                                    </div>
                                  </div>
                                </div>
                              </th>
                            </tr>
                          ))}
                        </thead>
                      </table>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
