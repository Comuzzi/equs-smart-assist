import { Card } from "@/components/ui/card";
import { Star, ClipboardList, SmilePlus, PieChart } from "lucide-react";

const QualitySummarySlide = () => {
  return (
    <div className="relative w-full min-h-[700px] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-background via-emerald-50 to-background shadow-2xl">
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 18% 22%, rgba(16,185,129,0.25), transparent 55%), radial-gradient(circle at 82% 8%, rgba(59,130,246,0.18), transparent 50%)" }} />

      <div className="relative z-10 flex h-full flex-col gap-8 p-10">
        <div className="mx-auto max-w-4xl text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-100/70 px-5 py-2 rounded-full mb-6">
            <Star className="h-5 w-5 text-emerald-500" />
            <span className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              Calidad & Satisfacción
            </span>
          </div>
          <h2 className="text-4xl font-bold text-foreground">
            Métrica de Calidad y Resumen Global
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            La satisfacción del cliente y la visión integral del desempeño permiten validar el impacto del chatbot
            IA en EqusFarma.
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center gap-6">
          <Card className="w-full max-w-4xl border border-emerald-200/70 bg-card/85 p-8 backdrop-blur-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-4 lg:w-1/3">
                <h3 className="text-2xl font-semibold text-emerald-600 flex items-center gap-2">
                  <SmilePlus className="h-6 w-6" /> Encuesta de satisfacción (CSAT)
                </h3>
                <div className="rounded-2xl bg-emerald-100/70 px-4 py-3 text-sm text-emerald-700">
                  <p className="font-semibold">Métrica:</p>
                  <p>Encuesta de satisfacción (CSAT)</p>
                </div>
              </div>

              <div className="flex-1 lg:pl-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="border border-emerald-200/80 bg-white/80 p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-2">Descripción</h4>
                    <p className="text-base text-emerald-700/80">
                      Valoración directa de los clientes sobre la calidad de atención recibida mediante encuesta post-chat.
                    </p>
                  </Card>
                  <Card className="border border-emerald-200/80 bg-white/80 p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-2">Criterio de Éxito</h4>
                    <p className="text-base text-emerald-700/80">
                      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                        <PieChart className="h-4 w-4" /> Aumentar la satisfacción en un 30% respecto al valor actual.
                      </span>
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </Card>

          <Card className="w-full max-w-4xl border border-emerald-200/70 bg-card/85 p-8 backdrop-blur-sm">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-emerald-600 flex items-center gap-2">
                <ClipboardList className="h-6 w-6" /> Resumen por tipo de métrica
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="border border-emerald-200/80 bg-white/80 p-5">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Operativas:</span> centradas en eficiencia, automatización y reducción de quejas.
                  </p>
                </Card>
                <Card className="border border-emerald-200/80 bg-white/80 p-5">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Financieras:</span> enfocadas en ahorro y eficiencia económica.
                  </p>
                </Card>
                <Card className="border border-emerald-200/80 bg-white/80 p-5">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Calidad/Satisfacción:</span> orientadas a mejorar la experiencia del cliente y la percepción del servicio.
                  </p>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QualitySummarySlide;
