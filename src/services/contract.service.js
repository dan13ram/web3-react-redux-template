import { logReceipt } from "../helpers";

export const contractService = {
    getGreeting,
    setGreeting
};

async function getGreeting(contract) {
    return await contract.methods.get().call();
}

async function setGreeting(contract, greeting) {
    const receipt = await contract.methods
        .set(greeting)
        .send();
    if (!receipt.status) {
        logReceipt(receipt);
        return { error: "Transaction failed" };
    }
    return {};
}
