import Logo from "../src/assets/logo.png";
import { ArrowLeft } from "lucide-react";
function App() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="flex flex-col w-full max-w-156.75 mx-auto">
        <div className="flex items-center justify-center pt-6 ">
          <img src={Logo} alt="logo" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center text-link text-brand gap-1">
            <ArrowLeft size={15} className="translate-" />
            <span>Voltar</span>
          </div>

          <h1 className="text-title text-content-primary">Compras da semana</h1>
        </div>

        <div></div>
        <div className="w-full flex items-center justify-center gap-4 mt-11">
          <input
            type="text"
            placeholder="Adicione um novo item"
            className="flex-1 w-full border-2 h-11 border-border-primary rounded-lg px-4.5 py-2.5 outline-none hover:border-border-hover text-content-tertiary bg-always-white"
          />
          <button className="bg-brand h-11 text-label text-always-white py-2.5 px-6 rounded-lg hover:bg-brand-hover">
            Adicionar item
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
