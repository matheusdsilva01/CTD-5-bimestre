import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import SolicitacaoContextProvider from "./context/contextoFormulario";
import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <SolicitacaoContextProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/formularioEntrada" element={<Formulario />} />
          </Routes>
        </QueryClientProvider>
      </SolicitacaoContextProvider>

    </div>
  );
}

export default App;
