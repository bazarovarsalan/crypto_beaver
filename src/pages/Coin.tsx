import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { fetchCoin } from "../types/types";
import DOMPurify from "dompurify";
import Loading from "../components/loading/Loading";

function Coin() {
  const { coinId } = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
  const { data, loading, error }: fetchCoin = useFetch(url);

  function numberWithCommas(x: string | number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (error) {
    <div>Oops Something went wrong</div>;
  }

  return (
    <section id="market" className="market">
      {loading ? (
        <Loading />
      ) : (
        <div className="coin__container">
          <div className="coin__image">
            <img src={data?.image?.large}></img>
            <h3 className="coin__image-name">{data?.name}</h3>
          </div>
          <div className="coin__info">
            <div className="coin-info__up">
              <div className="coin-content__text-side__24h">
                <span>24h Change:</span>
                <p
                  className={
                    data && data?.market_data?.price_change_24h >= 0
                      ? "coin-info-price-change24 green-text"
                      : "coin-info-price-change24 red-text"
                  }
                >
                  {data && data.market_data
                    ? data.market_data.price_change_percentage_24h.toFixed(2) +
                      "%"
                    : ""}
                </p>
              </div>
              <div className="coin-content__text-side__current">
                <span>Price:</span>
                <p className={"green-text"}>
                  {data && data.market_data
                    ? "$" +
                      numberWithCommas(
                        data.market_data.current_price.usd.toFixed(2)
                      )
                    : null}
                </p>
              </div>
              <div className="coin-content__text-side__symbol">
                <p>Symbol:</p>
                <span>{data && data.symbol.toUpperCase()}</span>
              </div>
            </div>
            <span className="coin-info__description">
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    data?.description ? data.description.en : ""
                  ),
                }}
              ></p>
            </span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Coin;
