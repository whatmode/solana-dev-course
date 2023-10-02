import * as web3 from "@solana/web3.js";
import * as dotenv from "dotenv";
import base58 from "bs58"
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers"  


dotenv.config();

const keypair = getKeypairFromEnvironment("SECRET_KEY");
const connection = new web3.Connection(web3.clusterApiUrl("devnet"));

console.log(
    `✅ Finished! We've loaded our secret key securely, using an env file!`
  );