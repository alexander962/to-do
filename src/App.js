import React from "react";
import "./App.sass";
import ColumnsSection from "./Components/ColumnsSection";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TemplateSection from "./Components/TemplateSection";
import ChessBoard from "./Components/ChessBoard";
import FloatSection from "./Components/FloatSection";
import FormSection from "./Components/FormSection";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ColumnsSection />} />
        <Route path="/template" element={<TemplateSection />} />
        <Route path="/chess-board" element={<ChessBoard />} />
        <Route path="/float" element={<FloatSection />} />
        <Route path="/form" element={<FormSection />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
