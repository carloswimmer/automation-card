import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { DraggableNode } from "../draggable-node";

const meta: Meta<typeof DraggableNode> = {
  title: "Editor/DraggableNode",
  component: DraggableNode,
  parameters: {
    layout: "fullscreen",
  },
  // Decorator para prover o contexto de Dnd necessário
  decorators: [
    (Story, context) => {
      const [position, setPosition] = useState({
        x: context.args.x || 100,
        y: context.args.y || 100,
      });

      const handleDragEnd = (event: DragEndEvent) => {
        const { delta } = event;
        setPosition((prev) => ({
          x: prev.x + delta.x,
          y: prev.y + delta.y,
        }));
      };

      return (
        <DndContext onDragEnd={handleDragEnd}>
          <div
            className="w-full h-full bg-slate-50 relative border border-dashed border-slate-300"
            style={{ position: "relative", width: "100%", height: "100%" }}
          >
            <Story args={{ ...context.args, x: position.x, y: position.y }} />
          </div>
        </DndContext>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof DraggableNode>;

export const Default: Story = {
  args: {
    id: "node-1",
    x: 100,
    y: 100,
    data: {
      id: "node-1",
      title: "Enviar Webhook",
      description: "Envia os dados para uma URL externa",
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
};
