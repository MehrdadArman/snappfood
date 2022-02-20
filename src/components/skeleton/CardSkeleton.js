import React from "react";

const CardSkeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-card__img skeleton"></div>
      <div className="skeleton-card__body">
        <div className="skeleton-card__title skeleton"></div>
        <div className="skeleton-card__intro skeleton"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
