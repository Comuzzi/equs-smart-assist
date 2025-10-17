import { Card } from "@/components/ui/card";
import { BarChart3, DollarSign, ThumbsUp } from "lucide-react";

const MetricsIntroSlide = () => {
  const metricTypes = [
    {
      icon: BarChart3,
      title: "Métricas Operativas",
      description: "Eficiencia y rendimiento del sistema",
      count: "8 métricas",
    },
    {
      icon: DollarSign,
      title: "Métricas Financieras",
      description: "Impacto económico y ahorro",
      count: "2 métricas",
    },
    {
      icon: ThumbsUp,
      title: "Métricas de Calidad",
      description: "Satisfacción del cliente",
      count: "1 métrica",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-foreground mb-6">
          Métricas de Evaluación
        </h2>
        <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
          Indicadores clave para medir el éxito del sistema de chatbot IA
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {metricTypes.map((type, index) => (
          <Card key={index} className="p-8 text-center bg-gradient-to-br from-card to-accent/5 border-2 border-primary/10 hover:border-primary/30 transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <type.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
            <p className="text-muted-foreground mb-3">{type.description}</p>
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-semibold">
              {type.count}
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-8 max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-3">Sistema de Medición Integral</h3>
          <p className="text-lg text-muted-foreground">
            Cada métrica incluye una descripción clara y criterios de éxito específicos
            para evaluar el rendimiento del chatbot de manera objetiva y continua
          </p>
        </div>
      </Card>
    </div>
  );
};

export default MetricsIntroSlide;
