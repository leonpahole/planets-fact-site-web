import { Navbar } from "@/components/layout/Navbar/Navbar";
import { PlanetsModels } from "@/util/planets/planets.models";

interface IProps {
  planets: PlanetsModels.Planet[];
  children: React.ReactNode;
}

export const NavbarLayout = ({ planets, children }: IProps) => {
  return (
    <div className="min-h-screen bg-gray-700 bg-stars">
      <Navbar planets={planets} />
      <main>
        <div className="mx-auto max-w-275">{children}</div>
      </main>
    </div>
  );
};
