import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
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
      title: "Disponibilidad Total",
      items: [
        "Atención 24/7/365",
        "Sin turnos rotativos",
        "Sin costos extra",
      ],
    },
    {
      icon: Mail,
      title: "Automatización Proactiva",
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
        "Refleja valores de marca",
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
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-primary">Calidad y Experiencia</span>
        </div>
        <h2 className="text-5xl font-bold text-foreground mb-4">
          Beneficios Estratégicos
        </h2>
        <p className="text-xl text-muted-foreground">
          Mejora significativa en calidad de servicio y datos
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 lg:col-span-1">
          <h3 className="text-xl font-bold mb-4 text-center">Tiempo de Respuesta</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={responseTimeData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Minutos', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                formatter={(value: number) => [`${value} min`, "Tiempo"]}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="tiempo" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-primary/10 rounded-lg text-center">
            <p className="text-xl font-bold text-primary">15x más rápido</p>
            <p className="text-sm text-muted-foreground">respuesta inmediata</p>
          </div>
        </Card>

        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-5 border-2 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-base font-bold">{feature.title}</h4>
              </div>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QualityBenefitsSlide;
