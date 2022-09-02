import MainCard from "../MainCard";
import "./index.css";

const UpcomingList = ({ cardData }) => {
  return (
    <div className="Upcoming__Container">
      <div className="Upcoming__List">
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

export default UpcomingList;
