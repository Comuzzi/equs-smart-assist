import { Target, TrendingUp, Users, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const ObjectiveSlide = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Reducción de Costos",
      description: "Hasta 10x más económico que empleados tradicionales",
    },
    {
      icon: Clock,
      title: "Disponibilidad 24/7",
      description: "Atención continua sin horarios ni turnos",
    },
    {
      icon: Users,
      title: "Escalabilidad",
      description: "Capacidad ilimitada sin contratar más personal",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
          <Target className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-primary">Objetivo Principal</span>
        </div>
        <h2 className="text-5xl font-bold text-foreground mb-4">
          ¿Por qué un Chatbot con IA?
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Automatizar la comunicación con clientes y gestionar tareas del área de carga 
          y coordinación, transformando costos fijos en variables controlados
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card
            key={index}
            className="p-8 border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
              <benefit.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
            <p className="text-muted-foreground text-lg">{benefit.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ObjectiveSlide;
