import { ArrowLeft } from "lucide-react";
import { Header } from "./components/Header";
import { ListInput } from "./components/List/ListInput";
import { ListSection } from "./components/List/ListSection";
function App() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="flex flex-col w-full max-w-156.75 mx-auto px-8">
        <Header />

        <div className="flex flex-col gap-4">
          <div className="flex items-center text-link text-brand gap-1">
            <ArrowLeft size={15} className="translate-" />
            <span>Voltar</span>
          </div>

          <h1 className="text-title text-content-primary">Tarefas</h1>
        </div>

        <div className="w-full flex items-center justify-center gap-4 mt-11  flex-col sm:flex sm:flex-row">
          <ListInput />
        </div>

        <ListSection />
      </div>
    </div>
  );
}

export default App;
