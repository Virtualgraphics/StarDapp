import { MediaRenderer, Web3Button, useAddress, useClaimConditions, useContract, useNFTBalance } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";


type GiftProps = {
    nft: NFT;
};

const Gift = ({ nft }: GiftProps) => {
    const address = useAddress();
    const currentDate = new Date();

    const { contract } = useContract("0xE43E3d5Cbc74e6595a98db1eecfc64B90b2f2Ced");

    const { data: isOwned, isLoading: isLoadingIsOwned } = useNFTBalance(contract, address, nft.metadata.id);

    const { data: claimCondition, isLoading: isLoadingClaimCondition } = useClaimConditions(contract, nft.metadata.id);

    if(claimCondition === undefined || claimCondition.length === 0) {
        return (
            <div>
            </div>
        )
    };

    const isDatePassed = claimCondition && claimCondition[0].startTime < currentDate;
    const displayGiftDay = parseInt(nft.metadata.id) + 1;

    return (
        <div className="flex flex-col justify-center m-auto max-w-screen-xl">
            <div className="relative mt-8">
                {!isLoadingIsOwned && !isLoadingClaimCondition && isOwned && (
                    <>
                        <MediaRenderer
                            src={isDatePassed && isOwned.toNumber() > 0 ? nft.metadata.image : "https://www.skygodz.com/wp-content/uploads/2023/11/hyperverse_cover.jpg"}
                            className="rounded-3xl"
                        />
                        <h3 style={{
                            position: "absolute",
                            top: "20px",
                            left: "20px",
                            color: "#333333",
                            fontSize: "16px",
                            fontWeight: "bold",
                            padding: "5px 10px",
                            borderRadius: "10px",
                            backgroundColor: "#ffffff",
                        }}>Day {displayGiftDay}</h3>
                        {address && (
                            isOwned.toNumber() > 0 ? (
                                <p style={{
                                    position: "absolute",
                                    bottom: "5px",
                                    left: "50%",
                                    transform: "translate(-50%, 0)",
                                    backgroundColor: "darkblue",
                                    color: "lightblue",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    borderRadius: "10px",
                                    padding: "10px",
                                    width: "80%",
                                    textAlign: "center",
                                }}>Claimed!</p>
                            ) : (
                                <Web3Button
                                    contractAddress={"0xE43E3d5Cbc74e6595a98db1eecfc64B90b2f2Ced"}
                                    action={(contract) => contract.erc1155.claim(nft.metadata.id, 1)}
                                    isDisabled={!isDatePassed || isOwned.toNumber() > 0}
                                    style={{
                                        position: "absolute",
                                        bottom: "0px",
                                        left: "0px",
                                        backgroundColor: isDatePassed ? "#FFFFFF" : "#89a2ff",
                                        color: "#333333",
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                        borderRadius: "0px 0px 10px 10px",
                                        padding: "10px",
                                        width: "100%",
                                    }}
                                >{
                                    isDatePassed ? (
                                        isOwned.toNumber() > 0 ? "Alien Claimed" : "Claim Alien"
                                    ) : (
                                        claimCondition![0].startTime.toLocaleString()
                                    )
                                }</Web3Button>
                            )
                        )}
                    </>
                )}
            </div>
        </div>
    )
};

export default Gift;