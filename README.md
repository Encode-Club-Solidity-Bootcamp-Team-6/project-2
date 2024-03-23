# Ballot Contract Interaction Guide

## Setup
1. **Installation**: Run `npm install` to install necessary dependencies.
2. Create a `.env` file at the root with:
   - `PRIVATE_KEY=yourPrivateKey` for the deployer/chairperson's private key.
   - `ALCHEMY_API_KEY=yourAlchemyApiKey` for network access via Alchemy.
3. **Security**: Never commit your `.env` file to version control.

## Deploying the Ballot Contract
- Compile the contract: `npx hardhat compile`.
- Deploy by running: `npx ts-node --files ./scripts/DeployWithViem.ts "Proposal 1" "Proposal 2"`.

## Giving Voting Rights
- To grant voting rights, execute: 
  `npx ts-node --files ./scripts/GiveRightToVote.ts <contractAddress> <voterAddress>`.
  - Ensure execution by the deployer/chairperson.

## Voting
- Cast a vote with: `npx ts-node --files scripts/CastVote.ts <contractAddress> <proposalIndex>`.
  - Replace placeholders with the contract's address and the chosen proposal index.
 
## Delegate Vote
- Execute script with the Private Key in .env, that holds voting rights. In the CLI specifiy the address that you want to delegate to: `npx ts-node --files ./scripts/DelegateVote.ts <contractAddress> <Address you want to delegate to>`.

## Notes
- Make sure `hardhat.config.js` is configured with your network settings.
- Safeguard your private keys and carefully manage `.env` contents.
