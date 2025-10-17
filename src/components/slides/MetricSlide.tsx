import { Card } from "@/components/ui/card";
import { CheckCircle2, Target } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface MetricSlideProps {
  title: string;
  description: string;
  successCriteria: string;
  icon: LucideIcon;
  type: "operational" | "financial" | "quality";
}

const MetricSlide = ({ title, description, successCriteria, icon: Icon, type }: MetricSlideProps) => {
  const typeColors = {
    operational: {
      badge: "bg-primary/10 text-primary border-primary/20",
      gradient: "from-primary/10 to-primary/5",
      iconBg: "bg-primary/20",
      iconColor: "text-primary",
    },
    financial: {
      badge: "bg-secondary/10 text-secondary border-secondary/20",
      gradient: "from-secondary/10 to-secondary/5",
      iconBg: "bg-secondary/20",
      iconColor: "text-secondary",
    },
    quality: {
      badge: "bg-accent/30 text-accent-foreground border-accent/40",
      gradient: "from-accent/20 to-accent/10",
      iconBg: "bg-accent/30",
      iconColor: "text-accent-foreground",
    },
  };

  const colors = typeColors[type];

  return (
    <div className="space-y-8 flex flex-col justify-center min-h-[600px]">
      <div className="text-center mb-8">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border-2 ${colors.badge}`}>
          <Icon className={`h-5 w-5 ${colors.iconColor}`} />
          <span className="text-sm font-semibold">
            {type === "operational" ? "Métrica Operativa" : type === "financial" ? "Métrica Financiera" : "Métrica de Calidad"}
          </span>
        </div>
        <h2 className="text-5xl font-bold text-foreground mb-4">{title}</h2>
      </div>

      <div className="max-w-4xl mx-auto w-full space-y-6">
        <Card className={`p-10 bg-gradient-to-br ${colors.gradient} border-2 border-foreground/10`}>
          <div className="flex items-start gap-4 mb-6">
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${colors.iconBg} flex-shrink-0`}>
              <Icon className={`h-7 w-7 ${colors.iconColor}`} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Descripción</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
            </div>
          </div>
        </Card>

        <Card className="p-10 bg-gradient-to-br from-card to-accent/5 border-2 border-secondary/20">
          <div className="flex items-start gap-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/20 flex-shrink-0">
              <Target className="h-7 w-7 text-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-secondary" />
                Criterio de Éxito
              </h3>
              <p className="text-xl font-semibold text-secondary">{successCriteria}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MetricSlide;
