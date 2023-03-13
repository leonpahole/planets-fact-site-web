import { PlanetsApi } from "@/util/planets/planets.api";
import { PlanetsModels } from "@/util/planets/planets.models";

export namespace PlanetsService {
  export const list = async (): Promise<PlanetsModels.Planet[]> => {
    return PlanetsApi.list();
  };

  export const get = async (
    name: string
  ): Promise<PlanetsModels.Planet | undefined> => {
    return PlanetsApi.get(name);
  };

  export const getLink = (
    planet: PlanetsModels.Planet,
    content: PlanetsModels.ContentType
  ): string => {
    return `/planet/${planet.name.toLowerCase()}/${content}`;
  };
}
