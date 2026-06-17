import AppList from "./AppList";
import NodeInspector from "./NodeInspector";

function RightPanel() {
  return (
    <div className="hidden md:flex bg-white absolute top-1/5 right-5 flex-col p-4 w-xs h-60 rounded-xl">
      <AppList />
      <NodeInspector />
    </div>
  );
}

export default RightPanel;
