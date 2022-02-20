import React from "react";
import { CustomButton } from "../../../components/buttons/CustomButton";
import { Wrapper } from "../../../components/containers/Containers";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../router/routesList";

const HomePage = () => {
  const navigate = useNavigate();

  const handleOnclickSearchButton = () => {
    navigate(routes.VENDOR_LIST);
  };

  return (
    <Wrapper
      className="home-page"
      justifyContent={"center"}
      ali
      direction={"column"}
    >
      <CustomButton onClick={handleOnclickSearchButton}>
        جستجو در اسنپ‌فود
      </CustomButton>
    </Wrapper>
  );
};

export default HomePage;
