import { create } from "zustand";
import type { AutomationNode } from "@/schema/automationNodeSchema";

interface Node {
  id: string;
  x: number;
  y: number;
  data: AutomationNode;
}

interface EditorState {
  nodes: Node[];
  updateNodePosition: (id: string, x: number, y: number) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  nodes: [
    {
      id: "node-1",
      x: 100,
      y: 100,
      data: {
        id: "node-1",
        title: "Início",
        description: "Gatilho da automação",
        fields: [
          {
            id: "field-1",
            name: "field-1",
            label: "Field 1",
            value: "Value 1",
          },
        ],
      },
    },
  ],
  updateNodePosition: (id, x, y) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === id ? { ...node, x, y } : node,
      ),
    })),
}));
