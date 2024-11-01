import { Registry } from "@/registry/schema";

export const examples: Registry = [
  {
    name: "weather-demo",
    type: "registry:example",
    registryDependencies: ["weather"],
    files: ["example/weather-demo.tsx"],
  },
];
