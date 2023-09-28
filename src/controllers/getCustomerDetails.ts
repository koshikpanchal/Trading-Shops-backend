import { Request, Response } from "express";
import axios from "axios";
import { apiKey, session } from "../utils/userDetail";

const data = {
  SessionToken: session,
  AppKey: apiKey,
};

const config = {
  method: "get",
  url: "https://api.icicidirect.com/breezeapi/api/v1/customerdetails",
  headers: { "Content-Type": "application/json" },
  data: data,
};

export const customerDetailsController = (req: Request, res: Response) => {
  axios(config)
    .then((response) => {
      res.json(response.data);
    })

    .catch((error) => {
      console.log(`error from customer details`);
      console.log(error);
    });
};
