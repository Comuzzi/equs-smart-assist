import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { TrendingDown, Users, Zap, DollarSign } from "lucide-react";

const FinancialBenefitsSlide = () => {
  const capacityData = [
    { name: "Capacidad Actual", value: 100, color: "hsl(var(--muted))" },
    { name: "Nueva Capacidad", value: 200, color: "hsl(var(--secondary))" },
  ];

  const benefits = [
    {
      icon: TrendingDown,
      title: "50% Reducción",
      description: "De carga operativa para empleados existentes",
      highlight: "Menos trabajo manual",
    },
    {
      icon: Users,
      title: "Duplicar Capacidad",
      description: "Con reducción del 50% de carga operativa, duplicas la capacidad de atención en coordinación",
      highlight: "Mismos empleados",
    },
    {
      icon: Zap,
      title: "Costo Variable",
      description: "Solo pagas por lo que usas, no por tiempo ocioso",
      highlight: "Auto-ajustable",
    },
    {
      icon: DollarSign,
      title: "Escalabilidad",
      description: "Sin necesidad de contratar ante aumento de demanda",
      highlight: "Ahorro continuo",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
          <TrendingDown className="h-5 w-5 text-secondary" />
          <span className="text-sm font-semibold text-secondary">Impacto Operativo</span>
        </div>
        <h2 className="text-5xl font-bold text-foreground mb-4">
          Beneficios Económicos
        </h2>
        <p className="text-xl text-muted-foreground">
          Más capacidad con los mismos recursos
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Incremento de Capacidad</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={capacityData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {capacityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`${value}%`, "Capacidad"]}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-6 space-y-2 text-center">
            <p className="text-3xl font-bold text-secondary">2x la capacidad</p>
            <p className="text-muted-foreground">con los mismos empleados</p>
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
