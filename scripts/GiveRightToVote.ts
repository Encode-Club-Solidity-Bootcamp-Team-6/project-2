import { createPublicClient, http, createWalletClient, formatEther, toHex, hexToString } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import { abi, bytecode } from "../artifacts/contracts/Ballot.sol/Ballot.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const deployerPrivateKey = process.env.PRIVATE_KEY || "";
// Ballot Contract address
const contractAddress = "0x0dA9Be8897f08677806641eA38CaBa4661149767"; 
// Voter address. If anyone can make this into an array, would be better
const voterAddress = "0x6f62febCF3872aFF66Ff03ec6065D6BbA9fe65F8"; 

async function giveRightToVote() {
    try {
        const publicClient = createPublicClient({
            chain: sepolia,
            transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
        });

        const account = privateKeyToAccount(`0x${deployerPrivateKey}`);
        const wallet = createWalletClient({
            account,
            chain: sepolia,
            transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
        });

        const hash = await wallet.writeContract({
            address: contractAddress,
            abi,
            functionName: "giveRightToVote",
            args: [voterAddress],
        });

        console.log(`Right to vote granted to ${voterAddress}`);
        console.log("Transaction hash:", hash);
    } catch (error) {
        console.error("Error:", error);
    }
}

giveRightToVote();

