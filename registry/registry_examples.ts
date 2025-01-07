import { Registry } from "@/registry/schema";

export const examples: Registry = [
  {
    name: "basic-example-widget",
    type: "registry:example",
    registryDependencies: [""],
    files: ["example/basic-example-widget.tsx"],
  },
  {
    name: "custom-styles-widget",
    type: "registry:example",
    registryDependencies: [""],
    files: ["example/custom-styles-widget.tsx"],
  },
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
