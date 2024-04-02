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
          <img
            className="img__eth"
            src="../../../public/ethereum.png"
            alt="img"
          />
          <img
            className="img__litecoin"
            src="../../../public/litecoin.png"
            alt="img"
          />
          <img
            className="img__polygon"
            src="../../../public/polygon.png"
            alt="img"
          />
          <img className="img__usdc" src="../../../public/usdc.png" alt="img" />
          <img className="img__usdt" src="../../../public/usdt.png" alt="img" />
          <img
            className="img__shiba"
            src="../../../public/shiba.png"
            alt="img"
          />

          <img
            className="animation__beaver"
            src="../../../public/beaver.png"
            alt="beaver_img"
          />
        </div>
      </section>
    </>
  );
}

export default Title;
