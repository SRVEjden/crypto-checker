const mockServerData = () => {
    return "bitcoin,ethereum,tether,ripple,binancecoin,solana,usd-coin,dogecoin,cardano,tron,wrapped-bitcoin,sui,chainlink,avalanche-2,stellar,usds,the-open-network,shiba-inu,hedera-hashgraph,\n" +
        "bitcoin-cash,litecoin,polkadot,monero,pepe,dai,bittensor,aptos,uniswap,near,ondo-finance,aave,ethereum-classic,internet-computer,official-trump,render-token,vechain,polygon-ecosyst\n" +
        "em-token,cosmos,fetch-ai,filecoin,algorand,sonic-3,first-digital-usd,ethena,celestia,arbitrum,blockstack,quant-network,bonk,worldcoin-wld,nexo,maker,jupiter-exchange-solana,binance\n" +
        "-staked-sol,eos,sei-network,optimism,immutable-x,injective-protocol,binance-bridged-usdc-bnb-smart-chain,curve-dao-token,virtual-protocol,the-graph,dexe,pax-gold,polygon-bridged-us\n" +
        "dt-polygon,iota,arbitrum-bridged-wbtc-arbitrum-one,jasmycoin,floki,theta-token,raydium,lido-dao,bittorrent,helium,pudgy-penguins,gala,the-sandbox,pancakeswap-token,zcash,kaia,ether\n" +
        "eum-name-service,flow,tezos,dogwifcoin,decentraland,jito-governance-token,pendle,true-usd,pyth-network,kava,reserve-rights-token,arweave,binance-peg-dogecoin,thorchain,dydx-chain,e\n" +
        "lrond-erd-2,ecash,starknet,neo,movement,apecoin,beam-2,axie-infinity,chiliz,turbo,conflux-token,mantle-bridged-usdt-mantle,matic-network,wormhole,berachain-bera,compound-governance\n" +
        "-token,sun-token,mantra-dao,axelar,just,amp-token,kaito,binance-peg-busd,terra-luna,trust-wallet-token,ronin,polygon-bridged-wbtc-polygon-pos,superfarm,solayer,gnosis,layerzero,min\n" +
        "a-protocol,1inch,safepal,dash,golem,convex-finance,theta-fuel,kusama,syrup,zilliqa"
}

const mockDataObj = () => {
    return {
        "Bitcoin": {
            "symbol": "BTC",
            "binanceSymbol": "BTC",
            "coinGeckoId": "bitcoin",
            "coinGeckoName": "Bitcoin"
        },
        "Ethereum": {
            "symbol": "ETH",
            "binanceSymbol": "ETH",
            "coinGeckoId": "ethereum",
            "coinGeckoName": "Ethereum"
        },
        "Tether": {
            "symbol": "USDT",
            "binanceSymbol": "USDT",
            "coinGeckoId": "tether",
            "coinGeckoName": "Tether"
        },
        "XRP": {
            "symbol": "XRP",
            "binanceSymbol": "XRP",
            "coinGeckoId": "ripple",
            "coinGeckoName": "XRP"
        },
        "BNB": {
            "symbol": "BNB",
            "binanceSymbol": "BNB",
            "coinGeckoId": "binancecoin",
            "coinGeckoName": "BNB"
        },
        "Solana": {
            "symbol": "SOL",
            "binanceSymbol": "SOL",
            "coinGeckoId": "solana",
            "coinGeckoName": "Solana"
        },
        "USDC": {
            "symbol": "USDC",
            "binanceSymbol": "USDC",
            "coinGeckoId": "usd-coin",
            "coinGeckoName": "USDC"
        },
        "Dogecoin": {
            "symbol": "DOGE",
            "binanceSymbol": "DOGE",
            "coinGeckoId": "dogecoin",
            "coinGeckoName": "Dogecoin"
        },
        "Cardano": {
            "symbol": "ADA",
            "binanceSymbol": "ADA",
            "coinGeckoId": "cardano",
            "coinGeckoName": "Cardano"
        },
        "TRON": {
            "symbol": "TRX",
            "binanceSymbol": "TRX",
            "coinGeckoId": "tron",
            "coinGeckoName": "TRON"
        },
        "WrappedBitcoin": {
            "symbol": "WBTC",
            "binanceSymbol": "WBTC",
            "coinGeckoId": "wrapped-bitcoin",
            "coinGeckoName": "Wrapped Bitcoin"
        },
        "Sui": {
            "symbol": "SUI",
            "binanceSymbol": "SUI",
            "coinGeckoId": "sui",
            "coinGeckoName": "Sui"
        },
        "Chainlink": {
            "symbol": "LINK",
            "binanceSymbol": "LINK",
            "coinGeckoId": "chainlink",
            "coinGeckoName": "Chainlink"
        },
        "Avalanche": {
            "symbol": "AVAX",
            "binanceSymbol": "AVAX",
            "coinGeckoId": "avalanche-2",
            "coinGeckoName": "Avalanche"
        },
        "Stellar": {
            "symbol": "XLM",
            "binanceSymbol": "XLM",
            "coinGeckoId": "stellar",
            "coinGeckoName": "Stellar"
        },
        "USDS": {
            "symbol": "USDS",
            "binanceSymbol": "USDS",
            "coinGeckoId": "usds",
            "coinGeckoName": "USDS"
        },
        "Toncoin": {
            "symbol": "TON",
            "binanceSymbol": "TON",
            "coinGeckoId": "the-open-network",
            "coinGeckoName": "Toncoin"
        },
        "ShibaInu": {
            "symbol": "SHIB",
            "binanceSymbol": "SHIB",
            "coinGeckoId": "shiba-inu",
            "coinGeckoName": "Shiba Inu"
        },
        "Hedera": {
            "symbol": "HBAR",
            "binanceSymbol": "HBAR",
            "coinGeckoId": "hedera-hashgraph",
            "coinGeckoName": "Hedera"
        },
        "BitcoinCash": {
            "symbol": "BCH",
            "binanceSymbol": "BCH",
            "coinGeckoId": "bitcoin-cash",
            "coinGeckoName": "Bitcoin Cash"
        },
        "Litecoin": {
            "symbol": "LTC",
            "binanceSymbol": "LTC",
            "coinGeckoId": "litecoin",
            "coinGeckoName": "Litecoin"
        },
        "Polkadot": {
            "symbol": "DOT",
            "binanceSymbol": "DOT",
            "coinGeckoId": "polkadot",
            "coinGeckoName": "Polkadot"
        },
        "Monero": {
            "symbol": "XMR",
            "binanceSymbol": "XMR",
            "coinGeckoId": "monero",
            "coinGeckoName": "Monero"
        },
        "Pepe": {
            "symbol": "PEPE",
            "binanceSymbol": "PEPE",
            "coinGeckoId": "pepe",
            "coinGeckoName": "Pepe"
        },
        "Dai": {
            "symbol": "DAI",
            "binanceSymbol": "DAI",
            "coinGeckoId": "dai",
            "coinGeckoName": "Dai"
        },
        "Bittensor": {
            "symbol": "TAO",
            "binanceSymbol": "TAO",
            "coinGeckoId": "bittensor",
            "coinGeckoName": "Bittensor"
        },
        "Aptos": {
            "symbol": "APT",
            "binanceSymbol": "APT",
            "coinGeckoId": "aptos",
            "coinGeckoName": "Aptos"
        },
        "Uniswap": {
            "symbol": "UNI",
            "binanceSymbol": "UNI",
            "coinGeckoId": "uniswap",
            "coinGeckoName": "Uniswap"
        },
        "NEARProtocol": {
            "symbol": "NEAR",
            "binanceSymbol": "NEAR",
            "coinGeckoId": "near",
            "coinGeckoName": "NEAR Protocol"
        },
        "Ondo": {
            "symbol": "ONDO",
            "binanceSymbol": "ONDO",
            "coinGeckoId": "ondo-finance",
            "coinGeckoName": "Ondo"
        },
        "Aave": {
            "symbol": "AAVE",
            "binanceSymbol": "AAVE",
            "coinGeckoId": "aave",
            "coinGeckoName": "Aave"
        },
        "EthereumClassic": {
            "symbol": "ETC",
            "binanceSymbol": "ETC",
            "coinGeckoId": "ethereum-classic",
            "coinGeckoName": "Ethereum Classic"
        },
        "InternetComputer": {
            "symbol": "ICP",
            "binanceSymbol": "ICP",
            "coinGeckoId": "internet-computer",
            "coinGeckoName": "Internet Computer"
        },
        "OfficialTrump": {
            "symbol": "TRUMP",
            "binanceSymbol": "TRUMP",
            "coinGeckoId": "official-trump",
            "coinGeckoName": "Official Trump"
        },
        "Render": {
            "symbol": "RENDER",
            "binanceSymbol": "RENDER",
            "coinGeckoId": "render-token",
            "coinGeckoName": "Render"
        },
        "VeChain": {
            "symbol": "VET",
            "binanceSymbol": "VET",
            "coinGeckoId": "vechain",
            "coinGeckoName": "VeChain"
        },
        "POL(ex-MATIC)": {
            "symbol": "POL",
            "binanceSymbol": "POL",
            "coinGeckoId": "polygon-ecosystem-token",
            "coinGeckoName": "POL (ex-MATIC)"
        },
        "CosmosHub": {
            "symbol": "ATOM",
            "binanceSymbol": "ATOM",
            "coinGeckoId": "cosmos",
            "coinGeckoName": "Cosmos Hub"
        },
        "ArtificialSuperintelligenceAlliance": {
            "symbol": "FET",
            "binanceSymbol": "FET",
            "coinGeckoId": "fetch-ai",
            "coinGeckoName": "Artificial Superintelligence Alliance"
        },
        "Filecoin": {
            "symbol": "FIL",
            "binanceSymbol": "FIL",
            "coinGeckoId": "filecoin",
            "coinGeckoName": "Filecoin"
        },
        "Algorand": {
            "symbol": "ALGO",
            "binanceSymbol": "ALGO",
            "coinGeckoId": "algorand",
            "coinGeckoName": "Algorand"
        },
        "Sonic(prev.FTM)": {
            "symbol": "S",
            "binanceSymbol": "S",
            "coinGeckoId": "sonic-3",
            "coinGeckoName": "Sonic (prev. FTM)"
        },
        "FirstDigitalUSD": {
            "symbol": "FDUSD",
            "binanceSymbol": "FDUSD",
            "coinGeckoId": "first-digital-usd",
            "coinGeckoName": "First Digital USD"
        },
        "Ethena": {
            "symbol": "ENA",
            "binanceSymbol": "ENA",
            "coinGeckoId": "ethena",
            "coinGeckoName": "Ethena"
        },
        "Celestia": {
            "symbol": "TIA",
            "binanceSymbol": "TIA",
            "coinGeckoId": "celestia",
            "coinGeckoName": "Celestia"
        },
        "Arbitrum": {
            "symbol": "ARB",
            "binanceSymbol": "ARB",
            "coinGeckoId": "arbitrum",
            "coinGeckoName": "Arbitrum"
        },
        "Stacks": {
            "symbol": "STX",
            "binanceSymbol": "STX",
            "coinGeckoId": "blockstack",
            "coinGeckoName": "Stacks"
        },
        "Quant": {
            "symbol": "QNT",
            "binanceSymbol": "QNT",
            "coinGeckoId": "quant-network",
            "coinGeckoName": "Quant"
        },
        "Bonk": {
            "symbol": "BONK",
            "binanceSymbol": "BONK",
            "coinGeckoId": "bonk",
            "coinGeckoName": "Bonk"
        },
        "Worldcoin": {
            "symbol": "WLD",
            "binanceSymbol": "WLD",
            "coinGeckoId": "worldcoin-wld",
            "coinGeckoName": "Worldcoin"
        },
        "NEXO": {
            "symbol": "NEXO",
            "binanceSymbol": "NEXO",
            "coinGeckoId": "nexo",
            "coinGeckoName": "NEXO"
        },
        "Maker": {
            "symbol": "MKR",
            "binanceSymbol": "MKR",
            "coinGeckoId": "maker",
            "coinGeckoName": "Maker"
        },
        "Jupiter": {
            "symbol": "JUP",
            "binanceSymbol": "JUP",
            "coinGeckoId": "jupiter-exchange-solana",
            "coinGeckoName": "Jupiter"
        },
        "BinanceStakedSOL": {
            "symbol": "BNSOL",
            "binanceSymbol": "BNSOL",
            "coinGeckoId": "binance-staked-sol",
            "coinGeckoName": "Binance Staked SOL"
        },
        "EOS": {
            "symbol": "EOS",
            "binanceSymbol": "EOS",
            "coinGeckoId": "eos",
            "coinGeckoName": "EOS"
        },
        "Sei": {
            "symbol": "SEI",
            "binanceSymbol": "SEI",
            "coinGeckoId": "sei-network",
            "coinGeckoName": "Sei"
        },
        "Optimism": {
            "symbol": "OP",
            "binanceSymbol": "OP",
            "coinGeckoId": "optimism",
            "coinGeckoName": "Optimism"
        },
        "Immutable": {
            "symbol": "IMX",
            "binanceSymbol": "IMX",
            "coinGeckoId": "immutable-x",
            "coinGeckoName": "Immutable"
        },
        "Injective": {
            "symbol": "INJ",
            "binanceSymbol": "INJ",
            "coinGeckoId": "injective-protocol",
            "coinGeckoName": "Injective"
        },
        "BinanceBridgedUSDC(BNBSmartChain)": {
            "symbol": "USDC",
            "binanceSymbol": "USDC",
            "coinGeckoId": "binance-bridged-usdc-bnb-smart-chain",
            "coinGeckoName": "Binance Bridged USDC (BNB Smart Chain)"
        },
        "CurveDAO": {
            "symbol": "CRV",
            "binanceSymbol": "CRV",
            "coinGeckoId": "curve-dao-token",
            "coinGeckoName": "Curve DAO"
        },
        "VirtualsProtocol": {
            "symbol": "VIRTUAL",
            "binanceSymbol": "VIRTUAL",
            "coinGeckoId": "virtual-protocol",
            "coinGeckoName": "Virtuals Protocol"
        },
        "TheGraph": {
            "symbol": "GRT",
            "binanceSymbol": "GRT",
            "coinGeckoId": "the-graph",
            "coinGeckoName": "The Graph"
        },
        "DeXe": {
            "symbol": "DEXE",
            "binanceSymbol": "DEXE",
            "coinGeckoId": "dexe",
            "coinGeckoName": "DeXe"
        },
        "PAXGold": {
            "symbol": "PAXG",
            "binanceSymbol": "PAXG",
            "coinGeckoId": "pax-gold",
            "coinGeckoName": "PAX Gold"
        },
        "PolygonBridgedUSDT(Polygon)": {
            "symbol": "USDT",
            "binanceSymbol": "USDT",
            "coinGeckoId": "polygon-bridged-usdt-polygon",
            "coinGeckoName": "Polygon Bridged USDT (Polygon)"
        },
        "IOTA": {
            "symbol": "IOTA",
            "binanceSymbol": "IOTA",
            "coinGeckoId": "iota",
            "coinGeckoName": "IOTA"
        },
        "ArbitrumBridgedWBTC(ArbitrumOne)": {
            "symbol": "WBTC",
            "binanceSymbol": "WBTC",
            "coinGeckoId": "arbitrum-bridged-wbtc-arbitrum-one",
            "coinGeckoName": "Arbitrum Bridged WBTC (Arbitrum One)"
        },
        "JasmyCoin": {
            "symbol": "JASMY",
            "binanceSymbol": "JASMY",
            "coinGeckoId": "jasmycoin",
            "coinGeckoName": "JasmyCoin"
        },
        "FLOKI": {
            "symbol": "FLOKI",
            "binanceSymbol": "FLOKI",
            "coinGeckoId": "floki",
            "coinGeckoName": "FLOKI"
        },
        "ThetaNetwork": {
            "symbol": "THETA",
            "binanceSymbol": "THETA",
            "coinGeckoId": "theta-token",
            "coinGeckoName": "Theta Network"
        },
        "Raydium": {
            "symbol": "RAY",
            "binanceSymbol": "RAY",
            "coinGeckoId": "raydium",
            "coinGeckoName": "Raydium"
        },
        "LidoDAO": {
            "symbol": "LDO",
            "binanceSymbol": "LDO",
            "coinGeckoId": "lido-dao",
            "coinGeckoName": "Lido DAO"
        },
        "BitTorrent": {
            "symbol": "BTT",
            "binanceSymbol": "BTT",
            "coinGeckoId": "bittorrent",
            "coinGeckoName": "BitTorrent"
        },
        "Helium": {
            "symbol": "HNT",
            "binanceSymbol": "HNT",
            "coinGeckoId": "helium",
            "coinGeckoName": "Helium"
        },
        "PudgyPenguins": {
            "symbol": "PENGU",
            "binanceSymbol": "PENGU",
            "coinGeckoId": "pudgy-penguins",
            "coinGeckoName": "Pudgy Penguins"
        },
        "GALA": {
            "symbol": "GALA",
            "binanceSymbol": "GALA",
            "coinGeckoId": "gala",
            "coinGeckoName": "GALA"
        },
        "TheSandbox": {
            "symbol": "SAND",
            "binanceSymbol": "SAND",
            "coinGeckoId": "the-sandbox",
            "coinGeckoName": "The Sandbox"
        },
        "PancakeSwap": {
            "symbol": "CAKE",
            "binanceSymbol": "CAKE",
            "coinGeckoId": "pancakeswap-token",
            "coinGeckoName": "PancakeSwap"
        },
        "Zcash": {
            "symbol": "ZEC",
            "binanceSymbol": "ZEC",
            "coinGeckoId": "zcash",
            "coinGeckoName": "Zcash"
        },
        "Kaia": {
            "symbol": "KAIA",
            "binanceSymbol": "KAIA",
            "coinGeckoId": "kaia",
            "coinGeckoName": "Kaia"
        },
        "EthereumNameService": {
            "symbol": "ENS",
            "binanceSymbol": "ENS",
            "coinGeckoId": "ethereum-name-service",
            "coinGeckoName": "Ethereum Name Service"
        },
        "Flow": {
            "symbol": "FLOW",
            "binanceSymbol": "FLOW",
            "coinGeckoId": "flow",
            "coinGeckoName": "Flow"
        },
        "Tezos": {
            "symbol": "XTZ",
            "binanceSymbol": "XTZ",
            "coinGeckoId": "tezos",
            "coinGeckoName": "Tezos"
        },
        "dogwifhat": {
            "symbol": "WIF",
            "binanceSymbol": "WIF",
            "coinGeckoId": "dogwifcoin",
            "coinGeckoName": "dogwifhat"
        },
        "Decentraland": {
            "symbol": "MANA",
            "binanceSymbol": "MANA",
            "coinGeckoId": "decentraland",
            "coinGeckoName": "Decentraland"
        },
        "Jito": {
            "symbol": "JTO",
            "binanceSymbol": "JTO",
            "coinGeckoId": "jito-governance-token",
            "coinGeckoName": "Jito"
        },
        "Pendle": {
            "symbol": "PENDLE",
            "binanceSymbol": "PENDLE",
            "coinGeckoId": "pendle",
            "coinGeckoName": "Pendle"
        },
        "TrueUSD": {
            "symbol": "TUSD",
            "binanceSymbol": "TUSD",
            "coinGeckoId": "true-usd",
            "coinGeckoName": "TrueUSD"
        },
        "PythNetwork": {
            "symbol": "PYTH",
            "binanceSymbol": "PYTH",
            "coinGeckoId": "pyth-network",
            "coinGeckoName": "Pyth Network"
        },
        "Kava": {
            "symbol": "KAVA",
            "binanceSymbol": "KAVA",
            "coinGeckoId": "kava",
            "coinGeckoName": "Kava"
        },
        "ReserveRights": {
            "symbol": "RSR",
            "binanceSymbol": "RSR",
            "coinGeckoId": "reserve-rights-token",
            "coinGeckoName": "Reserve Rights"
        },
        "Arweave": {
            "symbol": "AR",
            "binanceSymbol": "AR",
            "coinGeckoId": "arweave",
            "coinGeckoName": "Arweave"
        },
        "Binance-PegDogecoin": {
            "symbol": "DOGE",
            "binanceSymbol": "DOGE",
            "coinGeckoId": "binance-peg-dogecoin",
            "coinGeckoName": "Binance-Peg Dogecoin"
        },
        "THORChain": {
            "symbol": "RUNE",
            "binanceSymbol": "RUNE",
            "coinGeckoId": "thorchain",
            "coinGeckoName": "THORChain"
        },
        "dYdX": {
            "symbol": "DYDX",
            "binanceSymbol": "DYDX",
            "coinGeckoId": "dydx-chain",
            "coinGeckoName": "dYdX"
        },
        "MultiversX": {
            "symbol": "EGLD",
            "binanceSymbol": "EGLD",
            "coinGeckoId": "elrond-erd-2",
            "coinGeckoName": "MultiversX"
        },
        "eCash": {
            "symbol": "XEC",
            "binanceSymbol": "XEC",
            "coinGeckoId": "ecash",
            "coinGeckoName": "eCash"
        },
        "Starknet": {
            "symbol": "STRK",
            "binanceSymbol": "STRK",
            "coinGeckoId": "starknet",
            "coinGeckoName": "Starknet"
        },
        "NEO": {
            "symbol": "NEO",
            "binanceSymbol": "NEO",
            "coinGeckoId": "neo",
            "coinGeckoName": "NEO"
        },
        "Movement": {
            "symbol": "MOVE",
            "binanceSymbol": "MOVE",
            "coinGeckoId": "movement",
            "coinGeckoName": "Movement"
        },
        "ApeCoin": {
            "symbol": "APE",
            "binanceSymbol": "APE",
            "coinGeckoId": "apecoin",
            "coinGeckoName": "ApeCoin"
        },
        "Beam": {
            "symbol": "BEAM",
            "binanceSymbol": "BEAM",
            "coinGeckoId": "beam-2",
            "coinGeckoName": "Beam"
        },
        "AxieInfinity": {
            "symbol": "AXS",
            "binanceSymbol": "AXS",
            "coinGeckoId": "axie-infinity",
            "coinGeckoName": "Axie Infinity"
        },
        "Chiliz": {
            "symbol": "CHZ",
            "binanceSymbol": "CHZ",
            "coinGeckoId": "chiliz",
            "coinGeckoName": "Chiliz"
        },
        "Turbo": {
            "symbol": "TURBO",
            "binanceSymbol": "TURBO",
            "coinGeckoId": "turbo",
            "coinGeckoName": "Turbo"
        },
        "Conflux": {
            "symbol": "CFX",
            "binanceSymbol": "CFX",
            "coinGeckoId": "conflux-token",
            "coinGeckoName": "Conflux"
        },
        "MantleBridgedUSDT(Mantle)": {
            "symbol": "USDT",
            "binanceSymbol": "USDT",
            "coinGeckoId": "mantle-bridged-usdt-mantle",
            "coinGeckoName": "Mantle Bridged USDT (Mantle)"
        },
        "Polygon": {
            "symbol": "MATIC",
            "binanceSymbol": "MATIC",
            "coinGeckoId": "matic-network",
            "coinGeckoName": "Polygon"
        },
        "Wormhole": {
            "symbol": "W",
            "binanceSymbol": "W",
            "coinGeckoId": "wormhole",
            "coinGeckoName": "Wormhole"
        },
        "Berachain": {
            "symbol": "BERA",
            "binanceSymbol": "BERA",
            "coinGeckoId": "berachain-bera",
            "coinGeckoName": "Berachain"
        },
        "Compound": {
            "symbol": "COMP",
            "binanceSymbol": "COMP",
            "coinGeckoId": "compound-governance-token",
            "coinGeckoName": "Compound"
        },
        "SunToken": {
            "symbol": "SUN",
            "binanceSymbol": "SUN",
            "coinGeckoId": "sun-token",
            "coinGeckoName": "Sun Token"
        },
        "MANTRA": {
            "symbol": "OM",
            "binanceSymbol": "OM",
            "coinGeckoId": "mantra-dao",
            "coinGeckoName": "MANTRA"
        },
        "Axelar": {
            "symbol": "AXL",
            "binanceSymbol": "AXL",
            "coinGeckoId": "axelar",
            "coinGeckoName": "Axelar"
        },
        "JUST": {
            "symbol": "JST",
            "binanceSymbol": "JST",
            "coinGeckoId": "just",
            "coinGeckoName": "JUST"
        },
        "Amp": {
            "symbol": "AMP",
            "binanceSymbol": "AMP",
            "coinGeckoId": "amp-token",
            "coinGeckoName": "Amp"
        },
        "KAITO": {
            "symbol": "KAITO",
            "binanceSymbol": "KAITO",
            "coinGeckoId": "kaito",
            "coinGeckoName": "KAITO"
        },
        "Binance-PegBUSD": {
            "symbol": "BUSD",
            "binanceSymbol": "BUSD",
            "coinGeckoId": "binance-peg-busd",
            "coinGeckoName": "Binance-Peg BUSD"
        },
        "TerraLunaClassic": {
            "symbol": "LUNC",
            "binanceSymbol": "LUNC",
            "coinGeckoId": "terra-luna",
            "coinGeckoName": "Terra Luna Classic"
        },
        "TrustWallet": {
            "symbol": "TWT",
            "binanceSymbol": "TWT",
            "coinGeckoId": "trust-wallet-token",
            "coinGeckoName": "Trust Wallet"
        },
        "Ronin": {
            "symbol": "RON",
            "binanceSymbol": "RON",
            "coinGeckoId": "ronin",
            "coinGeckoName": "Ronin"
        },
        "PolygonBridgedWBTC(PolygonPOS)": {
            "symbol": "WBTC",
            "binanceSymbol": "WBTC",
            "coinGeckoId": "polygon-bridged-wbtc-polygon-pos",
            "coinGeckoName": "Polygon Bridged WBTC (Polygon POS)"
        },
        "SuperVerse": {
            "symbol": "SUPER",
            "binanceSymbol": "SUPER",
            "coinGeckoId": "superfarm",
            "coinGeckoName": "SuperVerse"
        },
        "Solayer": {
            "symbol": "LAYER",
            "binanceSymbol": "LAYER",
            "coinGeckoId": "solayer",
            "coinGeckoName": "Solayer"
        },
        "Gnosis": {
            "symbol": "GNO",
            "binanceSymbol": "GNO",
            "coinGeckoId": "gnosis",
            "coinGeckoName": "Gnosis"
        },
        "LayerZero": {
            "symbol": "ZRO",
            "binanceSymbol": "ZRO",
            "coinGeckoId": "layerzero",
            "coinGeckoName": "LayerZero"
        },
        "MinaProtocol": {
            "symbol": "MINA",
            "binanceSymbol": "MINA",
            "coinGeckoId": "mina-protocol",
            "coinGeckoName": "Mina Protocol"
        },
        "1inch": {
            "symbol": "1INCH",
            "binanceSymbol": "1INCH",
            "coinGeckoId": "1inch",
            "coinGeckoName": "1inch"
        },
        "SafePal": {
            "symbol": "SFP",
            "binanceSymbol": "SFP",
            "coinGeckoId": "safepal",
            "coinGeckoName": "SafePal"
        },
        "Dash": {
            "symbol": "DASH",
            "binanceSymbol": "DASH",
            "coinGeckoId": "dash",
            "coinGeckoName": "Dash"
        },
        "Golem": {
            "symbol": "GLM",
            "binanceSymbol": "GLM",
            "coinGeckoId": "golem",
            "coinGeckoName": "Golem"
        },
        "ConvexFinance": {
            "symbol": "CVX",
            "binanceSymbol": "CVX",
            "coinGeckoId": "convex-finance",
            "coinGeckoName": "Convex Finance"
        },
        "ThetaFuel": {
            "symbol": "TFUEL",
            "binanceSymbol": "TFUEL",
            "coinGeckoId": "theta-fuel",
            "coinGeckoName": "Theta Fuel"
        },
        "Kusama": {
            "symbol": "KSM",
            "binanceSymbol": "KSM",
            "coinGeckoId": "kusama",
            "coinGeckoName": "Kusama"
        },
        "MapleFinance": {
            "symbol": "SYRUP",
            "binanceSymbol": "SYRUP",
            "coinGeckoId": "syrup",
            "coinGeckoName": "Maple Finance"
        },
        "Zilliqa": {
            "symbol": "ZIL",
            "binanceSymbol": "ZIL",
            "coinGeckoId": "zilliqa",
            "coinGeckoName": "Zilliqa"
        }
    }
}

export {mockServerData, mockDataObj};