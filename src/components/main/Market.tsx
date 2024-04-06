import { useState } from "react";
import "../../App.css";
import Loading from "../loading/Loading";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router";
import { ICurrency } from "../../types/types";
import { Link } from "react-router-dom";
import ErrorComponent from "../ErrorComponent";

function Market() {
  const [page, setPage] = useState<number>(1);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false
  `;
  // const url = `api/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false
  // `;

  const { data, loading, error } = useFetch<ICurrency[]>(url);
  const navigate = useNavigate();

  const toPagination = (event: React.MouseEvent) => {
    const { innerText } = event.target as HTMLElement;
    setPage(Number(innerText));
  };

  function priceTransform(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (error) {
    return <ErrorComponent repeatRequest={() => setPage(1)} />;
  }

  const buttons = [1, 2, 3, 4, 5];

  return (
    <>
      <section id="market" className="market">
        {loading ? (
          <Loading />
        ) : (
          <table className="market__table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Change(24h)</th>
                <th>Market Cap</th>
                <th>Circulation Supply</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item: ICurrency) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.market_cap_rank}</td>
                      <td
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate(`${item.id}`)}
                      >
                        <img
                          className="market__table market-img"
                          src={item.image}
                        ></img>
                        <div className="div"> {item.name}</div>
                      </td>
                      <td>$ {item.current_price}</td>
                      <td
                        className={
                          item.market_cap_change_percentage_24h > 0
                            ? "green-text"
                            : "red-text"
                        }
                      >
                        {item.market_cap_change_percentage_24h.toFixed(2)} %
                      </td>
                      <td>$ {priceTransform(item.market_cap)}</td>
                      <td>$ {priceTransform(item.circulating_supply)}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
        {loading ? (
          <Loading />
        ) : (
          <div className="market__table-pagination">
            {buttons.map((button) => {
              return (
                <Link to={"#market"} key={"button" + button}>
                  <button
                    onClick={toPagination}
                    className={
                      page === button
                        ? "market__table-pagination_button__active"
                        : "market__table-pagination_button"
                    }
                  >
                    {button}
                  </button>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}

export default Market;
