import { path as PROJECT_ROOT } from "app-root-path";
import { resolve } from "path";

export { PROJECT_ROOT };
export const SOURCE_DIRECTORY = resolve(PROJECT_ROOT, "./source");
export const BUILD_DIRECTORY = resolve(PROJECT_ROOT, "./build");
export const HOST = "localhost";
export const PORT = 3000;
