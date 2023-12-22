import { MediaRenderer, Web3Button, useAddress, useContract, useContractRead, useNFT } from "@thirdweb-dev/react";
import { STAKING_ADDRESS, ENERGY_ADDRESS, REWARDS_ADDRESS, AKASHA_ADDRESS} from "../../../constants/addresses";
import { ethers } from "ethers";


interface EquippedProps {
    tokenId: number;
};

export const HyperBoosted = (props: EquippedProps) => {
    const address = useAddress();

    const { contract: toolContract } = useContract(ENERGY_ADDRESS);
    const { data: nft } = useNFT(toolContract, props.tokenId);

    const { contract: stakingContract } = useContract(STAKING_ADDRESS);

    const { data: claimableRewards } = useContractRead(
        stakingContract,
        "getStakeInfoForToken",
        [props.tokenId, address]
    );

    return (
        <div  p-2>
            {nft && (
                <div className="mx-auto justify-center">
                    <div className=' mx-auto justify-center '>
                        <div className=" w-48">
                            <MediaRenderer
                             className=" rounded-3xl shadow-md"
                                src={nft.metadata.image}
                                height="100%"
                                width="100%"
                            />
                        </div>
                        <div className="w-96">
                            <p className='text-xl text-bold text-yellow-100 py-2'>{nft.metadata.name}</p>
                            <p className=" text-base text-white py-2">Boosted: {ethers.utils.formatUnits(claimableRewards[0], 0)}</p>
                            <Web3Button
                           
                
                               
                                contractAddress={STAKING_ADDRESS}
                                action={(contract) => contract.call("withdraw", [props.tokenId, 1])}
                            >Unboost</Web3Button>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="text-lg text-yellow-100 py-2">Claimable HYPER tokens:</p>
                        <p className="text-base text-white py-2">{ethers.utils.formatUnits(claimableRewards[1], 18)}</p>
                        <Web3Button
                           
                            contractAddress={STAKING_ADDRESS}
                            action={(contract) => contract.call("claimRewards", [props.tokenId])}
                        >Claim $HYPER</Web3Button>
                    </div>
                </div>
            )}
        </div>
    )
};