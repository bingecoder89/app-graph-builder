import TopBar from "./components/TopBar";
import LeftRail from "./components/LeftRail";
import Canvas from "./components/Canvas";
import RightPanel from "./components/RightPanel";

function App() {
  return (
    <div className="h-screen">
      <Canvas />
      <TopBar />
      <LeftRail />
      <RightPanel />
    </div>
  );
}

export default App;
