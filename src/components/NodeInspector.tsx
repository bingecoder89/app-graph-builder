import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { useStore } from "../store/useStore";

function NodeInspector() {
  const selectedNodeId = useStore((state) => state.selectedNodeId);
  return (
    <div className="bg-gray-200 w-xs flex flex-col gap-2 p-4 rounded-md">
      <h1 className="text-xl font-bold">
        {selectedNodeId ?? "No Node Selected"}
      </h1>
      <Badge className="bg-green-500">Healthy</Badge>
      <Tabs>
        <TabsList className="border-2 border-gray-200">
          <TabsTrigger value="config">Config</TabsTrigger>
          <TabsTrigger value="runtime">Runtime</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex gap-4">
        <Slider defaultValue={[75]} max={100} step={1} className="w-[70%]" />
        <Input
          placeholder="0.02"
          className="w-[20%] border-2 border-gray-400"
        />
      </div>
    </div>
  );
}

export default NodeInspector;
