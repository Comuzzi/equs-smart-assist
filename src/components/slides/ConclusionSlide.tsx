import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Zap, Shield, ArrowRight } from "lucide-react";

const ConclusionSlide = () => {
  const keyPoints = [
    {
      icon: TrendingUp,
      text: "8-10x más económico que empleados tradicionales",
    },
    {
      icon: Zap,
      text: "Transforma costos fijos en variables controlados",
    },
    {
      icon: CheckCircle2,
      text: "Disponibilidad 24/7 sin costos adicionales",
    },
    {
      icon: Shield,
      text: "Escalabilidad infinita sin contratar personal",
    },
  ];

  const impacts = [
    { label: "Reducción de Costos", value: "50-70%" },
    { label: "Ahorro Mensual", value: "$2,800+" },
    { label: "Tiempo de Respuesta", value: "15x más rápido" },
    { label: "Disponibilidad", value: "24/7/365" },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-6xl font-bold text-foreground mb-6">
          Conclusión
        </h2>
        <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
          Una inversión estratégica para el crecimiento sostenible de EqusFarma
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
          <h3 className="text-3xl font-bold mb-6">Beneficios Clave</h3>
          <div className="space-y-4">
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 flex-shrink-0">
                  <point.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-lg font-medium pt-2">{point.text}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="p-8 bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/20">
            <h3 className="text-3xl font-bold mb-6">Impacto Proyectado</h3>
            <div className="grid grid-cols-2 gap-4">
              {impacts.map((impact, index) => (
                <div key={index} className="text-center p-4 bg-card rounded-lg">
                  <div className="text-3xl font-bold text-secondary mb-1">
                    {impact.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{impact.label}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 border-2 border-foreground/10">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 flex-shrink-0">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Próximos Pasos</h4>
                <p className="text-muted-foreground">
                  Iniciar relevamiento de sistemas y comenzar el diseño del flujo conversacional 
                  para tener el PoC operativo en 3-4 semanas
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-8 bg-gradient-to-r from-primary via-primary-glow to-secondary text-white text-center">
        <h3 className="text-3xl font-bold mb-3">
          Transformación Digital Escalable
        </h3>
        <p className="text-xl text-white/90">
          Una solución que crece con EqusFarma hacia el futuro
        </p>
      </Card>
    </div>
  );
};

export default ConclusionSlide;
