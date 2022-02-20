import React from "react";
import { Wrapper } from "../../components/containers/Containers";
import { useNavigate, useLocation } from "react-router-dom";
import classnames from "classnames";

// ** svg Icon
//TODO: it would be better to use jsx  file for svg icons */
import { ReactComponent as HomeIcon } from "../../assets/img/HomeIcon.svg";
import { ReactComponent as TransactionIcon } from "../../assets/img/TransactionIcon.svg";
import { ReactComponent as UserIcon } from "../../assets/img/UserIcon.svg";

// ** routes
import { routes } from "../../router/routesList";

const AppBar = () => {
  // ** react router hooks
  const navigate = useNavigate();
  const location = useLocation();

  const appBarButtonList = [
    {
      id: 1,
      title: "خانه",
      icon: () => <HomeIcon />,
      path: routes.HOME_PAGE,
      onClick: function () {
        navigate(this.path);
      },
    },
    {
      id: 2,
      title: "سفارش‌ها",
      icon: () => <TransactionIcon />,
      onClick: function () {
        return null;
      },
      path: "",
    },
    {
      id: 3,
      title: "حساب من",
      icon: () => <UserIcon />,
      path: "",
      onClick: function () {
        return null;
      },
    },
  ];

  return (
    <Wrapper
      className="appbar"
      justifyContent={"space-around"}
      direction={"row-reverse"}
      padding={"10px 0px"}
    >
      {appBarButtonList.map((item) => {
        return (
          <div
            className="appbar__button"
            key={item.id}
            onClick={() => item.onClick()}
          >
            <div className="appbar__icon">{item.icon()}</div>
            <span
              className={classnames("d-block mt-2 text-center fs-12 ", {
                "text-primary": location.pathname === item.path,
                "text-grey": location.pathname !== item.path,
              })}
            >
              {item.title}
            </span>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default AppBar;
