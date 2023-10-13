import Place from "./Place";

const PlaceCard = (props) => {
  function handleCardClick(event) {
    console.log(event);
  }
  //클릭시 내부요소반환하는 현상 고치기
  return (
    <div className="place-card" onClick={handleCardClick}>
      <Place id={props.id} placeList={props.placeList} />
    </div>
  );
};

export default PlaceCard;
