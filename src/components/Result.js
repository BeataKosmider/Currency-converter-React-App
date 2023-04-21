const Result = ({ result }) => {
  return (
    <div className="calculator-pln">
      <p id="calculator">
        pln: <span id="PLN">{result}</span>
      </p>
    </div>
  );
};

export default Result;
