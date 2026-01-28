import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { DraggableNode } from "./components/draggable-node";
import { useEditorStore } from "./store/use-editor-store";

function App() {
  const { nodes, updateNodePosition } = useEditorStore();

  function handleDragEnd(event: DragEndEvent) {
    const { active, delta } = event;
    const node = nodes.find((n) => n.id === active.id);

    if (node) {
      // Atualiza a posição final somando o deslocamento (delta)
      updateNodePosition(node.id, node.x + delta.x, node.y + delta.y);
    }
  }

  return (
    <div className="w-screen h-screen bg-slate-50 overflow-hidden relative">
      <h1 className="absolute top-4 left-4 text-slate-400 font-mono text-sm z-50">
        Automation Editor v0.1
      </h1>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="w-full h-full relative">
          {nodes.map((node) => (
            <DraggableNode
              key={node.id}
              id={node.id}
              x={node.x}
              y={node.y}
              data={node.data}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
}

export default App;
