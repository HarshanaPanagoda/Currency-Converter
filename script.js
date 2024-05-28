const apiKey = "YOUR_API_KEY";
const apiUrl = `https://api.apilayer.com/exchangerates_data/convert?apikey=${apiKey}`;

const fromAmount = document.getElementById("fromAmount");
const fromCurrency = document.getElementById("fromCurrency");
const toAmount = document.getElementById("toAmount");
const toCurrency = document.getElementById("toCurrency");

async function fetchRates() {
  const fromValue = fromCurrency.value;
  const toValue = toCurrency.value;
  const amount = fromAmount.value;

  try {
    const response = await fetch(
      `${apiUrl}&from=${fromValue}&to=${toValue}&amount=${amount}`
    );
    const data = await response.json();
    const rate = data.result;
    toAmount.value = rate.toFixed(2);
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
  }
}

fromAmount.addEventListener("input", fetchRates);
fromCurrency.addEventListener("change", fetchRates);
toCurrency.addEventListener("change", fetchRates);

// Initial fetch to populate the toAmount field
fetchRates();
