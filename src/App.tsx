import { ThemeProvider } from "./components/theme-provider";
import TopBar from "./components/TopBar";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <TopBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
