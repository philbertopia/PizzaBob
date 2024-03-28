import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = 'polygon';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<ThirdwebProvider
				activeChain={activeChain}
				clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
			>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</ThirdwebProvider>
		</ChakraProvider>
	);
}

export default MyApp;
