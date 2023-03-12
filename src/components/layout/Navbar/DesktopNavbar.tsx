import { PlanetsModels } from "@/util/planets/planets.models";
import { PlanetsService } from "@/util/planets/planets.service";
import Link from "next/link";

interface IProps {
  planets: PlanetsModels.Planet[];
}

export const DesktopNavbar = ({ planets }: IProps) => {
  return (
    <header className="hidden flex-col flex-wrap items-center justify-center gap-9.75 border-b border-b-white border-opacity-20 pt-5.5 pb-6.75 pr-10 pl-8 text-white md:flex lg:flex-row lg:justify-between">
      <h1 className="flex-shrink-0 text-logo uppercase">The planets</h1>
      <nav>
        <ul className="flex flex-wrap justify-center gap-8.25">
          {planets.map((planet) => (
            <li className="font-alt text-h4 uppercase" key={planet.name}>
              <Link href={PlanetsService.getLink(planet)}>{planet.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
