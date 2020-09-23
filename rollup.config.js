import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import { string } from "rollup-plugin-string";

const dist = "dist";
const bundle = "bundle";
const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.js",
  output: [
    {
      name: "ReactCollSpinner",
      file: `${dist}/${bundle}.umd.js`,
      globals: {
        react: "React",
      },
      format: "umd",
    },
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: "cjs",
    },
    {
      file: `${dist}/${bundle}.esm.js`,
      format: "esm",
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**",
    }),
    string({
      include: "**/*.css",
    }),
    production && terser(),
  ],
};
