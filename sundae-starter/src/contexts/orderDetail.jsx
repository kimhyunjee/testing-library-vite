import { createContext, useContext, useState } from "react";

const OrderDetails = createContext();

export function useOrderDetails() {
  const contextValue = useContext(OrderDetails);

  if (!contextValue) {
    throw new Error(
      "useOrderDetails must be used within an OrderDetailsProvider"
    );
  }

  return contextValue;
}

// 주무낳ㄴ 스쿱과 토핑 수, 어떤 맛인지, 어떤 토핑을 얹었는지
export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });

  function updateItemCount(itemName, newItemCount, optionType) {
    // optionCounts를 복사하고 새로운 값을 추가
    const newOptionCounts = { ...optionCounts };

    // newinfo 업뎃하고 복사
    newOptionCounts[optionType][itemName] = newItemCount;

    const value = [optionCounts, setOptionCounts];

    setOptionCounts(newOptionCounts);

    // 새 주문이 들어오면 업데이트
    function resetOrder() {
      setOptionCounts({
        scoops: new Map(),
        toppings: new Map(),
      });
    }

    return <OrderDetails.Provider value={value} {...props} />;
  }
}
