import MainCard from "../MainCard";
import "./index.css";

const UpcomingList = ({ cardData }) => {
  return (
    <div className="UpcomingList">
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

export default UpcomingList;
