import { useEffect } from "react";

const BASE_URL = window.location.origin;

const urls: Record<string, string> = {
  reuse_argentina: `${BASE_URL}/dashboard?country=argentina`,
  reuse_brasil: `${BASE_URL}/dashboard?country=brasil`,
  reuse_uruguay: `${BASE_URL}/dashboard?country=uruguay`,
  reuse_home: `${BASE_URL}/`,
};

export function goTo(target: string) {
  const tab = window.open("", target);
  if (tab !== null) {
    if (tab.location.href === "about:blank") {
      tab.location.href = urls[target];
    }
    tab.focus();
  }
}

export function useFavicon(country: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");

  if (ctx !== null) {
    ctx.font = "24px sans-serif";

    const emoji =
      {
        argentina: "🇦🇷",
        brasil: "🇧🇷",
        uruguay: "🇺🇾",
        home: "🏠",
      }[country || ""] || "🏠";

    ctx.fillText(emoji, 0, 24);

    const favicon: HTMLLinkElement | null =
      document.querySelector('link[rel="icon"]');
    if (favicon !== null) {
      favicon.href = canvas.toDataURL();
    }
  }
}

export const useReusableTab = (name: string) => {
  useFavicon(name);

  useEffect(() => {
    window.name = `reuse_${name}`;
    document.title = `Dashboard - ${
      name.charAt(0).toUpperCase() + name.slice(1)
    }`;
  }, [name]);
};
