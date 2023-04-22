const Form = ({ setResult, setMessage, setIsLoading }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const amount = event.target.amount.value;
    const currency = event.target.currency.value;
    const url = `https://api.nbp.pl/api/exchangerates/rates/a/${currency}/today/`;
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const rate = data.rates[0].mid;
        const result = (amount * rate).toFixed(2);
        setResult(result);
        setMessage("");
      })
      .catch(() => {
        setMessage("No actual data available for now");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleOnSubmit} id="exchange-form">
      <input
        placeholder="0.00"
        name="amount"
        type="number"
        id="amount"
        className="input"
        min="0.01"
        step="0.01"
        required
      />
      <select name="currency" id="currency" className="input">
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CHF">CHF</option>
      </select>
      <input type="submit" value="Przelicz" id="button" />
    </form>
  );
};

export default Form;
