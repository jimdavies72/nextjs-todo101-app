
const createEndpoint = (endpoint: string) => {
  if (endpoint.length === 0) {
    throw new RangeError("endpoint cannot be empty");
    return;
  }

  let host = process.env.SERVER_HOST || "http://localhost:5001";

  if (host.slice(-1) === "/") {
    host = host.slice(0, -1);
  }

  if (endpoint.substring(0, 1) === "/") {
    return host + endpoint;
  }

  return host + "/" + endpoint;
};

export const httpRequest = async (
  endpoint: string,
  payload: {},
  httpVerb: string,
  refreshType: {} | null = null
) => {
  try {
    const requestInit: RequestInit = {
      method: httpVerb,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: payload ? JSON.stringify(payload) : null,
    }

    if (refreshType) {
      Object.assign(requestInit, refreshType) 
    }
    
    const response = await fetch(createEndpoint(endpoint) || "", requestInit);


    if (response.statusText === "No Content") {
      return null;
    } else if (response ) {
      return response.json();
    };
    throw new URIError("failed to fetch data");

  } catch (error) {
    console.log(error);
  }
};
