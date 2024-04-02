export interface ICurrency {
  name: string;
  current_price: number;
  image: string;
  id: string;
  market_cap: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  circulating_supply: number;
}

export interface ICHooseBox {
  img: JSX.Element;
  title: string;
  text: string;
}

export interface fetchCryptocurrencies {
  data: ICurrency[] | null;
  loading: boolean;
  error: boolean;
}

export interface ICoin {
  name: string;
  current_price: number;
  image: { large: string; small: string; thumb: string };
  id: string;
  market_cap: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  circulating_supply: number;
  symbol: string;
  description: { en: string };
  market_data: {
    price_change_24h: number;
    price_change_percentage_24h: number;
    current_price: { usd: number };
  };
}

export interface fetchCoin {
  data: ICoin | null;
  loading: boolean;
  error: boolean;
}
