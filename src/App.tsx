import Header from "./components/header/Header";
import Login from "./features/login/components/Login";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center pt-4">
        <Login />
      </div>
    </>
  );
}

export default App;
