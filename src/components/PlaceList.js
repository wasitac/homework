import PlaceCard from "./PlaceCard";
const PlaceList = () => {
  const placeList = [
    {
      id: 0,
      name: "금돼지식당",
      category: "고기",
      menu: { 눈꽃목살: "18,000", 본삼겹: "19,000", 껍데기: "14,000" },
    },
    {
      id: 1,
      name: "약수 순대국",
      category: "한식",
      menu: { 순대국: "10,000" },
    },
    {
      id: 2,
      name: "만포 막국수",
      category: "면",
      menu: { "물 막국수": "8,000", "비빔 막국수": "8,000" },
    },
  ];
  const cardPrint = placeList.map((place, index, placeList) => (
    <PlaceCard
      id={index}
      key={index}
      placeList={placeList}
    />
  ));

  return <div>{cardPrint}</div>;
};
export default PlaceList;
