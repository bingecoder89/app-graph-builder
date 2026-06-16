import { applications } from "../mocks/applications";

export const getApplications = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(applications);
    }, 1000);
  });
};
