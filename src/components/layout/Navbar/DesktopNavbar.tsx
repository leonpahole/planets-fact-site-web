import { PlanetsModels } from "@/util/planets/planets.models";
import { PlanetsService } from "@/util/planets/planets.service";
import Link from "next/link";
import { useState } from "react";

interface IProps {
  planets: PlanetsModels.Planet[];
}

export const DesktopNavbar = ({ planets }: IProps) => {
  return (
    <header className="hidden flex-col flex-wrap items-center justify-center gap-2.5 border-b border-b-white border-opacity-20 pt-8 pr-10 pl-8 text-white md:flex lg:flex-row lg:justify-between lg:gap-9.75 lg:pt-0">
      <h1 className="flex-shrink-0 text-logo uppercase">The planets</h1>
      <nav>
        <ul className="flex flex-wrap justify-center gap-8.25">
          {planets.map((planet) => (
            <DesktopNavbarLink planet={planet} key={planet.name} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

const DesktopNavbarLink = ({ planet }: { planet: PlanetsModels.Planet }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <li
      key={planet.name}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        className="block border-t-0 pt-7.25 pb-6.75 font-alt text-h4 uppercase opacity-75 hover:opacity-100 lg:border-t-4"
        style={{ borderColor: isHovered ? planet.color : "transparent" }}
        href={PlanetsService.getLink(planet, "overview")}
      >
        {planet.name}
      </Link>
    </li>
  );
};
