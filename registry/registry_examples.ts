import { Registry } from "@/registry/schema";

export const examples: Registry = [
  {
    name: "weather-default",
    type: "registry:example",
    registryDependencies: ["weather"],
    files: ["example/weather-default.tsx"],
  },
  {
    name: "weather-rectangle",
    type: "registry:example",
    registryDependencies: ["weather"],
    files: ["example/weather-rectangle.tsx"],
  },
  {
    name: "weather-large",
    type: "registry:example",
    registryDependencies: ["weather"],
    files: ["example/weather-large.tsx"],
  },
];
