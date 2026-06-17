import { create } from "zustand";

interface StoreState {
  selectedAppId: string | null;
  setSelectedAppId: (appId: string) => void;

  selectedNodeId: string | null;
  setSelectedNodeId: (nodeId: string) => void;

  activeTab: string;
  setActiveTab: (tab: string) => void;

  nodes: any[];
  setNodes: (nodesData: any[]) => void;

  edges: any[];
  setEdges: (edgesData: any[]) => void;
}

export const useStore = create<StoreState>((set) => ({
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
