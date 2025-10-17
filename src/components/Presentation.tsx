import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TitleSlide from "./slides/TitleSlide";
import ObjectiveSlide from "./slides/ObjectiveSlide";
import CostComparisonSlide from "./slides/CostComparisonSlide";
import FinancialBenefitsSlide from "./slides/FinancialBenefitsSlide";
import QualityBenefitsSlide from "./slides/QualityBenefitsSlide";
import TimelineSlide from "./slides/TimelineSlide";
import MetricsIntroSlide from "./slides/MetricsIntroSlide";
import MetricSlide from "./slides/MetricSlide";
import MetricsSummarySlide from "./slides/MetricsSummarySlide";
import ConclusionSlide from "./slides/ConclusionSlide";
import { MessageSquare, Clock, Zap, UserCheck, PhoneForwarded, Activity, AlertCircle, Users, DollarSign, TrendingDown, ThumbsUp } from "lucide-react";

const slides = [
  TitleSlide,
  ObjectiveSlide,
  CostComparisonSlide,
  FinancialBenefitsSlide,
  QualityBenefitsSlide,
  TimelineSlide,
  MetricsIntroSlide,
  // Métricas Operativas Individuales
  () => <MetricSlide 
    title="Volumen de Consultas Atendidas"
    description="Total de interacciones gestionadas por el chatbot por día, semana o mes."
    successCriteria="Más del 75% del volumen total de consultas atendido por el chatbot"
    icon={MessageSquare}
    type="operational"
  />,
  () => <MetricSlide 
    title="Tasa de Resolución Automática (FCR)"
    description="Porcentaje de consultas resueltas sin intervención humana."
    successCriteria="Más del 70% de las consultas deben resolverse automáticamente"
    icon={UserCheck}
    type="operational"
  />,
  () => <MetricSlide 
    title="Tiempo Medio de Respuesta"
    description="Tiempo estimado desde que el cliente inicia la consulta hasta recibir la primera respuesta."
    successCriteria="Menor a 35 segundos"
    icon={Zap}
    type="operational"
  />,
  () => <MetricSlide 
    title="Tiempo Medio de Resolución"
    description="Tiempo total que tarda el chatbot en resolver una consulta completa."
    successCriteria="Igual o menor al tiempo promedio del equipo humano"
    icon={Clock}
    type="operational"
  />,
  () => <MetricSlide 
    title="Transferencias a Operador Humano"
    description="Porcentaje de casos que requieren derivación a un agente humano."
    successCriteria="Menor al 30% de las conversaciones totales"
    icon={PhoneForwarded}
    type="operational"
  />,
  () => <MetricSlide 
    title="Disponibilidad del Servicio"
    description="Nivel de operatividad continua del chatbot."
    successCriteria="Aproximadamente 100% de disponibilidad, sin caídas"
    icon={Activity}
    type="operational"
  />,
  () => <MetricSlide 
    title="Tasa de Quejas"
    description="Porcentaje de conversaciones que derivan en quejas formales o insatisfacción manifiesta."
    successCriteria="Reducir en más de un 30% respecto a la tasa actual de quejas"
    icon={AlertCircle}
    type="operational"
  />,
  () => <MetricSlide 
    title="Clasificación de Clientes"
    description="Identificación automática de clientes con historial de reclamos o interacciones problemáticas."
    successCriteria="Reducir los clientes conflictivos en más de un 25%"
    icon={Users}
    type="operational"
  />,
  // Resumen Métricas Operativas
  () => <MetricsSummarySlide 
    title="Resumen: Métricas Operativas"
    subtitle="8 indicadores clave para medir la eficiencia del sistema"
    icon={MessageSquare}
    type="operational"
    metrics={[
      { name: "Volumen de consultas atendidas", success: "Más del 75% del total atendido por el chatbot" },
      { name: "Tasa de resolución automática (FCR)", success: "Más del 70% de consultas resueltas automáticamente" },
      { name: "Tiempo medio de respuesta", success: "Menor a 35 segundos" },
      { name: "Tiempo medio de resolución", success: "Igual o menor al tiempo del equipo humano" },
      { name: "Transferencias a operador humano", success: "Menor al 30% de conversaciones" },
      { name: "Disponibilidad del servicio", success: "Aproximadamente 100% sin caídas" },
      { name: "Tasa de quejas", success: "Reducción de más del 30%" },
      { name: "Clasificación de clientes", success: "Reducción de más del 25% de clientes conflictivos" },
    ]}
  />,
  // Métricas Financieras Individuales
  () => <MetricSlide 
    title="Costo por Interacción"
    description="Costo promedio por cada consulta atendida (IA vs humano)."
    successCriteria="Disminución del 80-90% respecto al costo humano"
    icon={DollarSign}
    type="financial"
  />,
  () => <MetricSlide 
    title="Reducción del Costo Operativo Total"
    description="Reducción mensual en costos directos de sueldos y operación."
    successCriteria="Reducción del 30-50% del costo total del área"
    icon={TrendingDown}
    type="financial"
  />,
  // Resumen Métricas Financieras
  () => <MetricsSummarySlide 
    title="Resumen: Métricas Financieras"
    subtitle="2 indicadores para medir el impacto económico"
    icon={DollarSign}
    type="financial"
    metrics={[
      { name: "Costo por interacción", success: "Disminución del 80-90% respecto al costo humano" },
      { name: "Reducción del costo operativo total", success: "Reducción del 30-50% del costo total del área" },
    ]}
  />,
  // Métrica de Calidad Individual
  () => <MetricSlide 
    title="Encuesta de Satisfacción (CSAT)"
    description="Valoración directa de los clientes sobre la calidad de atención recibida mediante encuesta post-chat."
    successCriteria="Aumentar la satisfacción en un 30% respecto al valor actual"
    icon={ThumbsUp}
    type="quality"
  />,
  // Resumen Métrica de Calidad
  () => <MetricsSummarySlide 
    title="Resumen: Métrica de Calidad"
    subtitle="1 indicador para medir la satisfacción del cliente"
    icon={ThumbsUp}
    type="quality"
    metrics={[
      { name: "Encuesta de satisfacción (CSAT)", success: "Aumentar la satisfacción en un 30% respecto al valor actual" },
    ]}
  />,
  ConclusionSlide,
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-7xl">
          <CurrentSlideComponent />
        </div>
      </div>

      <div className="bg-card/50 backdrop-blur-sm border-t border-border py-4 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <ChevronLeft className="h-5 w-5" />
            Anterior
          </Button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir a diapositiva ${index + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            variant="default"
            size="lg"
            className="gap-2"
          >
            Siguiente
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
