// @ts-ignore
import type { SDKEntry } from "sdk";
import sdk from "sdk";

type LibEntry = () => void
const entry: LibEntry = () => {
  console.log("im lib");
  const Sdk: SDKEntry = sdk;
  Sdk()
};

export default entry;
