import { instance } from "../server.js";
import asyncHandler from "express-async-handler";
import crypto from "crypto";
import { Payment } from "../Model/paymentModel.js";
import axios from "axios";
export const checkout = asyncHandler(async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    order,
  });
});

export const paymentverification = asyncHandler(async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const orderId = req.params.id;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    console.log(isAuthentic);
    // Database comes here

    await Payment.create({
      orderId,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.redirect(`http://localhost:3000/paymentsuccess?reference=${orderId}`);
  } else {
    res.send("failed");
  }
});

export const initiatepayment = asyncHandler(async (req, res) => {
  const payUUrl = "https://secure.payu.in/_payment";
  const { amount, productInfo, firstName, email, phone } = req.body;
  const merchantKey = "IrPKpg";
  const merchantSalt = "aKvlpUks";
  // Construct the payment request payload
  const payload = {
    key: merchantKey,
    txnid: "UNIQUE_TRANSACTION_ID",
    amount: req.body.amount || "10",
    productinfo: productInfo,
    firstname: firstName,
    email,
    phone,
    surl: "YOUR_SUCCESS_URL",
    furl: "YOUR_FAILURE_URL",
    service_provider: "payu_paisa",
  };

  const orderId = req.params.id;

  // Create a hash signature for the payload
  const hashString =
    merchantKey +
    "|" +
    payload.txnid +
    "|" +
    payload.amount +
    "|" +
    payload.productinfo +
    "|" +
    payload.firstname +
    "|" +
    payload.email +
    "|||||||||||" +
    merchantSalt;

  const hash = crypto.createHash("sha512").update(hashString).digest("hex");
  payload.hash = hash;

  // const response = await axios.post(payUUrl, payload);

  // // Redirect the user to the PayU payment page
  // res.redirect(response.data);
  res.json(payload)
});

export const payUMoneyPaymentResponse = asyncHandler(async (req, res) => {
  var pd = req.body;
  //Generate new Hash
  var hashString =
    config.payumoney.salt +
    "|" +
    pd.status +
    "||||||||||" +
    "|" +
    pd.email +
    "|" +
    pd.firstname +
    "|" +
    pd.productinfo +
    "|" +
    pd.amount +
    "|" +
    pd.txnid +
    "|" +
    config.payumoney.key;
  var sha = new jsSHA("SHA-512", "TEXT");
  sha.update(hashString);
  var hash = sha.getHash("HEX");
  // Verify the new hash with the hash value in response
  if (hash == pd.hash) {
    res.send({ status: pd.status });
  } else {
    res.send({ status: "Error occured" });
  }
});
