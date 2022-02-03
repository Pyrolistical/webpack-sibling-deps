export type SDKEntry = () => void

const entry: SDKEntry = () => {
  console.log("im sdk");
};

export default entry;
