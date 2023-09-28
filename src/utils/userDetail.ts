/*
 * If we have special character in the apiKey or secretKey, we need to use - 
                encodeURIComponent("string")
 */

export const user = "";
export const session = "";
export const apiKey = "";
export const secretKey = "";
export const loginUrl = `https://api.icicidirect.com/apiuser/login?api_key=${encodeURIComponent(
  apiKey
)}`;
