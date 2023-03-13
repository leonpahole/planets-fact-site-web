import { PlanetFacts } from "@/components/planet/PlanetFacts";
import { PlanetImage } from "@/components/planet/PlanetImage";
import { PlanetInfo } from "@/components/planet/PlanetInfo";
import { PlanetMobileTabs } from "@/components/planet/PlanetMobileTabs";
import { PlanetsModels } from "@/util/planets/planets.models";

interface IProps {
  planet: PlanetsModels.Planet;
}

export const Planet = ({ planet }: IProps) => {
  return (
    <article className="text-white">
      <PlanetMobileTabs planet={planet} />
      <div className="px-6 pt-10 pb-12 md:px-10 md:pt-13.5 md:pb-9 lg:pb-14 lg:pt-24">
        <div className="mb-6.75 flex flex-col items-center justify-between lg:mb-21.75 lg:flex-row">
          <div className="mb-9.75 shrink-0 grow-0 lg:mx-6 lg:mb-0">
            <PlanetImage planet={planet} />
          </div>
          <div className="flex basis-auto flex-col items-center gap-17.25 md:flex-row lg:basis-87.5 lg:flex-col lg:items-stretch lg:gap-9.75">
            <PlanetInfo planet={planet} />
          </div>
        </div>
        <PlanetFacts planet={planet} />
      </div>
    </article>
  );
};
