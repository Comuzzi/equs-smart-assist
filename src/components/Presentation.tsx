import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TitleSlide from "./slides/TitleSlide";
import ObjectiveSlide from "./slides/ObjectiveSlide";
import CostComparisonSlide from "./slides/CostComparisonSlide";
import FinancialBenefitsSlide from "./slides/FinancialBenefitsSlide";
import QualityBenefitsSlide from "./slides/QualityBenefitsSlide";
import MetricsIntroSlide from "./slides/MetricsIntroSlide";
import OperationalMetricsSlide from "./slides/OperationalMetricsSlide";
import FinancialMetricsSlide from "./slides/FinancialMetricsSlide";
import QualitySummarySlide from "./slides/QualitySummarySlide";
import TimelineSlide from "./slides/TimelineSlide";
import ConclusionSlide from "./slides/ConclusionSlide";

const slides = [
  TitleSlide,
  ObjectiveSlide,
  CostComparisonSlide,
  FinancialBenefitsSlide,
  QualityBenefitsSlide,
  MetricsIntroSlide,
  OperationalMetricsSlide,
  FinancialMetricsSlide,
  QualitySummarySlide,
  TimelineSlide,
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
