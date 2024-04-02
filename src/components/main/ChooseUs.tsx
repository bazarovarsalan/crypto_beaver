import ChooseBox from "./ChooseBox";
import BitHand from "../../../public/choose-main.png";
import {
  IconChecklist,
  IconDeviceMobileMessage,
  IconMoneybag,
  IconPencilBolt,
  IconStack,
  IconWallet,
} from "@tabler/icons-react";

function ChooseUs() {
  return (
    <>
      <section id="choose_us" className="chooseUs">
        <div className="chooseUs__container">
          <h5 className="chooseUs__title">
            <span className="chooseUs-word title-word-4">WHY CHOOSE US</span>
          </h5>
          <div className="chooseUs-container__content">
            <div className="chooseUs-container__content__1">
              <ChooseBox
                img={<IconWallet />}
                title="CONNECT YOUR WALLET"
                text="Use Trust Wallet, Metamask or to connect to the app."
              />
              <ChooseBox
                img={<IconPencilBolt />}
                title="SELECT YOUR QUANTITY"
                text="Upload your crypto and set a title, description and price."
              />
              <ChooseBox
                img={<IconChecklist />}
                title="CONFIRM TRANSACTION"
                text="Earn by selling your crypto on our marketplace."
              />
            </div>
            <div className="choose-container__content__2">
              <img
                className="choose-container_img"
                src={BitHand}
                alt="hand_img"
              />
            </div>
            <div className="choose-container__content__3">
              <ChooseBox
                img={<IconDeviceMobileMessage />}
                title="RECEIVE YOUR OWN NFTS"
                text="Invest all your crypto at one place on one platform."
              />
              <ChooseBox
                img={<IconMoneybag />}
                title="TAKE A MARKET
                  TO SELL"
                text="Discover, collect the right crypto collections to buy or sell."
              />
              <ChooseBox
                img={<IconStack />}
                title="DRIVE YOUR COLLECTION"
                text="We make it easy to Discover, Invest and manage."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
