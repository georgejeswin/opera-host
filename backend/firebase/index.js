import admin from "firebase-admin";

import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const required = createRequire(import.meta.url); // construct the require method
const serviceAccount = required("../config/fbServiceAccountKey.json"); // use the require method
// import serviceAccount from "../config/fbServiceAccountKey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://opera-international.firebaseio.com",
});

export default admin;
