import Card from "./Card";

import "./Main.scss";
import data from "../../helper/data";

const Main = () => {
  return (
    <div>
      <Card data={data} />
    </div>
  );
};

export default Main;
