const { ethers } = require("hardhat")

const TOKEN_ID = 1

async function updateListing() {
    const accounts = await ethers.getSigners()
    const [deployer, owner, buyer1] = accounts

    const IDENTITIES = {
        [deployer.address]: "DEPLOYER",
        [owner.address]: "OWNER",
        [buyer1.address]: "BUYER_1",
    }

    const nftMarketplaceContract = await ethers.getContract("NftMarketplace")
    const basicNftContract = await ethers.getContract("BasicNft")

    console.log(`Updating listing for token ID ${TOKEN_ID} with a new price`)
    const updateTx = await nftMarketplaceContract
        .connect(owner)
        .updateListing(basicNftContract.address, TOKEN_ID, ethers.utils.parseEther("0.5"))

    const updateTxReceipt = await updateTx.wait(1)
    const updatedPrice = updateTxReceipt.events[0].args.price
    console.log("updated price:  ", updatedPrice.toString())

    // Confirm the listing is updated.
    const updatedListing = await nftMarketplaceContract.getListing(
        basicNftContract.address,
        TOKEN_ID
    )
    console.log(`Updated listing has price of ${updatedListing.price.toString()}`)
}

updateListing()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })