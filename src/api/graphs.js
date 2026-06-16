import { graphs } from "../mocks/graphs";

export const getGraphs = async (appId) => {
  return await graphs[appId];
};
