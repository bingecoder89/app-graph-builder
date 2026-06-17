import { graphs } from "../mocks/graphs";

export const getGraphs = async (appId: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isFailure = Math.random() < 0.1;

      if (isFailure) {
        reject(new Error("Async promise rejected randomly!"));
      } else {
        resolve((graphs as any)[appId]);
      }
    }, 1000);
  });
};
