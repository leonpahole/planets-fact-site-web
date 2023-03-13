import { PlanetsApi } from "@/util/planets/planets.api";
import { PlanetsModels } from "@/util/planets/planets.models";

export namespace PlanetsService {
  export const list = async (): Promise<PlanetsModels.Planet[]> => {
    const planetList = await PlanetsApi.list();
    return PlanetsModels.fromPlanetDtos(planetList);
  };

  export const get = async (name: string): Promise<PlanetsModels.Planet> => {
    const planet = await PlanetsApi.get(name);
    if (planet.data.length === 0) {
      throw new Error("Not found");
    }

    return PlanetsModels.fromPlanetDto(planet.data[0]);
  };

  export const getLink = (
    planet: PlanetsModels.Planet,
    content: PlanetsModels.ContentType
  ): string => {
    return `/planet/${planet.name.toLowerCase()}/${content}`;
  };
}
