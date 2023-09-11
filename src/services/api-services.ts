const BASE_URL = "https://api.coincap.io/v2/assets";

const requestGETOptions: Partial<RequestInit> = {
  method: "GET",
  redirect: "follow",
};

export const getAllData = async () => {
  try {
    const response = await fetch(BASE_URL, requestGETOptions);
    return await response.json();
  } catch (err) {
    console.log(" error ", err);
  }
};

export const getById = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, requestGETOptions);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(" ERROR --- ", err);
  }
};

export const getHistoryById = async (id: string) => {
  const interval = "d1";

  try {
    const response = await fetch(
      `${BASE_URL}/${id}/history?interval=${interval}`,
      requestGETOptions
    );
    const data = await response.json();
    return data; // priceUsd & time in ms in decending order
  } catch (err) {
    console.log(" ERROR --- ", err);
  }
};
