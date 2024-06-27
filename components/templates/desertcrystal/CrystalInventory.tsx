import { MediaRenderer, Web3Button, useAddress, useContract } from '@thirdweb-dev/react';
import { NFT } from '@thirdweb-dev/sdk';
import { CRYSTAL_STAKING_ADDRESS, CRYSTAL_ADDRESS, REWARDS_ADDRESS, AKASHA_ADDRESS} from "../../../constants/addresses";
import Link from 'next/link';
import styles from '/styles/Home.module.css'


type Props = {
    nft: NFT[] | undefined;
};

export function CrystalInventory({ nft }: Props) {
    const address = useAddress();
    const { contract: toolContract } = useContract('0x1d012331e07179c1E49CcD877c5bE3ca23F1654e');
    const { contract: stakingContract } = useContract('0x85D7CfBDB6e65Bfcca1d9683c50c4c322a1D5366');

    async function stakeNFT(id: string) {
        if (!address) {
            return;
        }

        const isApproved = await toolContract?.erc1155.isApproved(
            address,
            CRYSTAL_STAKING_ADDRESS,
        );

        if (!isApproved) {
            await toolContract?.erc1155.setApprovalForAll(
                CRYSTAL_STAKING_ADDRESS,
                true,
            );
        }
        await stakingContract?.call("stake", [id, 1]);
    };

    if(nft?.length === 0) {
        return (
            <div className='w-max'>
                <p className='text-white text-lg py-4'>You currently have no desert crystals in your inventory.</p>
                <Link
                    href="/crystalshop"
                >
                    <button className='rounded-2xl bg-blue-950 hover:bg-blue-800 text-white mt-8 py-4 px-6'>Get more energy</button>
                </Link>
            </div>
        )
    }

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 ' >
            {nft?.map((nft) => (
                <div className='grid' key={nft.metadata.id} >
                    <div className='grid  my-4 '>
                    <MediaRenderer 
                     className=" rounded-2xl shadow-2xl"
                        src={nft.metadata.image} 
                        height="100%"
                        width="100%"
                    />
                    <p className='text-white text-xl py-4 text-center'>{nft.metadata.name}</p>
                    <Web3Button
                      className={styles.boostButton}
                       
                        contractAddress={CRYSTAL_STAKING_ADDRESS}
                        action={() => stakeNFT(nft.metadata.id)}
                    >Boost</Web3Button>
                    </div>
                </div>
            ))}
        </div>
    );
};