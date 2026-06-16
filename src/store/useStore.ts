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
  activeTab: "config",
  setActiveTab: (tab) =>
    set({
      activeTab: tab,
    }),
  nodes: [],
  setNodes: (nodesData) =>
    set({
      nodes: nodesData,
    }),
  edges: [],
  setEdges: (edgesData) =>
    set({
      edges: edgesData,
    }),
}));
