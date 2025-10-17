import { Card } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList } from "recharts";
import { TrendingDown, Users, Zap, DollarSign } from "lucide-react";

const FinancialBenefitsSlide = () => {
  const capacityData = [
    { name: "Capacidad Actual", valor: 100, color: "hsl(var(--muted))" },
    { name: "Capacidad Esperada", valor: 200, color: "hsl(var(--secondary))" },
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

      <div className="grid lg:grid-cols-[1.25fr,1fr] gap-8 items-stretch">
        <Card className="p-8 flex flex-col gap-6 border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 via-background to-secondary/10">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-secondary">Incremento de Capacidad</h3>
            <p className="text-muted-foreground text-base">
              Comparativa de puntos de atención que puede cubrir cada persona con y sin el chatbot IA.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <ResponsiveContainer width="100%" height={320}>
              <BarChart
                data={capacityData}
                barSize={88}
                barCategoryGap={48}
                margin={{ top: 32, right: 24, bottom: 0, left: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.12} />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  tickLine={false}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                />
                <YAxis
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                  tickLine={false}
                  domain={[0, 220]}
                  tickFormatter={(value) => `${value}%`}
                  label={{ value: "% capacidad por persona", angle: -90, position: "insideLeft", fill: "hsl(var(--muted-foreground))" }}
                />
                <Tooltip
                  formatter={(value: number) => [`${value}%`, "Capacidad"]}
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="valor" radius={[12, 12, 0, 0]}>
                  {capacityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                  <LabelList
                    dataKey="valor"
                    position="top"
                    formatter={(value: number) => `${value}%`}
                    style={{ fill: "hsl(var(--secondary))", fontWeight: 600 }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className="lg:w-56 space-y-4">
              <div className="rounded-2xl bg-secondary/10 px-4 py-3 text-center lg:text-left">
                <p className="text-sm font-semibold text-secondary">Resultado esperado</p>
                <p className="text-3xl font-bold text-secondary">2x capacidad</p>
                <p className="text-xs text-muted-foreground">Con el mismo equipo humano</p>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-semibold text-secondary">100%</span> capacidad actual promedio.</p>
                <p><span className="font-semibold text-secondary">200%</span> objetivo con IA asistiendo en coordinación.</p>
              </div>
            </div>
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
