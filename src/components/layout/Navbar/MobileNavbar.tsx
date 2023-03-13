import { HamburgerIcon } from "@/components/icon/HamburgerIcon";
import { PlanetsModels } from "@/util/planets/planets.models";
import { PlanetsService } from "@/util/planets/planets.service";
import Link from "next/link";
import Image from "next/image";
import IconChevron from "public/images/icon-chevron.svg";
import { useEffect, useState } from "react";

interface IProps {
  planets: PlanetsModels.Planet[];
}

export const MobileNavbar = ({ planets }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header className="flex flex-wrap items-center justify-between gap-9.75 border-b border-b-white border-opacity-20 py-4 px-6 text-white md:hidden">
      <h1 className="flex-shrink-0 text-logo uppercase">The planets</h1>
      <nav>
        <button onClick={() => setIsOpen((o) => !o)} type="button">
          <HamburgerIcon
            className={`${
              isOpen ? "opacity-25" : "opacity-100"
            } h-4.25 w-6 fill-white`}
          />
        </button>

        <ul
          className={`fixed top-17.25 left-0 bottom-0 z-20 flex w-screen flex-col bg-gray-700 p-6 transition-transform ${
            isOpen ? "" : "translate-x-full"
          }`}
        >
          {planets.map((planet, i) => (
            <li key={planet.name}>
              <Link
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between py-5 ${
                  i < planets.length - 1 ? "border-b" : ""
                } border-white border-opacity-10`}
                href={PlanetsService.getLink(planet, "overview")}
              >
                <div className="flex gap-6">
                  <div
                    style={{ backgroundColor: planet.color }}
                    className="h-5 w-5 rounded-full"
                  />
                  <p className="font-alt text-nav uppercase">{planet.name}</p>
                </div>
                <Image src={IconChevron} alt="" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
