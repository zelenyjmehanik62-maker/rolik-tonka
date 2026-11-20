import { loadFont as loadJost } from "@remotion/google-fonts/Jost";

const jost = loadJost("normal", {
  weights: ["300", "400"],
  subsets: ["latin", "cyrillic"],
});

export const titleFont = jost.fontFamily;
export const labelFont = jost.fontFamily;
