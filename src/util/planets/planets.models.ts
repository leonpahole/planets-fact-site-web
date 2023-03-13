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
}
