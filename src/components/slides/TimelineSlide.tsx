import { Card } from "@/components/ui/card";
import { Calendar, CheckCircle2, Rocket } from "lucide-react";

const TimelineSlide = () => {
  const timeline = [
    {
      week: "Semana 1",
      title: "Relevamiento",
      tasks: [
        "Análisis de sistemas actuales (CRM, email)",
        "Identificación de campos críticos",
        "Mapeo de procesos existentes",
      ],
      status: "planning",
    },
    {
      week: "Semana 2",
      title: "Diseño",
      tasks: [
        "Diseño del flujo conversacional",
        "Definición de procesos de validación",
        "Arquitectura del sistema",
      ],
      status: "planning",
    },
    {
      week: "Semanas 3-4",
      title: "Desarrollo PoC",
      tasks: [
        "Desarrollo de Prueba de Concepto",
        "Integraciones básicas con sistemas",
        "Configuración inicial del chatbot",
      ],
      status: "development",
    },
    {
      week: "Desde Semana 4",
      title: "Iteración y Mejora",
      tasks: [
        "Pruebas continuas con usuarios reales",
        "Recopilación de feedback del equipo",
        "Ajustes y mejoras hasta entrega final",
      ],
      status: "testing",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "planning":
        return "primary";
      case "development":
        return "secondary";
      case "testing":
        return "accent";
      default:
        return "muted";
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
          <Calendar className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-primary">Plan de Implementación</span>
        </div>
        <h2 className="text-5xl font-bold text-foreground mb-4">
          Cronograma Tentativo
        </h2>
        <p className="text-xl text-muted-foreground">
          Ruta hacia la transformación digital
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {timeline.map((phase, index) => (
          <Card
            key={index}
            className="p-6 border-2 hover:border-primary/50 transition-all relative overflow-hidden group"
          >
            <div className={`absolute top-0 left-0 w-2 h-full bg-${getStatusColor(phase.status)}`} />
            
            <div className="pl-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm font-semibold text-primary mb-1">{phase.week}</div>
                  <h3 className="text-2xl font-bold">{phase.title}</h3>
                </div>
                <CheckCircle2 className={`h-8 w-8 text-${getStatusColor(phase.status)} opacity-50 group-hover:opacity-100 transition-opacity`} />
              </div>

              <ul className="space-y-2.5">
                {phase.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20">
            <Rocket className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-1">Duración Total Estimada</h4>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">4-6 semanas</span> desde el inicio hasta la entrega con mejoras continuas
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TimelineSlide;
