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
  nodes: [
    {
      id: "n1",
      data: { label: "Node 1" },
      position: { x: 0, y: 0 },
    },
    {
      id: "n2",
      data: { label: "Node 2" },
      position: { x: 100, y: 100 },
    },
    {
      id: "n3",
      data: { label: "Node 3" },
      position: { x: 200, y: 200 },
    },
  ],
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
