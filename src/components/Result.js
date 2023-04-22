const Result = ({ result, message }) => {
  return (
    <div className="calculator-pln">
      <p id="calculator">
        pln: <span id="PLN">{message || result}</span>
      </p>
    </div>
  );
};

export default Result;
