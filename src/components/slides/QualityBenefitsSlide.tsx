import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Database, Clock, UserCheck, Mail, TrendingUp, Sparkles } from "lucide-react";

const QualityBenefitsSlide = () => {
  const responseTimeData = [
    { name: "Empleado", tiempo: 15, color: "hsl(var(--muted))" },
    { name: "Chatbot", tiempo: 1, color: "hsl(var(--primary))" },
  ];

  const features = [
    {
      icon: Database,
      title: "CRM Inteligente 360°",
      items: [
        "Historial completo de chats",
        "Integración de emails",
        "Análisis de comportamiento",
      ],
    },
    {
      icon: Clock,
      title: "Disponibilidad Adaptada al Cliente",
      items: [
        "Atención 24/7/365",
        "Sin turnos rotativos",
        "Sin costos extra",
      ],
    },
    {
      icon: Mail,
      title: "Facilidad de Integración con:",
      items: [
        "Envío automático de emails",
        "Confirmaciones de pedido",
        "Notificaciones de envío",
      ],
    },
    {
      icon: UserCheck,
      title: "Gestión Inteligente",
      items: [
        "Etiquetado automático",
        "Derivación inteligente",
        "Priorización de casos",
      ],
    },
    {
      icon: Sparkles,
      title: "Personalidad Adaptable",
      items: [
        "Tono personalizable",
        "Refleja valores de la empresa",
        "100% configurable",
      ],
    },
    {
      icon: TrendingUp,
      title: "Evolución Continua",
      items: [
        "Aprendizaje automático",
        "Mejora con feedback",
        "Actualización constante",
      ],
    },
  ];

  return (
    <div className="relative w-full min-h-[760px] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-background via-primary/5 to-background shadow-2xl">
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 20% 25%, rgba(59,130,246,0.25), transparent 55%), radial-gradient(circle at 80% 10%, rgba(236,72,153,0.2), transparent 50%)" }} />

      <div className="relative z-10 flex h-full flex-col gap-10 p-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Calidad y Experiencia</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground">
            Beneficios Estratégicos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mejora significativa en calidad de servicio y datos
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr,1.4fr]">
          <Card className="relative overflow-hidden border border-primary/15 bg-card/80 p-6 backdrop-blur-sm">
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(236,72,153,0.15))" }} />
            <div className="relative flex h-full flex-col gap-4">
              <h3 className="text-xl font-bold text-center text-primary">Tiempo de Respuesta</h3>
              <div className="flex-1 flex items-end" style={{ minHeight: 260 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={responseTimeData} barSize={70} margin={{ top: 10, right: 16, left: 8, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.12} />
                    <XAxis dataKey="name" tick={{ fill: "hsl(var(--muted-foreground))" }} tickLine={false} axisLine={{ stroke: "hsl(var(--border))" }} />
                    <YAxis
                      label={{ value: "Minutos", angle: -90, position: "insideLeft", fill: "hsl(var(--muted-foreground))" }}
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                      tickLine={false}
                      axisLine={{ stroke: "hsl(var(--border))" }}
                      domain={[0, 16]}
                    />
                    <Tooltip
                      formatter={(value: number) => [`${value} min`, "Tiempo"]}
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "10px",
                      }}
                    />
                    <Bar dataKey="tiempo" radius={[14, 14, 0, 0]}>
                      {responseTimeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="rounded-2xl bg-primary/10 px-4 py-3 text-center">
                <p className="text-2xl font-bold text-primary">15x más rápido</p>
                <p className="text-sm text-muted-foreground">respuesta inmediata</p>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative h-full border border-primary/15 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="absolute inset-0 rounded-2xl border border-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(236,72,153,0.15))" }} />
                <div className="relative space-y-3">
                  <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-semibold text-foreground">{feature.title}</h4>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-primary/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityBenefitsSlide;
