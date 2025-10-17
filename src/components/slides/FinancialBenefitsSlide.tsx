import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { TrendingDown, Users, Zap, DollarSign } from "lucide-react";

const FinancialBenefitsSlide = () => {
  const savingsData = [
    { name: "Ahorro Mensual", value: 2800, color: "hsl(var(--secondary))" },
    { name: "Costo Actual", value: 5600, color: "hsl(var(--muted))" },
  ];

  const benefits = [
    {
      icon: TrendingDown,
      title: "30-70% Reducción",
      description: "De carga operativa para empleados existentes",
      highlight: "50% promedio",
    },
    {
      icon: DollarSign,
      title: "$2,800 USD/mes",
      description: "Ahorro directo eliminando 2 de 4 empleados",
      highlight: "Sin incluir reclutamiento",
    },
    {
      icon: Zap,
      title: "Costo Variable",
      description: "Solo pagas por lo que usas, no por tiempo ocioso",
      highlight: "Auto-ajustable",
    },
    {
      icon: Users,
      title: "Escalabilidad",
      description: "Sin necesidad de contratar ante aumento de demanda",
      highlight: "Infinita",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
          <TrendingDown className="h-5 w-5 text-secondary" />
          <span className="text-sm font-semibold text-secondary">Impacto Financiero</span>
        </div>
        <h2 className="text-5xl font-bold text-foreground mb-4">
          Beneficios Económicos
        </h2>
        <p className="text-xl text-muted-foreground">
          Reducción significativa de costos operativos
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Ahorro Proyectado</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={savingsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: $${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {savingsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`$${value} USD`, "Monto"]}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-6 space-y-2 text-center">
            <p className="text-3xl font-bold text-secondary">50% de ahorro</p>
            <p className="text-muted-foreground">en costos de personal mensual</p>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 border-2 hover:border-secondary/50 transition-all group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 mb-3 group-hover:bg-secondary/20 transition-colors">
                <benefit.icon className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground mb-2">{benefit.description}</p>
              <div className="inline-block px-3 py-1 bg-secondary/10 rounded-full">
                <span className="text-xs font-semibold text-secondary">{benefit.highlight}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialBenefitsSlide;
