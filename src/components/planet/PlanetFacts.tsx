import { PlanetsModels } from "@/util/planets/planets.models";

interface IProps {
  planet: PlanetsModels.Planet;
}

export const PlanetFacts = ({ planet }: IProps) => {
  const Facts: { property: keyof typeof planet; label: string }[] = [
    {
      property: "rotation",
      label: "Rotation time",
    },
    {
      property: "revolution",
      label: "Revolution time",
    },
    {
      property: "radius",
      label: "Radius",
    },
    {
      property: "temperature",
      label: "Average temp.",
    },
  ];

  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-2.75 lg:gap-7.5">
      {Facts.map((fact) => (
        <div
          className="flex flex-1 items-center justify-between border border-white border-opacity-20 px-6 pt-2 pb-3 md:flex-col md:items-start md:justify-start md:px-3.75 md:pt-4 md:pb-4.75 lg:px-5.75 lg:pb-6.75 lg:pt-5"
          key={fact.property}
        >
          <h3 className="mb-0 font-alt text-h4.t uppercase text-white opacity-50 md:mb-1.5 lg:mb-1 lg:text-h4">
            {fact.label}
          </h3>
          <p className="text-h2.m md:text-h2.t lg:text-h2">
            {planet[fact.property].toString()}
          </p>
        </div>
      ))}
    </div>
  );
};
