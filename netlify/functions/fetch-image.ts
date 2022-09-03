import { Handler } from "@netlify/functions";
import axios from "axios";

const handler: Handler = async function () {
  const SECRET_KEY = process.env.API_KEY;

  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/?client_id=${SECRET_KEY}`
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: `Error: ${error}`,
    };
  }
};

export { handler };
