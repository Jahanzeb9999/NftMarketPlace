import '../styles/globals.css'
import Link from 'next/link'

function Marketplace({ Component, pageProps }) {
  return (
   <div className="border-b p-6 bg-gradient-to-b from-purple-600">
    <nav className="border-b p-6">
      <p className="text-4xl font-bold flex justify-center text-cyan-200">
        NFT Marketplace
      </p>
      <div className="flex justify-center p-8">
        <Link href="/" className="mr-6 text-xl text-cyan-200">
          Home
        </Link>
        <Link href="/createNFT" className="mr-6 text-xl text-cyan-200">
          Sell your nfts
        </Link>
        <Link href="/myNFTs" className="mr-6 text-xl text-cyan-200">
          MY NFTs
        </Link>
        <Link href="/dashboard" className="mr-6 text-xl text-cyan-200">
          Dashboard
        </Link>
      </div>
    </nav>
    <Component{...pageProps}/>

   </div>
    
  )
}

export default Marketplace;