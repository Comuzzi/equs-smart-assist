import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { DollarSign, Users, Bot } from "lucide-react";

const CostComparisonSlide = () => {
  const comparisonData = [
    { name: "Empleado", costo: 1.0, color: "hsl(var(--destructive))" },
    { name: "Chatbot IA", costo: 0.125, color: "hsl(var(--secondary))" },
  ];

  const detailsData = [
    {
      icon: Users,
      label: "Empleado Humano",
      cost: "$80,000/día",
      clients: "50-60 clientes/día",
      costPerClient: "~$1.00 USD",
      color: "destructive",
    },
    {
      icon: Bot,
      label: "Sistema IA",
      cost: "Pago por uso",
      clients: "Ilimitado",
      costPerClient: "$0.125 USD",
      color: "secondary",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
          <DollarSign className="h-5 w-5 text-secondary" />
          <span className="text-sm font-semibold text-secondary">Análisis Económico</span>
        </div>
        <h2 className="text-5xl font-bold text-foreground mb-4">
          Comparación de Costos
        </h2>
        <p className="text-xl text-muted-foreground">
          Costo por cliente atendido
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Costo por Cliente</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'USD', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                formatter={(value: number) => [`$${value.toFixed(3)} USD`, "Costo"]}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="costo" radius={[8, 8, 0, 0]}>
                {comparisonData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-6 p-4 bg-secondary/10 rounded-lg text-center">
            <p className="text-2xl font-bold text-secondary">8-10x más económico</p>
            <p className="text-sm text-muted-foreground mt-1">con el sistema de IA</p>
          </div>
        </Card>

        <div className="space-y-4">
          {detailsData.map((detail, index) => (
            <Card key={index} className="p-6 border-2">
              <div className="flex items-start gap-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${detail.color}/10`}>
                  <detail.icon className={`h-6 w-6 text-${detail.color}`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-3">{detail.label}</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p><span className="font-semibold">Costo diario:</span> {detail.cost}</p>
                    <p><span className="font-semibold">Capacidad:</span> {detail.clients}</p>
                    <p className="text-lg font-bold text-foreground mt-2">
                      {detail.costPerClient} por cliente
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CostComparisonSlide;
