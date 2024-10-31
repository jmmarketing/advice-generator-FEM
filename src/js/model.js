// [Advice Slip API](https://api.adviceslip.com)
import { API_URL } from "./config.js";

export let advice = {};

export const getAdvice = async function () {
  try {
    const response = await fetch(API_URL);

    const data = await response.json();
    if (!response.ok) {
      throw new Error(
        `Error! ${data.message}. Response Code: ${response.status}`
      );
    }

    advice = data.slip;
  } catch (error) {
    throw error;
  }
};
