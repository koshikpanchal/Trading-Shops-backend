import { Request, Response } from "express";
import axios from "axios";
import { generateHeader } from "../utils/checksumComputation";

const data = JSON.stringify({});
const body = {};

const config = {
  method: "get",
  url: "https://api.icicidirect.com/breezeapi/api/v1/dematholdings",
  headers: generateHeader(body),
  data: data,
};

export const getDematHoldingsController = (req: Request, res: Response) => {
  axios(config)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
