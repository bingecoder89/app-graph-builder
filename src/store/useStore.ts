import { create } from "zustand";

export const useStore = create((set) => ({
  selectedAppId: null,
  setSelectedAppId: (appId: any) =>
    set({
      selectedAppId: appId,
    }),
  selectedNodeId: null,
  setSelectedNodeId: (nodeId: any) =>
    set({
      selectedNodeId: nodeId,
    }),
  activeTab: "config",
  setActiveTab: (tab: any) =>
    set({
      activeTab: tab,
    }),
  nodes: [],
  setNodes: (nodesData: any) =>
    set({
      nodes: nodesData,
    }),
  edges: [],
  setEdges: (edgesData: any) =>
    set({
      edges: edgesData,
    }),
}));
