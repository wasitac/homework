import Place from "./Place";

const PlaceCard = (props) => {
  return(
    <div className="place-card">
      <Place id={props.id} placeList={props.placeList}/>
    </div>
  )
};

export default PlaceCard;
