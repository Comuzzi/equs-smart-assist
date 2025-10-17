import { Card } from "@/components/ui/card";
import { BrainCircuit, LineChart, PiggyBank } from "lucide-react";

const MetricsIntroSlide = () => {
  return (
    <div className="relative w-full min-h-[640px] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-background via-secondary/5 to-background shadow-2xl">
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 20% 20%, rgba(14,165,233,0.22), transparent 55%), radial-gradient(circle at 80% 0%, rgba(16,185,129,0.2), transparent 50%)" }} />

      <div className="relative z-10 flex h-full flex-col gap-8 p-10">
        <div className="mx-auto max-w-4xl text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-5 py-2 rounded-full mb-6">
            <BrainCircuit className="h-5 w-5 text-secondary" />
            <span className="text-sm font-semibold text-secondary uppercase tracking-wide">
              Métricas Estratégicas
            </span>
          </div>
          <h2 className="text-5xl font-bold text-foreground">
            Evaluación del Desempeño del Chatbot IA
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A continuación se presentan las principales métricas para evaluar el rendimiento del sistema
            de chatbot de inteligencia artificial en EqusFarma, agrupadas en métricas operativas,
            financieras y de calidad/satisfacción.
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <div className="grid gap-5 sm:grid-cols-3">
            <Card className="group relative h-full border border-secondary/20 bg-card/85 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg">
              <div className="absolute inset-0 rounded-2xl border border-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.25), rgba(59,130,246,0.15))" }} />
              <div className="relative space-y-4">
                <div className="mx-auto inline-flex items-center justify-center rounded-xl bg-secondary/10 p-4 text-secondary">
                  <LineChart className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-secondary">Operativas</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Velocidad, resolución automática y disponibilidad para garantizar una atención sin fricciones.
                </p>
              </div>
            </Card>

            <Card className="group relative h-full border border-primary/20 bg-card/85 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="absolute inset-0 rounded-2xl border border-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(16,185,129,0.2))" }} />
              <div className="relative space-y-4">
                <div className="mx-auto inline-flex items-center justify-center rounded-xl bg-primary/10 p-4 text-primary">
                  <PiggyBank className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">Financieras</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Reducción de costos, eficiencia en inversiones y optimización del presupuesto operativo.
                </p>
              </div>
            </Card>

            <Card className="group relative h-full border border-foreground/15 bg-card/85 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-lg">
              <div className="absolute inset-0 rounded-2xl border border-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(45,212,191,0.18), rgba(59,130,246,0.18))" }} />
              <div className="relative space-y-4">
                <div className="mx-auto inline-flex items-center justify-center rounded-xl bg-foreground/10 p-4 text-foreground">
                  <BrainCircuit className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Calidad & Satisfacción</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Experiencia del cliente, percepción de servicio y mejora continua basada en feedback.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsIntroSlide;
