// 식당을 선택했을 때 식당의 정보를 표시하는 컴포넌트
import { useState } from "react";
import UserReviewForm from "./UserReviewForm";
import Place from "./Place";
import Menu from "./Menu";

const PlaceInfo = (props) => {
  
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
      <Place id={props.id} placeList={props.placeList}></Place>
      <UserReviewForm
        handleHeartClick={handleHeartClick}
        heartCounter={heartCounter}
        handleStarClick={handleStarClick}
        starCounter={starCounter}
        handleReviewText={handleReviewText}
        reviewText={reviewText}
      ></UserReviewForm>
      <Menu menu={props.placeList.menu}></Menu>
    </div>
  );
};

export default PlaceInfo;
