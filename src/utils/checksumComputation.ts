import { apiKey, secretKey } from "./userDetail";
import { createHmac } from "crypto";

export const generateHeader = (body: Object) => {
  let currentDate = new Date().getTime().toString();

  /*
   * 'body' is the body of the current request i.e post data request object
   * Some HTTP request has body and some has empty object
   */
  const data = JSON.stringify(body);

  const rawChecksum = currentDate + data;
  const checksum = createHmac("sha256", secretKey).update(rawChecksum);

  const checksumDigest = checksum.digest("base64");

  const header = {
    "Content-Type": "application/json",
    "X-Checksum": "token " + checksumDigest,
    "X-Timestamp": currentDate,
    "X-AppKey": apiKey,
    "X-SessionToken": "VzA0MDYyMjk6NTExNjA4Nzc=",
  };

  return header;
};
