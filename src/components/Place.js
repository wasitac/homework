
const Place = (props) => {
  // 해당 장소 객체를 반환
  var place = null;
  for (let i = 0; i < props.placeList.length; i++) {
    if (props.placeList[i].id === props.id) {
      place = props.placeList[i];
    }
  }

  return (
    <div placeid={place.id}>
      <h2>{place.name}</h2>
      <h3>{place.category}</h3>
    </div>
  );
};

export default Place;
