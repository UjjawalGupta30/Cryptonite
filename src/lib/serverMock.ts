import pubSub from './pubsub';

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": process.env.API_KEY || "",
  },
};

const fetchCompanyHoldings = async (coin: string) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/companies/public_treasury/${coin}`,
    options
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.companies.map((company: any) => ({ ...company, coin }));
};

export const startLiveUpdates = () => {
  const updateHoldings = async () => {
    try {
      const [btcHoldings, ethHoldings] = await Promise.all([
        fetchCompanyHoldings("bitcoin"),
        fetchCompanyHoldings("ethereum"),
      ]);
      const combinedHoldings = [...ethHoldings, ...btcHoldings];
      pubSub.publish("holdingsUpdate", combinedHoldings);
    } catch (error) {
      console.error(error);
    }
  };

  updateHoldings();
  setInterval(updateHoldings, 60000); // Refetch every 60 seconds
};
