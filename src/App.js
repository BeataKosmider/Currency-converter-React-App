import "./reset.css";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Result from "./components/Result";
import { useState } from "react";

const App = () => {
  const [result, setResult] = useState("");

  return (
    <>
      <main className="container">
        <Header />
        <section className="converter">
          <Form setResult={setResult} />
          <Result result={result} />

          <div id="loader"></div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
