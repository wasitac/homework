const UserReviewForm = (props) => {
  const heartIcon = props.heartCounter ? "❤" : "🤍";
  var targetValue = props.starCounter;
  var selectedRadioButton = document.querySelector(
    'input[type="radio"][name="radioGroup"][value="' + targetValue + '"]'
  );

  if (selectedRadioButton) selectedRadioButton.checked = true;

  return (
    <div>
      <button onClick={props.handleHeartClick}>{heartIcon}</button>
      <form name="myform" id="myform">
        <fieldset onClick={props.handleStarClick}>
          <input type="radio" name="reviewStar" value="5" id="star5" />
          <label htmlFor="star5">★</label>
          <input type="radio" name="reviewStar" value="4" id="star4" />
          <label htmlFor="star4">★</label>
          <input type="radio" name="reviewStar" value="3" id="star3" />
          <label htmlFor="star3">★</label>
          <input type="radio" name="reviewStar" value="2" id="star2" />
          <label htmlFor="star2">★</label>
          <input type="radio" name="reviewStar" value="1" id="star1" />
          <label htmlFor="star1">★</label>
        </fieldset>
        <div>
          <textarea
            className="reviewText"
            type="text"
            id="reviewText"
            placeholder="아직 평가를 작성하지 않았습니다"
            onClick={props.handleReviewText}
            defaultValue={props.reviewText}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default UserReviewForm;
