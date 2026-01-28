import { AutomationCard } from "./components/automation-card";

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-50 overflow-hidden relative">
      <AutomationCard />
      <h1 className="absolute top-4 left-4 text-slate-400 font-mono text-sm">
        Automation Editor v0.1
      </h1>
    </div>
  );
}

export default App;
