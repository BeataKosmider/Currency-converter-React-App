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

  const handleResult = (result) => {
    setResult(result);
  };
  const handleMessage = (message) => {
    setMessage(message);
  };
  const handleLoading = (isLoading) => {
    setIsLoading(isLoading);
  };

  return (
    <>
      <main className="container">
        <Header />
        <section className="converter">
          <Form
            setResult={handleResult}
            setMessage={handleMessage}
            setIsLoading={handleLoading}
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
