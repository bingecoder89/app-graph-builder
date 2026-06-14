import { useCallback } from "react";
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

function Canvas() {
  const nodes = useStore((state) => state.nodes);
  const setNodes = useStore((state) => state.setNodes);
  const edges = useStore((state) => state.edges);
  const setEdges = useStore((state) => state.setEdges);
  const setSelectedNodeId = useStore((state) => state.setSelectedNodeId);

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
