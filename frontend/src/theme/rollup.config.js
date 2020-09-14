import typescript from 'rollup-plugin-typescript';

export default {
  input: "src/theme.ts",
  plugins: [typescript()],
  external: ['@material-ui/core/styles/createMuiTheme'],
  output: [
    {
      file: "dist/theme.js",
      format: "cjs"
    }, {
      file: "dist/theme.es.js",
      format: "esm"
    }
  ]
}
