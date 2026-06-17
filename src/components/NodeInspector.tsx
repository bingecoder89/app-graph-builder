import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RiPencilLine } from "@remixicon/react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useStore } from "../store/useStore";
import { useState } from "react";

function NodeInspector() {
  const nodes = useStore((state) => state.nodes);
  const setNodes = useStore((state) => state.setNodes);
  const selectedNodeId = useStore((state) => state.selectedNodeId);
  const activeTab = useStore((state) => state.activeTab);
  const setActiveTab = useStore((state) => state.setActiveTab);
  const selectedNode = nodes.find((node) => node.id === selectedNodeId);
  const [isEditing, setIsEditing] = useState(false);
  const [newLabel, setNewLabel] = useState("");

  const handleOnBlur = () => {
    const updatedNodes = nodes.map((node) => {
      return node.id === selectedNodeId
        ? {
            ...node,
            data: {
              label: newLabel,
            },
          }
        : node;
    });
    setNodes(updatedNodes);
    setIsEditing(false);
  };
  return (
    <div className="bg-gray-200 w-full flex flex-col gap-2 p-4 rounded-md max-sm:w-[85%] max-sm:mx-auto">
      <div className="flex items-center gap-1.5">
        {isEditing ? (
          <Input
            className="border-2 border-gray-400"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            onBlur={handleOnBlur}
          />
        ) : (
          <h1 className="text-xl font-bold">{selectedNode?.data.label}</h1>
        )}
        {!!selectedNodeId && (
          <Button
            variant="outline"
            onClick={() => {
              setNewLabel(selectedNode?.data.label);
              setIsEditing(true);
            }}
          >
            <RiPencilLine />
          </Button>
        )}
      </div>
      <Badge className="bg-green-500">Healthy</Badge>
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)}>
        <TabsList className="border-2 border-gray-200">
          <TabsTrigger value="config">Config</TabsTrigger>
          <TabsTrigger value="runtime">Runtime</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex gap-4">
        <Slider defaultValue={[75]} max={100} step={1} className="w-[70%]" />
        <Input
          placeholder="0.02"
          className="w-[30%] border-2 border-gray-400"
        />
      </div>
    </div>
  );
}

export default NodeInspector;
