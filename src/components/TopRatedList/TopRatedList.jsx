import MainCard from "../MainCard";
import "./index.css";

const TopRatedList = ({ cardData }) => {
  return (
    <div className="TopRated__Container">
      <div className="TopRated__List">
        {cardData.map((item, index) => (
          <MainCard
            cardData={item}
            cardStyle={{ width: "200px", height: "310px", fontSize: "16px" }}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRatedList;
