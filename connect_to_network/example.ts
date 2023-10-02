import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
console.log(`✅ Connected!`)

const address = new PublicKey('9gLCTN2iZZMtWKeUPsrWrFvrX6FNczirG3rMUXvrB2sb');
const balance = await connection.getBalance(address);
const balanceInSol = balance/LAMPORTS_PER_SOL;


console.log(`The balance is: ${balanceInSol}`);

