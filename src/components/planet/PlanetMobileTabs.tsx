import { usePlanetContentLinks } from "@/components/planet/usePlanetContentLinks";
import { LinkTabs } from "@/components/shared/LinkTabs";
import { PlanetsModels } from "@/util/planets/planets.models";

interface IProps {
  planet: PlanetsModels.Planet;
}

export const PlanetMobileTabs = ({ planet }: IProps) => {
  const contentLinks = usePlanetContentLinks(planet);

  return (
    <LinkTabs
      className="block md:hidden"
      activeColor={planet.color}
      items={contentLinks}
    />
  );
};
