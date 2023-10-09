// 식당을 선택했을 때 식당의 정보를 표시하는 컴포넌트
import { useState } from "react";
import Menu from "./Menu";
import UserReviewForm from "./UserReviewForm";

const PlaceInfo = (props) => {
  const [id, setId] = useState(1);
  const placeList = [
    {
      id: 1,
      name: "금돼지식당",
      category: "고기",
      menu: { 눈꽃목살: "18,000", 본삼겹: "19,000", 껍데기: "14,000" },
    },
    {
      id: 2,
      name: "약수 순대국",
      category: "한식",
      menu: { 눈꽃목살: "18,000", 본삼겹: "19,000", 껍데기: "14,000" },
    },
    {
      id: 3,
      name: "만포 막국수",
      category: "면",
      menu: { 눈꽃목살: "18,000", 본삼겹: "19,000", 껍데기: "14,000" },
    },
  ];

  var place = null;
  for (let i = 0; i < placeList.length; i++) {
    if (placeList[i].id === id) {
      place = placeList[i];
    }
  }

  const jsonLocalStorage = {
    setItem: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key) => {
      console.log("get");
      return JSON.parse(localStorage.getItem(key));
    },
  };

  // 장소 하트버튼
  const [heartCounter, setHeartCounter] = useState(() => {
    const initialState = jsonLocalStorage.getItem("heartCounter");
    return initialState;
  });
  const [starCounter, setStarCounter] = useState(() => {
    const initialState = jsonLocalStorage.getItem("starCounter");
    return initialState;
  });
  const [reviewText, setReviewText] = useState(() => {
    const initialState = jsonLocalStorage.getItem("reviewText");
    return initialState;
  });

  function handleHeartClick() {
    setHeartCounter((pre) => {
      const nextCounter = !pre;
      jsonLocalStorage.setItem("heartCounter", nextCounter);
      return nextCounter;
    });
  }
  function handleStarClick(event) {
    setStarCounter(() => {
      const nextStar = event.target.value;
      jsonLocalStorage.setItem("starCounter", nextStar);
      return nextStar;
    });
  }
  function handleReviewText(event) {
    setReviewText(() => {
      const text = event.target.value;
      jsonLocalStorage.setItem("reviewText", text);
      return text;
    });
  }

  return (
    <div>
      <h2>{place.name}</h2>
      <h3>{place.category}</h3>
      <UserReviewForm
        handleHeartClick={handleHeartClick}
        heartCounter={heartCounter}
        handleStarClick={handleStarClick}
        starCounter={starCounter}
        handleReviewText={handleReviewText}
        reviewText={reviewText}
      ></UserReviewForm>

      <Menu menu={place.menu}></Menu>
    </div>
  );
};

export default PlaceInfo;
