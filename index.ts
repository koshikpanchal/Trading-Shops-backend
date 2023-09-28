import express from "express";
import customerDetailRoute from "./src/routes/getCustomerDetails";
import dematHoldingsRoute from "./src/routes/getDematHoldings";
import getfundsRoute from "./src/routes/funds/getFunds";

const port = 8008;
const app = express();

app.get("/", (req, res) => {
  res.send({ user: "koshik" });
});

//Routes
app.use("/customerDetails", customerDetailRoute);
app.use("/dematHoldings", dematHoldingsRoute);
app.use("/getFunds", getfundsRoute);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
