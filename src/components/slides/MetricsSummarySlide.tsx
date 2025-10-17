import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Metric {
  name: string;
  success: string;
}

interface MetricsSummarySlideProps {
  title: string;
  subtitle: string;
  metrics: Metric[];
  icon: LucideIcon;
  type: "operational" | "financial" | "quality";
}

const MetricsSummarySlide = ({ title, subtitle, metrics, icon: Icon, type }: MetricsSummarySlideProps) => {
  const typeColors = {
    operational: {
      badge: "bg-primary/10 text-primary border-primary/20",
      gradient: "from-primary/10 to-secondary/10",
      iconBg: "bg-primary/20",
      iconColor: "text-primary",
    },
    financial: {
      badge: "bg-secondary/10 text-secondary border-secondary/20",
      gradient: "from-secondary/10 to-primary/10",
      iconBg: "bg-secondary/20",
      iconColor: "text-secondary",
    },
    quality: {
      badge: "bg-accent/30 text-accent-foreground border-accent/40",
      gradient: "from-accent/20 to-primary/10",
      iconBg: "bg-accent/30",
      iconColor: "text-accent-foreground",
    },
  };

  const colors = typeColors[type];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border-2 ${colors.badge}`}>
          <Icon className={`h-5 w-5 ${colors.iconColor}`} />
          <span className="text-sm font-semibold">Resumen</span>
        </div>
        <h2 className="text-5xl font-bold text-foreground mb-4">{title}</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
      </div>

      <Card className={`p-8 bg-gradient-to-br ${colors.gradient} border-2 border-foreground/10 max-w-5xl mx-auto`}>
        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border/50">
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${colors.iconBg} flex-shrink-0`}>
                <CheckCircle2 className={`h-5 w-5 ${colors.iconColor}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{metric.name}</h3>
                <p className="text-lg text-secondary font-semibold">{metric.success}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default MetricsSummarySlide;
