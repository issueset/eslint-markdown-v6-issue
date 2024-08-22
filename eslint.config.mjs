import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import markdown_v6 from "@eslint/markdown";
// import markdown_v5 from "eslint-plugin-markdown";

export default tseslint.config(
  //   ...markdown_v5.configs.recommended,
  ...markdown_v6.configs.recommended,
  eslint.configs.recommended,
  ...tseslint.configs.recommended
);
