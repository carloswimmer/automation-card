import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { AutomationNode } from "@/schema/automationNodeSchema";
import { AutomationCard } from "./automation-card";

interface DraggableNodeProps {
  id: string;
  x: number;
  y: number;
  data: AutomationNode;
}

export function DraggableNode({ id, x, y, data }: DraggableNodeProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = {
    // Mantém a posição original + o deslocamento do arrasto atual
    top: y,
    left: x,
    transform: CSS.Translate.toString(transform),
    position: "absolute" as const,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="cursor-grab active:cursor-grabbing"
    >
      <AutomationCard />
    </div>
  );
}
