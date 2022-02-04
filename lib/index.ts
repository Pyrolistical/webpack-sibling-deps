import type { SDKEntry } from "@pyrolistical/webpack-sibling-deps-sdk";
import sdk from "@pyrolistical/webpack-sibling-deps-sdk";

type LibEntry = () => void
const entry: LibEntry = () => {
  console.log("im lib");
  const Sdk: SDKEntry = sdk;
  Sdk()
};

export default entry;
