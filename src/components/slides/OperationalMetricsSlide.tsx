import { Card } from "@/components/ui/card";
import {
  Activity,
  Timer,
  Clock3,
  GaugeCircle,
  UserCheck,
  ShieldAlert,
  Wifi,
  AlertTriangle,
  Users,
} from "lucide-react";

const metrics = [
  {
    icon: Users,
    metric: "Volumen de consultas atendidas",
    description:
      "Total de interacciones gestionadas por el chatbot por día, semana o mes.",
    success: "Más del 75% del volumen total atendido por el chatbot.",
  },
  {
    icon: Activity,
    metric: "Tasa de resolución automática (FCR)",
    description: "Porcentaje de consultas resueltas sin intervención humana.",
    success: "Más del 70% de las consultas resueltas automáticamente.",
  },
  {
    icon: Timer,
    metric: "Tiempo medio de respuesta",
    description:
      "Tiempo estimado desde que el cliente inicia la consulta hasta recibir la primera respuesta.",
    success: "Menor a 35 segundos.",
  },
  {
    icon: Clock3,
    metric: "Tiempo medio de resolución",
    description:
      "Tiempo total que tarda el chatbot en resolver una consulta completa.",
    success: "Igual o menor al tiempo promedio del equipo humano.",
  },
  {
    icon: UserCheck,
    metric: "Transferencias a operador humano (%)",
    description: "Porcentaje de casos que requieren derivación a un agente humano.",
    success: "Menor al 30% de las conversaciones totales.",
  },
  {
    icon: Wifi,
    metric: "Disponibilidad del servicio",
    description: "Nivel de operatividad continua del chatbot.",
    success: "Aproximadamente 100% de disponibilidad, sin caídas.",
  },
  {
    icon: AlertTriangle,
    metric: "Tasa de quejas",
    description:
      "Porcentaje de conversaciones que derivan en quejas formales o insatisfacción manifiesta.",
    success: "Reducir en más de un 30% respecto a la tasa actual.",
  },
  {
    icon: ShieldAlert,
    metric: "Clasificación de clientes conflictivos/no conflictivos",
    description:
      "Identificación automática de clientes con historial de reclamos o interacciones problemáticas.",
    success: "Reducir los clientes conflictivos en más de un 25%.",
  },
];

const OperationalMetricsSlide = () => {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-background via-accent/10 to-background shadow-2xl">
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.25), transparent 55%), radial-gradient(circle at 80% 0%, rgba(59,130,246,0.2), transparent 50%)" }} />

      <div className="relative z-10 h-full flex flex-col gap-10 p-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full mb-6">
            <GaugeCircle className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Métricas Operativas
            </span>
          </div>
          <h2 className="text-4xl font-bold text-foreground">
            Métricas Operativas de Atención al Cliente
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Indicadores clave para monitorear la eficiencia del chatbot en la resolución de consultas,
            la velocidad de respuesta y la estabilidad del servicio.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 overflow-y-auto pr-1">
          {metrics.map((item, index) => (
            <Card
              key={index}
              className="group relative h-full border border-primary/10 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="absolute inset-0 rounded-2xl border border-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(16,185,129,0.2))" }} />
              <div className="relative space-y-4">
                <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.metric}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {item.success}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OperationalMetricsSlide;
