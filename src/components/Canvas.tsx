import { useQuery } from "@tanstack/react-query";
import { useStore } from "../store/useStore";
import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { getGraphs } from "../api/graphs.js";
import { useEffect } from "react";

function Canvas() {
  const selectedAppId = useStore((state) => state.selectedAppId);
  const nodes = useStore((state) => state.nodes);
  const setNodes = useStore((state) => state.setNodes);
  const edges = useStore((state) => state.edges);
  const setEdges = useStore((state) => state.setEdges);
  const setSelectedNodeId = useStore((state) => state.setSelectedNodeId);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["graphs", selectedAppId],
    queryFn: () => getGraphs(selectedAppId),
    enabled: !!selectedAppId,
  });

  useEffect(() => {
    if (data) {
      setNodes(data.nodes);
      setEdges(data.edges);
    }
  }, [data]);

  if (isLoading) {
    return (
      <ReactFlow colorMode="system">
        <Background />
      </ReactFlow>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const onNodesChange = (changes) => setNodes(applyNodeChanges(changes, nodes));

  const onEdgesChange = (changes) => setEdges(applyEdgeChanges(changes, edges));

  const onConnect = (params) => setEdges(addEdge(params, edges));

  const onNodeClick = (_, node) => {
    setSelectedNodeId(node.id);
  };

  return (
    <div className="w-full h-full">
      <ReactFlow
        onNodeClick={onNodeClick}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        colorMode="system"
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Canvas;
