import "./reset.css";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Result from "./components/Result";
import Loader from "./components/Loader";
import { useState } from "react";

const App = () => {
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <main className="container">
        <Header />
        <section className="converter">
          <Form
            setResult={setResult}
            setMessage={setMessage}
            setIsLoading={setIsLoading}
          />
          {isLoading ? (
            <Loader />
          ) : (
            <Result result={result} message={message} />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
