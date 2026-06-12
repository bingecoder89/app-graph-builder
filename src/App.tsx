import TopBar from "./components/TopBar";
import LeftRail from "./components/LeftRail";
import Canvas from "./components/Canvas";

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <Canvas />
      <TopBar />
      <LeftRail />
    </div>
  );
}

export default App;
