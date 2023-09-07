export const getAllCoins = async () => {
  const requestOptions: Partial<RequestInit> = {
    method: "GET",
    redirect: "follow",
  };
  try {
    const response = await fetch(
      "https://api.coincap.io/v2/assets",
      requestOptions
    );
    return await response.json();
  } catch (err) {
    console.log(" error ", err);
  }
};
