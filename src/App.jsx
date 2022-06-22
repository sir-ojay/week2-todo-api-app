import { Routes, Route } from "react-router-dom";

// Authentication Import
import { AuthWrapper } from "./components/auth/AuthWrapper";
import LandingPage from "./components/landing page/LandingPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Reset from "./components/auth/Reset";

// Todos import
import Todos from "./components/todos page/Todos";
import TodoList from "./components/todos page/TodoList";
import TodoForm from "./components/todos page/TodoForm";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="auth" element={<AuthWrapper />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reset" element={<Reset />} />
        </Route>
        <Route path="todos" element={<Todos />} />
        <Route path="/todoform" element={<TodoForm />} />
        <Route path="/todolist" element={<TodoList />} />

      </Routes>
    </div>
  );
};

export default App;

// fevil was here
