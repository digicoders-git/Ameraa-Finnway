import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AppRoute from "./routes/AppRoute";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        {AppRoute.map((r,i) => {
          const Component = r.component; 
          return <Route key={i} path={r.path} element={<Component />} />;
        })}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
