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
import { getGraphs } from "../api/graphs";
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
      setNodes((data as any).nodes);
      setEdges((data as any).edges);
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

  const onNodesChange = (changes: any) =>
    setNodes(applyNodeChanges(changes, nodes));

  const onEdgesChange = (changes: any) =>
    setEdges(applyEdgeChanges(changes, edges));

  const onConnect = (params: any) => setEdges(addEdge(params, edges));

  const onNodeClick = (_: any, node: any) => {
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
