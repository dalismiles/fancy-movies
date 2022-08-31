import MainCard from "../MainCard";
import "./index.css";

const TopRatedList = ({ cardData }) => {
  return (
    <div className="TopRatedList">
      {cardData.map((item, index) => (
        <MainCard
          cardData={item}
          cardStyle={{ width: "400px", height: "150px", fontSize: "16px" }}
          key={index}
        />
      ))}
    </div>
  );
};

export default TopRatedList;
