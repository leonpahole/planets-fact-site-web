import { fetchAPI } from "@/util/strapi";

export namespace PlanetsApi {
  export const list = async () => {
    return fetchAPI("/planets", { populate: "*" });
  };

  export const get = async (name: string) => {
    return fetchAPI("/planets", {
      "filters[name][$eqi]": name,
      populate: "*",
    });
  };
}
