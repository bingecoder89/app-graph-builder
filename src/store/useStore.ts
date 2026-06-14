import { create } from "zustand";

export const useStore = create((set) => ({
  selectedAppId: null,
  setSelectedAppId: (appId) =>
    set({
      selectedAppId: appId,
    }),
  selectedNodeId: null,
  setSelectedNodeId: (nodeId) =>
    set({
      selectedNodeId: nodeId,
    }),
}));
