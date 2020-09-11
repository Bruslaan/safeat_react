import * as functions from 'firebase-functions';

// // // Start writing Firebase Functions
// // // https://firebase.google.com/docs/functions/typescript
// //
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const stripe = require('stripe')('sk_test_51H4wHkAp105LrKrukopj6dzbqJqJg1460nzZPdgeKo8Dl9RnqZy4C3mZNtOvocVb5eVyoNTDfK2390JkW96Gk8Jw004zzRTgdF');
const express = require('express');
const cors = require("cors")
const app = express();
app.use(cors({ origin: true }))

app.get('/secret', async (req: any, res: any) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2999,
    currency: 'eur',
    // Verify your integration in this guide by including this parameter
    metadata: { integration_check: 'accept_a_payment' },
  });
  res.json({ client_secret: paymentIntent.client_secret });
});

app.get('/hallo', async (req: any, res: any) => {

  res.json({ "hallo": "World" });
});


exports.api = functions.https.onRequest(app)