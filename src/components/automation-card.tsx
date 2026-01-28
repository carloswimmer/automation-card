import { Copy, Plus, Settings, Trash2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const AutomationCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const title = "Título do Card";

  return (
    <section
      className="relative w-80 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Automation Card ${title}`}
    >
      {/* Menu de Hover (3 botões ícone) */}
      <div
        className={`
        absolute -top-12 left-1/2 -translate-x-1/2 
        flex gap-2 p-2 bg-white border rounded-lg shadow-lg 
        transition-all duration-200
        ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
      `}
      >
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Settings className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Copy className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-destructive"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Ponto de Conexão de Entrada (Seta que chega) */}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-sm z-10" />

      <Card className="border-2 group-hover:border-blue-500 transition-colors">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-bold">Título do Card</CardTitle>
          <p className="text-sm text-muted-foreground">
            Descrição breve da automação.
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Campo 1</Label>
            <Input value="Valor 1" readOnly />
          </div>
          <div className="space-y-2">
            <Label>Campo 2</Label>
            <Input value="Valor 2" readOnly />
          </div>
          <div className="space-y-2">
            <Label>Campo 3</Label>
            <Input value="Valor 3" readOnly />
          </div>

          {/* Lista de Saída de Setas */}
          <div className="pt-4 border-t space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground uppercase">
              <span>Saídas</span>
              <Plus className="h-3 w-3 cursor-pointer hover:text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between p-2 bg-slate-50 rounded border group/output relative">
                <span className="text-sm">Próximo Passo</span>
                {/* Ponto de Conexão de Saída */}
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-sm cursor-crosshair hover:scale-125 transition-transform" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
