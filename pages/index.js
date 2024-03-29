import { ConnectWallet, useAddress, useClaimToken, useContract, useTokenBalance, useTokenSupply } from "@thirdweb-dev/react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'


export default function Home() {
  const [amount, setAmount ] = useState("");
  const address = useAddress();
  const contractAddress = "0x9bB8E8138Bfb87831fB0B2Cb26B6E3d494976c0C"
  const { contract } = useContract(contractAddress);
  const { data: tokenSupply } = useTokenSupply(contract);
  const { data: tokenBalance } = useTokenBalance(contract, address);
  const { mutate: claimTokens, isLoading } = useClaimToken(contract)

  return (
    <div>
      <section className="block w-full lg:flex ">
        <div className="w-full lg:w-2/3 lg:mb-10 flex flex-col justify-end">
          <div className="flex mx-5 my-10">
            <div className="w-2/3">
              <h1 className="text-5xl font-bold">PIZZABOB</h1>
              <h1 className="text-2xl font-bold">$ZBOB</h1>
              <p className="mt-3">In $ZBOB we Trust</p>
            </div>
            <div className="flex w-1/3">
              <Image 
                src="/images/zbob-logo-pizzabob.png" 
                alt="PizzaBob" 
                width={200} 
                height={200}
                className="mx-auto scale-x-[-1]"
              />
            </div>
          </div>
          <div className="mx-5 rounded-xl overflow-hidden">
            <Image  src="/images/zbob-hero-2.png" alt="" width={1000} height={1000} />
          </div>
        </div>

        <div className='p-5 mx-5 my-10 bg-yellow-50 rounded-xl border-2 border-black lg:w-1/3'>
          {address ? (
            <>
              <div className="flex flex-col w-full text-center text-4xl font-bold mb-5">
                <div className="flex justify-center">
                  <Image src="/images/zbob-logo-buy.png" alt="" width={300} height={30}/>
                </div>
              </div>

              
              {/* <p>Your address: {address}</p> */}
              {/* <p>Total token supply: {tokenSupply?.displayValue} {tokenSupply?.symbol}</p> */}
              <p>Presale Phase 1</p>
              <p className="mb-5">1 $ZBOB = 0.0001 Matic</p>
              <p>NOT CURRENTLY FOR SALE</p>
              <p className="mb-5">Your token supply: {tokenBalance?.displayValue} {tokenBalance?.symbol}</p>
              <h1 className="mb-2 text-xl font-semibold">Claim Tokens:</h1>
              <div className="flex flex-col justify-center">
                <input 
                  type="number" 
                  value={amount} 
                  onChange={e => setAmount(e.target.value)}
                  className="rounded-xl border-2 border-black mb-5 p-2 text-2xl font-semibold"
                  />
                <button 
                  onClick={() => claimTokens({amount, to: address}, {onSuccess: () => setAmount('')})} 
                  disabled={isLoading}
                  className="bg-black text-2xl font-semibold text-white rounded-xl p-5"
                  >
                  CLAIM {amount} {tokenBalance?.symbol}
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <p>Connect your wallet</p>
              <ConnectWallet className="bg-black text-white" />
            </div>
          )}
        </div>
      </section>

      <section className="lg:flex">
        <div className='p-5 mx-5 my-5 bg-yellow-50 rounded-xl border-2 border-black'>
          <div>
            <h1 className="text-4xl font-bold mb-5">Bobenomics</h1>
          </div>
          
          <div className="mb-5">
            <p className="mb-3">Contract Address: 0x9bB8E8138Bfb87831fB0B2Cb26B6E3d494976c0C</p>
            <p className="mb-3">Total supply: 1,000,000,000 $ZBOB</p>
            <p>Team 5%</p>
            <p>Presale: 10%</p>
            <p>Airdrop: 10%</p>
            <p>Liquidity: 75%</p>
          </div>
        </div>
      
        <div className="px-5 flex flex-col justify-center my-5">
          <div>
            <Image className="w-full" src="/images/zbob-toppings.png" alt="Toppings" width={400} height={200}  />
          </div>
        </div>
      </section>

      <section>
        <h1 className="px-5 text-4xl font-semibold">Roadmap</h1>
        <div className="lg:flex">
          <div className='border-2 border-black rounded-xl p-5 mx-5 my-5 bg-yellow-50 lg:w-1/3'>
            <div className="flex justify-center mb-5">
              <h1 className="text-2xl font-bold">PHASE 1</h1>
            </div>
            <div className="mb-10">
              <p className="font-semibold mb-1">Community Building</p>
              <ul class="list-disc ml-4 mb-5">
                <li>Token Launch</li>
                <li>Website Launch</li>
                <li>Comprehensive Marketing & Promotion</li>
                <li>1000+ $ZBOB wallet holders</li>
                <li>Exciting Airdrops (Details Coming Soon!)</li>
              </ul>
              <p><span className="font-semibold">Join the PizzaBob Family!</span> Connect with us on X and Telegram. Become an early investor in $ZBOB and unlock exclusive benefits like airdrops, discounts, NFTs, and governance rights.</p>
            </div>
          </div>

          <div className='border-2 border-black rounded-xl p-5 mx-5 my-5 bg-yellow-50 lg:w-1/3'>
            <div className="flex justify-center mb-5">
              <h1 className="text-2xl font-bold">PHASE 2</h1>
            </div>
            <div className="mb-10">
              <p className="font-semibold mb-1">Presale</p>
              <p className="">Get in early on $ZBOB. Secure your ZBOB early to get the best price and qualify for airdrops.</p>
              <ul class="list-disc ml-6">
                <li>Secure Your Spot: 3 Public Presale Phases</li>
                <li>Increased Marketing & Community Growth</li>
                <li>Exclusive Benefits for Early Investors</li>
              </ul>
            </div>
            
          </div>

          <div className='border-2 border-black rounded-xl p-5 mx-5 mb-10 bg-yellow-50 lg:w-1/3 lg:mt-5 lg:mb-5'>
            <div className="flex justify-center mb-5">
              <h1 className="text-2xl font-bold">PHASE 3</h1>
            </div>
            <div>
              <p className="font-semibold mb-1">Launch & Listing</p>
              <ul class="list-disc ml-6">
                <li>Official Token Launch & Listing</li>
                <li>Exchange Listings & Increased Liquidity</li>
                <li>Unlock Exciting Utility for $ZBOB</li>
                <li>Continued Community Growth & Engagement</li>
                <li>PizzaBob NFT Launch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" w-full flex justify-center gap-8 lg:mt-10">
            <Link href="/"><Image src="/images/twitter.png" alt="Twitter button" width={50} height={50} /></Link>
            <Link href="/"><Image src="/images/telegram.png" alt="Telegram button" width={50} height={50} /></Link>
            <Link href="/"><Image src="/images/polygon-button.png" alt="Telegram button" width={50} height={50} /></Link>
            <Link href="/"><Image src="/images/uniswap-button.png" alt="Telegram button" width={50} height={50} /></Link>
          </div>
      </section>

      

      <section>
        <h1 className="px-5 text-4xl font-semibold mt-10">About</h1>
        <div className='p-5 rounded-xl'>
          <Accordion className="lg:flex " defaultIndex={[0]} allowMultiple>

            <div className="lg:w-1/2">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' className="font-bold text-xl">
                      $ZBOB
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div>
                    <h1 className="font-semibold">Extra Sponge & Extra Cheese</h1>
                    <p className="mb-2">
                      Ever dreamt of a memecoin that&apos;s more exciting than a Krabby Pizza on National Pizza Day? Look no further than PIZZABOB! We&apos;re the ultimate crypto-culinary fusion, bringing the delicious chaos of pizza memes to the Polygon Network. 
                    </p>
                    <p className="mb-2">
                      $ZBOB is for the degens, the dreamers, the pizza enthusiasts who crave a slice of the crypto future. We&apos;re talking fast transactions, a passionate community, and a roadmap that&apos;s hotter than a fresh-out-the-oven pepperoni pie.
                    </p>
                    <p className="mb-5">
                      Get your $ZBOB fix through our presale or wait to snag it on a DEX or exchange. But that&apos;s not all! We&apos;ve got a whole NFT collection and even a potential game in the works. We might even throw in a DAO for good measure, because community is our secret ingredient.
                    </p>
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' className="font-bold text-xl">
                        $ZBOB Community 
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <div>
                      <h1 className="font-semibold">PizzaBob Party Time!</h1>
                      <p className="mb-2">Ready to dive deeper into the world of $ZBOB and connect with a community as awesome as a Pizza & SpongeBob synthesized in a one place.</p>
                      <p className="mb-2">Telegram: This is where the party happens! Chat with fellow $ZBOB holders, get the latest updates straight from the developers, and participate in hilarious meme contests.</p>
                      <p className="mb-5">
                        Twitter: Follow us on Twitter for all things $ZBOB: project announcements, airdrop alerts, and a healthy dose of PizzaBob themed fun.
                      </p>
                      <div className=" w-full flex justify-center gap-8">
                        <Link href="/"><Image src="/images/twitter.png" alt="Twitter button" width={50} height={50} /></Link>
                        <Link href="/"><Image src="/images/telegram.png" alt="Telegram button" width={50} height={50} /></Link>
                      </div>
                    </div>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' className="font-bold text-xl">
                        $ZBOB Presale 
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  <div>
                    <h1 className="font-semibold mb-2">Snag Your Slice of $ZBOB in the Presale!</h1>
                    <p className="mb-2">Calling all pizza enthusiasts and crypto degens! The $ZBOB presale is your chance to be an early adopter and fuel the growth. Here&apos;s how it works:</p>
                    <h1 className="font-semibold mb-2">The Presale Party</h1>
                    <p className="mb-5">The $ZBOB presale will be split into 3 phases, with a total fundraising target of $50,000. These funds will be used to create a rock-solid liquidity pool, ensuring smooth trading for everyone once $ZBOB hits the market. But that&apos;s not all! We&apos;re committed to transparency and security, which is why the liquidity pool will be locked and burned after the presale concludes.</p>
                    <h1 className="font-semibold">Stay tuned for more details on each presale phase, including dates, prices, and bonus offers!</h1>
                  </div>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' className="font-bold text-xl">
                        How to Buy Presale $ZBOB 
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <div>
                      <h1 className="font-bold">1. Download a wallet or exchange</h1>
                      <p>Download a trusted cryptocurrency wallet or exchange Dapp that supports the Polygon.</p>
                    </div>
                    <div>
                      <h1 className="font-bold">2. Buy some Polygon</h1>
                      <p>Purchase desired amount of Polygon with a trusted wallet or exchange.</p>
                    </div>
                    <div>
                      <h1 className="font-bold">3. Purchace $ZBOB</h1>
                      <p>Connect funded wallet to PizzaBob Dapp. Enter the amount of $ZBOB you would like to purchase and press the &quot;Claim $ZBOB&quot; in the Buy PizzaBob section of the PizzaBob site.</p>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
            </div>

            <div className="lg:w-1/2">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' className="font-bold text-xl">
                      How to Buy $ZBOB on Uniswap
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div>
                    <p className="mb-5">Not avaliable on Uniswap. (Comming Soon!)</p>
                    <h1 className="font-bold">1. Download a wallet or exchange</h1>
                    <p className="mb-5">Download a trusted cryptocurrency wallet or exchange that supports the Polygon.</p>
                  </div>
                  <div>
                    <h1 className="font-bold mb-2">2. Buy some Polygon</h1>
                    <p className="mb-5">Purchase desired amount of Polygon on trusted wallet or exchange.</p>
                  </div>
                  <div>
                    <h1 className="font-bold">3. Purchace $ZBOB</h1>
                    <p>Go to Uniswap to swap Polygon for $ZBOB.</p>
                    <p className="mb-5">Use contarct address to search for $ZBOB on Uniswap.</p>
                    <p className="mb-5">Contract Address: 0x9bB8E8138Bfb87831fB0B2Cb26B6E3d494976c0C</p>
                    
                    <div className="flex justify-center gap-5">
                      <Link href="/"><Image src="/images/metamask-button.png" alt="Telegram button" width={50} height={50} /></Link>
                      <Link href="/"><Image src="/images/phantom-button.png" alt="Telegram button" width={50} height={50} /></Link>
                      <Link href="/"><Image src="/images/polygon-button.png" alt="Twitter button" width={50} height={100} /></Link>
                      <Link href="/"><Image src="/images/uniswap-button.png" alt="Twitter button" width={50} height={100} /></Link>
                      <Link href="/"><Image src="/images/coinbase-button.png" alt="Twitter button" width={50} height={100} /></Link>
                      <Link href="/"><Image src="/images/binance-button.png" alt="Twitter button" width={50} height={100} /></Link>
                    </div>
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' className="font-bold text-xl">
                      ZBOB NFT
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div>
                    <h1 className="font-bold">Zbob NFTs - Coming Soon!</h1>
                    <p className="mb-2">Being a Zbob holder grants you exclusive privileges when it comes to Zbob NFTs. You'll have the advantage of:</p>
                    <p className="mb-2"><span className="font-semibold">Early Access:</span> Zbob holders will be the first to know when the Zbob NFT collection launches, allowing you to secure your NFTs before anyone else.</p>
                    <p className="mb-2"><span className="font-semibold">Whitelist Priority:</span> Owning a $ZBob token puts you on the whitelist for the $ZBob NFT mint. This significantly increases your chances of acquiring one or more NFTs during the initial launch.</p>
                    <p><span className="font-semibold">Airdrop Opportunities:</span> $ZBob holders might be eligible for exclusive airdrops of Zbob NFTs, giving you a chance to receive them directly in your wallet without needing to participate in a public sale.</p>
                    <h1 className="font-bold mb-2 mt-5">Stay Tuned!</h1>
                    <p className="mb-5">We&apos;ll be revealing more details about the Zbob NFT collection very soon, including its features, utilities, and roadmap. Keep an eye on our official channels for all the latest updates!</p>
                    <div className=" w-full flex justify-center gap-8">
                      <Link href="/"><Image src="/images/twitter.png" alt="Twitter button" width={50} height={50} /></Link>
                      <Link href="/"><Image src="/images/telegram.png" alt="Telegram button" width={50} height={50} /></Link>
                    </div>
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' className="font-bold text-xl">
                      Polygon 
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <h1 className="font-bold mb-2">Polygon: Powering the ZBob Memecoin on a Scalable and Cost-Effective Network</h1>
                  <p className="mb-2">ZBob, the memecoin with a mission, thrives on the Polygon network, a leading Layer 2 (L2) scaling solution for Ethereum. This strategic choice empowers ZBob with several key advantages:</p>
                  <p className="mb-2"><span className="font-semibold">Blazing-Fast Transactions:</span> ZBob transactions happen in a flash on Polygon compared to the Ethereum mainnet. This translates to quicker and smoother experiences for users when sending, receiving, or interacting with ZBob tokens.</p>
                  <p className="mb-2"><span className="font-semibold">Low Transaction Fees:</span> Say goodbye to high gas fees! Transactions on Polygon cost significantly less than on Ethereum, making ZBob more accessible to a wider audience. This is especially beneficial for smaller transactions or frequent users.</p>
                  <p className="mb-2"><span className="font-semibold">Enhanced Scalability:</span> Unlike the Ethereum mainnet, which can become congested during peak usage, Polygon has a robust infrastructure designed to handle a high volume of transactions efficiently. This ensures a consistently smooth performance for the ZBob community.</p>
                  <p className="mb-2"><span className="font-semibold">Security by Ethereum:</span> While operating on a separate layer, Polygon leverages the security of the underlying Ethereum blockchain. This provides peace of mind for ZBob token holders, knowing their assets are safeguarded by a well-established security model.</p>
                  <p className="mb-2"><span className="font-semibold">Interoperability:</span> ZBob seamlessly integrates with the broader Ethereum ecosystem. This means ZBob tokens can be used in various applications and services built on Ethereum, potentially expanding their utility and fostering a vibrant ZBob ecosystem.</p>
                  <p className="mb-2"><span className="font-semibold">Environmental Considerations:</span> Polygon offers a more energy-efficient alternative to the Ethereum mainnet. This aligns with a growing focus on sustainable blockchain solutions, making ZBob more environmentally responsible.</p>
                  <p className="mb-2"><span className="font-semibold">Community Focus:</span> By choosing Polygon, ZBob demonstrates a commitment to user experience and community building. Lower fees and faster transactions create a more accessible and inclusive environment for all ZBob supporters.</p>
                  <p className="mb-5">Visit Polygon for more details and solutions.</p>
                  <div className=" w-full flex justify-center">
                      <Link href="/"><Image src="/images/polygon-button.png" alt="Twitter button" width={50} height={50} /></Link>
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' className="font-bold text-xl">
                      Uniswap 
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <h1 className="font-semibold mb-2">Uniswap: Your Gateway to Swapping Polygon for PizzaBob</h1>
                  <p className="mb-2">Uniswap is a leading decentralized exchange (DEX) built on the Ethereum blockchain (and compatible with Polygon). It allows users to swap cryptocurrencies directly with each other, without the need for a centralized intermediary. This section will explain how you can potentially swap Polygon (MATIC) for PizzaBob (PIZZA) tokens using Uniswap.</p>
                  <h1 className="font-semibold mb-2">Important note:</h1>
                  <p className="mb-5">While the information below provides a general overview, it's crucial to <span className="font-semibold">verify the official swap contract address for PizzaBob</span> before proceeding. Incorrect addresses could lead to a loss of funds. You can find this address on the official PizzaBob website or trusted sources.</p>
                  <h1 className="font-semibold mb-2 text-xl">How to Swap Polygon for $ZBOB on Uniswap</h1>
                  <h1 className="mb-2">Always double-check and research before swapping:</h1>
                  <p className="mb-2">1. <span className="font-semibold">Connect Your Wallet:</span> Visit Uniswap and connect your crypto wallet (e.g., MetaMask, WalletConnect) that holds your Polygon (MATIC) tokens.</p>
                  <p className="mb-2">2. <span className="font-semibold">Select Tokens:</span> In the swap interface, choose Polygon (MATIC) as the token you're swapping from and enter the amount you want to trade.</p>
                  <p className="mb-2">3. <span className="font-semibold">Find PizzaBob Contract:</span> In the &quot;To&quot; field, paste the verified PizzaBob contract address (obtained from official sources). Uniswap might automatically fetch the token details if the address is valid.</p>
                  <p className="mb-2">4. <span className="font-semibold">Preview Swap:</span> Uniswap will automatically estimate the amount of PizzaBob (PIZZA) tokens you&apos;ll receive based on the current market exchange rate and any associated fees.</p>
                  <p className="mb-2">5. <span className="font-semibold">Review and Confirm:</span> Carefully review the swap details (amount of MATIC swapped, estimated PizzaBob received, fees) before confirming the transaction.</p>
                  <p className="mb-2">6. <span className="font-semibold">Approve and Swap:</span> Your wallet will likely prompt you to approve the swap and pay any gas fees associated with the transaction on the Polygon network. Once approved, Uniswap will handle the exchange.</p>
                  <p className="mb-5">Visit Uniswap for more details.</p>
                  <div className=" w-full flex justify-center gap-8">
                      <Link href="/"><Image src="/images/uniswap-button.png" alt="Telegram button" width={50} height={50} /></Link>
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' className="font-bold text-xl">
                      Disclaimer 
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <h1 className="font-semibold mb-2">Use of Zbob at Your Own Risk:</h1>
                  <p className="mb-2">The development team behind Zbob (including its NFTs and memecoin) cannot be held liable for any loss of funds, assets, or damages incurred as a result of using Zbob or interacting with related services like wallets, exchanges, or smart contracts. These technologies involve inherent risks, and users are solely responsible for their actions and decisions.</p>
                  <h1 className="font-semibold mb-2">Educational and Entertainment Purposes Only:</h1>
                  <p className="mb-2">Zbob is intended for educational and entertainment purposes only. It should not be considered financial advice or a guaranteed investment opportunity. Please conduct thorough research, understand the associated risks, and consult with a qualified financial professional before making any investment decisions.</p>
                </AccordionPanel>
              </AccordionItem>
            </div>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
