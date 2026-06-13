import AppList from "./AppList";
import NodeInspector from "./NodeInspector";

function RightPanel() {
  return (
    <div className="bg-white absolute top-1/5 right-5 flex flex-col p-4 max-w-md max-h-60 rounded-xl">
      <AppList />
      <NodeInspector />
    </div>
  );
}

export default RightPanel;
