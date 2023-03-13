import { getStrapiMedia } from "@/util/strapi";

export namespace PlanetsModels {
  export interface Planet {
    name: string;
    color: string;
    relativeSize: number;
    overview: {
      content: string;
      source: string;
    };
    structure: {
      content: string;
      source: string;
    };
    geology: {
      content: string;
      source: string;
    };
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: {
      planet: string;
      internal: string;
      geology: string;
    };
  }

  export const fromPlanetDtos = ({ data }: any): Planet[] => {
    return data.map(fromPlanetDto);
  };

  export const fromPlanetDto = ({ attributes }: any): Planet => {
    return {
      name: attributes.name,
      color: attributes.color,
      relativeSize: attributes.relativeSize,
      rotation: attributes.rotation,
      revolution: attributes.revolution,
      radius: attributes.radius,
      temperature: attributes.temperature,
      geology: {
        content: attributes.geology.content,
        source: attributes.geology.source,
      },
      overview: {
        content: attributes.overview.content,
        source: attributes.overview.source,
      },
      structure: {
        content: attributes.structure.content,
        source: attributes.structure.source,
      },
      images: {
        geology: getStrapiMedia(attributes.geologyImage),
        internal: getStrapiMedia(attributes.internalImage),
        planet: getStrapiMedia(attributes.planetImage),
      },
    };
  };

  export type ContentType =
    | "overview"
    | "internal-structure"
    | "surface-geology";

  export const Content: { label: string; href: ContentType }[] = [
    {
      label: "Overview",
      href: "overview",
    },
    {
      label: "Internal structure",
      href: "internal-structure",
    },
    {
      label: "Surface geology",
      href: "surface-geology",
    },
  ];

  export const isValidContent = (content: string) => {
    return Content.some((c) => c.href === content);
  };

  export const PlanetNotFound: Planet = {
    name: "Planet 404",
    color: "black",
    relativeSize: 0.8,
    geology: {
      content: "This planet has unknown geology.",
      source: "https://en.wikipedia.org/wiki/HTTP_404",
    },
    overview: {
      content: "This planet has not been discovered yet.",
      source: "https://en.wikipedia.org/wiki/HTTP_404",
    },
    structure: {
      content: "This planet has unknown structure.",
      source: "https://en.wikipedia.org/wiki/HTTP_404",
    },
    rotation: "???",
    radius: "???",
    temperature: "???",
    revolution: "???",
    images: {
      geology: "",
      internal: "",
      planet: "",
    },
  };
}
