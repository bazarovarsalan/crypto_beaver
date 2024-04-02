import "../../App.css";
import { ICHooseBox } from "../../types/types";

const ChooseBox = ({ img, title, text }: ICHooseBox) => {
  return (
    <div className="choose-box">
      <i>{img}</i>
      <div className="choose-box__text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChooseBox;
