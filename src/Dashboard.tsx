import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { goTo, useReusableTab } from "./util";

const FLAGS: Record<string, string> = {
  argentina: "🇦🇷",
  brasil: "🇧🇷",
  uruguay: "🇺🇾",
  none: "",
};

export default function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();

  const country = useMemo(
    () => searchParams.get("country") || "none",
    [searchParams]
  );

  useReusableTab(country);

  return (
    <main>
      <button
        onClick={() => {
          goTo("reuse_home");
        }}
      >
        Volver
      </button>
      <h1>
        {FLAGS[country]} {country}
      </h1>
      <select
        value={country}
        onChange={(e) => {
          const value = e.target.value;
          setSearchParams({ country: value });
        }}
      >
        {["Argentina", "Brasil", "Uruguay"].map((country) => {
          const key = country.toLowerCase();
          return (
            <option key={key} value={key}>
              {FLAGS[country]} {country}
            </option>
          );
        })}
      </select>
    </main>
  );
}
