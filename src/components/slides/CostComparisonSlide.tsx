import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { DollarSign, Users, Bot, TrendingDown, AlertCircle, Zap } from "lucide-react";

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
      costType: "Costo Fijo",
      clients: "50-60 clientes/día",
      costPerClient: "~$1.00 USD",
      color: "destructive",
      limitations: [
        { icon: AlertCircle, text: "Capacidad limitada" },
        { icon: TrendingDown, text: "Capacidad ociosa en temporada baja" },
      ],
    },
    {
      icon: Bot,
      label: "Sistema IA",
      cost: "Pago por uso",
      costType: "Costo Variable",
      clients: "Ilimitado",
      costPerClient: "$0.125 USD",
      color: "secondary",
      limitations: [
        { icon: Zap, text: "Sin capacidad ociosa" },
        { icon: Zap, text: "Escala en temporada alta" },
      ],
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
          Costo fijo vs. Costo variable del sistema
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
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold">{detail.label}</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      detail.costType === "Costo Fijo" 
                        ? "bg-destructive/10 text-destructive" 
                        : "bg-secondary/10 text-secondary"
                    }`}>
                      {detail.costType}
                    </span>
                  </div>
                  <div className="space-y-2 text-muted-foreground mb-4">
                    <p><span className="font-semibold">Costo diario:</span> {detail.cost}</p>
                    <p><span className="font-semibold">Capacidad:</span> {detail.clients}</p>
                    <p className="text-lg font-bold text-foreground mt-2">
                      {detail.costPerClient} por cliente
                    </p>
                  </div>
                  <div className="space-y-2 pt-3 border-t">
                    {detail.limitations.map((limitation, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <limitation.icon className={`h-4 w-4 ${
                          detail.color === "destructive" ? "text-destructive" : "text-secondary"
                        }`} />
                        <span className={
                          detail.color === "destructive" ? "text-destructive/80" : "text-secondary/80"
                        }>
                          {limitation.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
          
          <Card className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10 border-2 border-secondary/20">
            <div className="flex items-start gap-3">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/20 flex-shrink-0">
                <Zap className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Beneficio Clave</h4>
                <p className="text-muted-foreground">
                  El sistema se adapta automáticamente a temporadas altas y bajas, 
                  <span className="font-semibold text-foreground"> eliminando capacidad ociosa</span> y 
                  <span className="font-semibold text-foreground"> cubriendo picos de demanda</span> sin contratar más personal.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CostComparisonSlide;
