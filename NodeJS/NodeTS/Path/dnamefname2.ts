import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("ES Module file path: ", __filename);
console.log("ES Module directory: ", __dirname);

async function loadConfig() {
  const configPath = new URL("../config/app-config.json", import.meta.url);
  const config = await import(configPath.toString(), {
    with: { type: "json" },
  });
  return config;
}

loadConfig();
