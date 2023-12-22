import { MediaRenderer, Web3Button, useAddress, useContract } from '@thirdweb-dev/react';
import { NFT } from '@thirdweb-dev/sdk';
import { STAKING_ADDRESS, ENERGY_ADDRESS, REWARDS_ADDRESS, AKASHA_ADDRESS} from "../../../constants/addresses";
import Link from 'next/link';


type Props = {
    nft: NFT[] | undefined;
};

export function HyperInventory({ nft }: Props) {
    const address = useAddress();
    const { contract: toolContract } = useContract(ENERGY_ADDRESS);
    const { contract: stakingContract } = useContract(STAKING_ADDRESS);

    async function stakeNFT(id: string) {
        if (!address) {
            return;
        }

        const isApproved = await toolContract?.erc1155.isApproved(
            address,
            STAKING_ADDRESS,
        );

        if (!isApproved) {
            await toolContract?.erc1155.setApprovalForAll(
                STAKING_ADDRESS,
                true,
            );
        }
        await stakingContract?.call("stake", [id, 1]);
    };

    if(nft?.length === 0) {
        return (
            <div className='w-max'>
                <p className='text-white text-lg'>You currently have no cosmic energy in your inventory.</p>
                <Link
                    href="/hypershop"
                >
                    <button className='rounded-2xl bg-blue-950 hover:bg-blue-800 text-white mt-8 py-4 px-6'>Get more energy</button>
                </Link>
            </div>
        )
    }

    return (
        <div className='grid gap-4 grid-cols-3' >
            {nft?.map((nft) => (
                <div className='grid py-4 ' key={nft.metadata.id} >
                    <div className='grid py-4  '>
                    <MediaRenderer 
                     className=" rounded-3xl shadow-md"
                        src={nft.metadata.image} 
                        height="100%"
                        width="100%"
                        
                    />
                    <p className='text-white text-xl py-4 text-center'>{nft.metadata.name}</p>
                    <Web3Button
                     
                       
                        contractAddress={STAKING_ADDRESS}
                        action={() => stakeNFT(nft.metadata.id)}
                    >Boost</Web3Button>
                    </div>
                </div>
            ))}
        </div>
    );
};