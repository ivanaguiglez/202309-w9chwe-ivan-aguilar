import { Routes, Route, Navigate } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/friendlify" />} />
      <Route path="/friendlify" />
    </Routes>
  );
};

export default App;
