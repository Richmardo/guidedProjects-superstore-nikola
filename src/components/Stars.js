import React from "react";

function Stars(props) {
  const fullStar =
    "https://guidedprojects.dev/assets/files/star_full-50258ff83d0a0d79ee884ed5642ce931.svg";
  const halfStar =
    "https://guidedprojects.dev/assets/files/star-half-be4bf6dcb6c7c92f0166b54862d90bcd.svg";
  const emptyStar =
    "https://guidedprojects.dev/assets/files/star-empty-454cb984a2bfcc987a798d820acbc592.svg";

  return (
    <div className="stars">
      {props.rating === 0 ? (
        <div style={{display: "flex"}}>
          <img src={emptyStar} style={{height: 50}} />
          <img src={emptyStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
        </div>
      ) : null}
      {props.rating === 0.5 ? (
        <div style={{display: "flex"}}>
          <img src={halfStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
        </div>
      ) : null}
      {props.rating === 1 ? (
        <div style={{display: "flex"}}>
          <img src={fullStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
        </div>
      ) : null}
      {props.rating === 1.5 ? (
        <div style={{display: "flex"}}>
          <img src={fullStar} style={{height: 50}}/>
          <img src={halfStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
        </div>
      ) : null}
      {props.rating === 2 ? (
        <div style={{display: "flex"}}>
          <img src={fullStar} style={{height: 50}}/>
          <img src={fullStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
        </div>
      ) : null}
      {props.rating === 2.5 ? (
        <div style={{display: "flex"}}>
          <img src={fullStar} style={{height: 50}}/>
          <img src={fullStar} style={{height: 50}}/>
          <img src={halfStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
        </div>
      ) : null}
      {props.rating === 3 ? (
        <div style={{display: "flex"}}>
          <img src={fullStar} style={{height: 50}}/>
          <img src={fullStar} style={{height: 50}}/>
          <img src={fullStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
        </div>
      ) : null}
      {props.rating === 3.5 ? (
        <div style={{display: "flex"}}>
          <img src={fullStar} style={{height: 50}}/>
          <img src={fullStar} style={{height: 50}}/>
          <img src={fullStar} style={{height: 50}}/>
          <img src={halfStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
        </div>
      ) : null}
      {props.rating === 4 ? (
        <div style={{display: "flex"}}>
          <img src={fullStar} style={{height: 50}}/>
          <img src={fullStar} style={{height: 50}}/>
          <img src={fullStar} style={{height: 50}}/>
          <img src={fullStar} style={{height: 50}}/>
          <img src={emptyStar} style={{height: 50}}/>
        </div>
      ) : null}
      {props.rating === 4.5 ? (
        <div style={{display: "flex"}}>
          <img src={fullStar} style={{height: 50}}/>
          <img src={fullStar} style={{height: 50}}/>
          <img src={fullStar} style={{height: 50}}/>
          <img src={fullStar} style={{height: 50}}/>
          <img src={halfStar} style={{height: 50}}/>
        </div>
      ) : null}
      {props.rating === 5 ? (
        <div style={{display: "flex"}}>
          <img src={fullStar} style={{height: 50}}/>
          <img src={fullStar} style={{height: 50}}/>
          <img src={fullStar} style={{height: 50}}/>
          <img src={fullStar} style={{height: 50}}/>
          <img src={fullStar} style={{height: 50}}/>
        </div>
      ) : null}
    </div>
  );
}

export default Stars;
