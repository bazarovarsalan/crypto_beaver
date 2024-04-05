import img_eth from "../../../public/ethereum.png";
import img_litecoin from "../../../public/litecoin.png";
import img_polygon from "../../../public/polygon.png";
import img_usdc from "../../../public/usdc.png";
import img_usdt from "../../../public/usdt.png";
import img_shiba from "../../../public/shiba.png";
import img_beaver from "../../../public/beaver.png";

function Title() {
  return (
    <>
      <section className="title-section">
        <span className="title-container">
          <h2 className="title">
            <span className="title-word title-word-1"> TRACK </span>
            <span className="title-word title-word-2"> AND </span>
            <span className="title-word title-word-3"> TRADE </span>
            <span className="title-word title-word-4"> CRYPTO CURRENIES </span>
          </h2>
        </span>
        <div className="animation-container">
          <img className="img__eth" src={img_eth} alt="img" />
          <img className="img__litecoin" src={img_litecoin} alt="img" />
          <img className="img__polygon" src={img_polygon} alt="img" />
          <img className="img__usdc" src={img_usdc} alt="img" />
          <img className="img__usdt" src={img_usdt} alt="img" />
          <img className="img__shiba" src={img_shiba} alt="img" />

          <img
            className="animation__beaver"
            src={img_beaver}
            alt="beaver_img"
          />
        </div>
      </section>
    </>
  );
}

export default Title;
