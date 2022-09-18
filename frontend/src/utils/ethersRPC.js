import { ethers } from 'ethers';

export default class EthersRPC {
    constructor(provider) {
        this.provider = provider;
    }

    async getChainId() {
        try {
            const ethersProvider = new ethers.providers.Web3Provider(this.provider);

            // Get user's Ethereum public address
            const networkDetails = await (ethersProvider.getNetwork());
            return networkDetails.chainId;
        } catch (error) {
            return error;
        }
    }

    async getAccounts() {
        try {
            const ethersProvider = new ethers.providers.Web3Provider(this.provider);
            const signer = ethersProvider.getSigner();

            // Get user's Ethereum public address
            return await signer.getAddress();
        } catch (error) {
            return error;
        }
    }

    async getBalance() {
        try {
            const ethersProvider = new ethers.providers.Web3Provider(this.provider);
            const signer = ethersProvider.getSigner();

            // Get user's Ethereum public address
            const address = (await signer.getAddress());

            // Get user's balance in ether
            return ethers.utils.formatEther(
                await ethersProvider.getBalance(address), // Balance is in wei
            );
        } catch (error) {
            return error;
        }
    }

    async signMessage() {
        try {
            const ethersProvider = new ethers.providers.Web3Provider(this.provider);
            const signer = ethersProvider.getSigner();

            const originalMessage = 'Hi, Welcome to the world of Web3';

            // Sign the message
            return await signer.signMessage(originalMessage);
        } catch (error) {
            return error;
        }
    }
}
