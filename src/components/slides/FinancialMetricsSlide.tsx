import { Card } from "@/components/ui/card";
import { Wallet, ArrowDownToDot, LineChart, Coins, PiggyBank } from "lucide-react";

const metrics = [
  {
    icon: Coins,
    metric: "Costo por interacción",
    description: "Costo promedio por cada consulta atendida (IA vs humano).",
    success: "Disminución del 80-90% respecto al costo humano.",
  },
  {
    icon: Wallet,
    metric: "Reducción del costo operativo total",
    description: "Reducción mensual en costos directos de sueldos y operación.",
    success: "Reducción del 30-50% del costo total del área.",
  },
];

const FinancialMetricsSlide = () => {
  return (
    <div className="relative w-full min-h-[720px] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-background via-secondary/5 to-background shadow-2xl">
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 15% 20%, rgba(16,185,129,0.25), transparent 55%), radial-gradient(circle at 85% 10%, rgba(14,165,233,0.2), transparent 50%)" }} />

      <div className="relative z-10 flex h-full flex-col gap-8 p-10">
        <div className="mx-auto max-w-4xl text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-5 py-2 rounded-full mb-6">
            <ArrowDownToDot className="h-5 w-5 text-secondary" />
            <span className="text-sm font-semibold text-secondary uppercase tracking-wide">
              Métricas Financieras
            </span>
          </div>
          <h2 className="text-4xl font-bold text-foreground">
            Métricas Financieras Simplificadas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Indicadores directos del impacto económico del chatbot IA sobre los costos operativos y la
            eficiencia del presupuesto.
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center gap-6">
          <div className="w-full max-w-4xl">
            <div className="grid gap-5 sm:grid-cols-2">
              {metrics.map((item, index) => (
                <Card
                  key={index}
                  className="group relative h-full border border-secondary/15 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
                >
                  <div className="absolute inset-0 rounded-2xl border border-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.25), rgba(59,130,246,0.2))" }} />
                  <div className="relative space-y-4">
                    <div className="inline-flex items-center justify-center rounded-xl bg-secondary/10 p-3 text-secondary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-secondary">{item.metric}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary">
                      <PiggyBank className="h-4 w-4" />
                      <span>{item.success}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="w-full max-w-4xl border border-secondary/20 bg-gradient-to-r from-secondary/10 via-background to-secondary/10 p-8 backdrop-blur-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3 text-center lg:text-left">
                <h3 className="text-2xl font-semibold text-secondary">Impacto Financiero</h3>
                <p className="text-lg text-muted-foreground">
                  El modelo de IA permite transformar costos fijos en variables, manteniendo el control del
                  gasto y asegurando retornos medibles en el corto plazo.
                </p>
              </div>
              <div className="inline-flex items-center gap-3 self-center rounded-full bg-secondary/10 px-6 py-3 text-secondary font-semibold">
                <LineChart className="h-5 w-5" />
                <span>Ahorro sostenible en cada interacción</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FinancialMetricsSlide;
