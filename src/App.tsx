import { goTo, useReusableTab } from "./util";

const PAISES = ["Argentina", "Brasil", "Uruguay"];

export default function App() {
  useReusableTab("home");

  return (
    <main>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {PAISES.map((pais) => {
          const key = pais.toLowerCase();
          return (
            <button
              key={key}
              onClick={() => {
                goTo(`reuse_${key}`);
              }}
            >
              {pais}
            </button>
          );
        })}
      </div>
    </main>
  );
}
