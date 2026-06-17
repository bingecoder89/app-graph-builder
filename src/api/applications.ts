import { applications } from "../mocks/applications";

export const getApplications = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isFailure = Math.random() < 0.1;

      if (isFailure) {
        reject(new Error("Async promise rejected randomly!"));
      } else {
        resolve(applications);
      }
    }, 1000);
  });
};
