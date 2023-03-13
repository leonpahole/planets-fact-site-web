import { PlanetsModels } from "@/util/planets/planets.models";
import { PlanetsService } from "@/util/planets/planets.service";
import { useRouter } from "next/router";

export const usePlanetContentLinks = (planet: PlanetsModels.Planet) => {
  const router = useRouter();
  const { property } = router.query;

  return PlanetsModels.Content.map((c) => ({
    label: c.label,
    href: PlanetsService.getLink(planet, c.href),
    isActive: c.href === property,
  }));
};
