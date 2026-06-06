import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
      <Dashboard />
    </>
  );
}

export default App;