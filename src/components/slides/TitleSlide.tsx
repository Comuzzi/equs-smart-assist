import { Bot, Sparkles } from "lucide-react";

const TitleSlide = () => {
  return (
    <div className="bg-gradient-to-br from-primary via-primary-glow to-secondary rounded-2xl shadow-2xl p-16 text-center min-h-[600px] flex flex-col items-center justify-center">
      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm mb-8 animate-pulse">
        <Bot className="h-12 w-12 text-white" />
      </div>
      
      <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
        Chatbot con IA
      </h1>
      
      <h2 className="text-4xl font-semibold text-white/90 mb-8">
        para EqusFarma
      </h2>
      
      <div className="flex items-center gap-2 text-white/80 text-xl">
        <Sparkles className="h-6 w-6" />
        <span>Transformación Digital e Inteligente</span>
      </div>
      
      <div className="mt-12 text-white/70 text-lg">
        Propuesta de Implementación 2025
      </div>
    </div>
  );
};

export default TitleSlide;
