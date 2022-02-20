import React, { memo } from "react";
import {
  CardWrapper,
  CardImageWrapper,
  CardImage,
  CardFooter,
  CardLogo,
} from "./styles";

const VendorCard = ({
  marginBottom,
  imageSrc,
  title,
  logo,
  rate,
  commentCount,
  description,
}) => {
  return (
    <CardWrapper marginBottom={marginBottom}>
      <CardImageWrapper>
        <CardImage src={imageSrc} alt={title} />
        <CardLogo src={logo} alt={title} />
      </CardImageWrapper>
      <CardFooter>
        <div className="w-50">
          <h3 className="fs-24 text-right">{title}</h3>
        </div>
        <div className="d-flex flex-row justify-content-start w-50">
          <div className="bg-light-green pr-10 pl-10 mr-5 d-block border-radius ">
            <p className=" fs-12 text-green">★ {rate}</p>
          </div>
          <div>
            <p className="fs-12 text-grey">({commentCount})</p>
          </div>
        </div>
        <div className="w-100">
          <p className="text-right fs-12 text-black">{description}</p>
        </div>
      </CardFooter>
    </CardWrapper>
  );
};

export default memo(VendorCard);

VendorCard.defaultProps = {
  marginBottom: 0,
  imageSrc:
    "https://static.snapp-food.com/350x233/cdn/vendor_sub_types/9/03.jpg",
  title: "Snapp Food",
  logo: "https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/61e559a3cb92d.jpg",
};
