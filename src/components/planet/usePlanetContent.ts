import { PlanetsModels } from "@/util/planets/planets.models";
import { useRouter } from "next/router";

export const usePlanetContent = () => {
  const { query } = useRouter();
  let type = query.content as PlanetsModels.ContentType;
  if (!PlanetsModels.isValidContent(type)) {
    type = "overview";
  }

  return type;
};
