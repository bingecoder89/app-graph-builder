import { graphs } from "../mocks/graphs";

export const getGraphs = async (appId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(graphs[appId]);
    }, 1000);
  });
};
