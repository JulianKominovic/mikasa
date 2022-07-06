// Contents of the file /rollup.config.js
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

const config = [
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      typescript(),
      commonjs(),
      json(),
      nodeResolve({
        moduleDirectories: [
          "node_modules",
          "node_modules/.pnpm",
          "node_modules/.pnpm/node_modules",
        ],
      }),
    ],
  },
];
export default config;
