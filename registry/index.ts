import { hooks } from "./registry-hooks";
import { lib } from "./registry-lib";
import { examples } from "./registry_examples";
import { themes } from "./registry-themes";
import { ui } from "./registry-ui";
import { Registry } from "./schema";

export const registry: Registry = [
  ...ui,
  ...lib,
  ...examples,
  ...hooks,
  ...themes,
];
