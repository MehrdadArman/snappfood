import React, { useEffect, useCallback } from "react";
import { Virtuoso } from "react-virtuoso";

// ** redux
import { useDispatch, useSelector } from "react-redux";

//** action types */
import * as resturantAction from "../../../redux/vendors/actions";

// ** styled components
import { Wrapper } from "../../../components/containers/Containers";
import VendorCard from "../../../components/cards/VendorCard";
import CardSkeleton from "../../../components/skeleton/CardSkeleton";

const VendorsList = () => {
  // ** dispatch
  const dispatch = useDispatch();

  // ** use selectors
  const filterVendros = useSelector((state) => state.vendors.filterVendros);
  const vendorsList = useSelector((state) => state.vendors.vendorsList);
  const vendorsListLoading = useSelector(
    (state) => state.vendors.vendorsListLoading
  );

  // ** useEffect
  useEffect(() => {
    dispatch(resturantAction.getVendorsList(filterVendros));
  }, [dispatch, filterVendros]);

  const handleReachToEndScroll = useCallback(() => {
    if (!vendorsListLoading) {
      dispatch(
        resturantAction.filterVendrosList({
          page: filterVendros.page + 1,
          page_size: filterVendros.page_size,
          lat: filterVendros.lat,
          long: filterVendros.long,
        })
      );
    }
  }, [dispatch, filterVendros, vendorsListLoading]);

  return (
    <div className="vendors-list">
      <Wrapper padding={"0px 0px"}>
        <Virtuoso
          data={vendorsList.filter((item) => item.type === "VENDOR")}
          className={"w-100 vendors-list__virtuallist-wrpper"}
          overscan={200}
          increaseViewportBy
          itemContent={(index, item) => {
            const {
              backgroundImage,
              title,
              logo,
              rate,
              commentCount,
              id,
              description,
            } = item.data;
            return (
              <VendorCard
                key={id}
                marginBottom={20}
                imageSrc={backgroundImage}
                title={title}
                logo={logo}
                rate={rate}
                commentCount={commentCount}
                description={description}
              />
            );
          }}
          endReached={() => {
            return handleReachToEndScroll();
          }}
          components={{
            Footer: () => {
              return vendorsListLoading ? (
                <Wrapper>
                  {[1, 2, 3].map((item) => {
                    return <CardSkeleton key={item} />;
                  })}
                </Wrapper>
              ) : null;
            },
          }}
        />
      </Wrapper>
    </div>
  );
};

export default VendorsList;
