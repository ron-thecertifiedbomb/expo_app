import UsersList from "@/components/UserList";
import { allProductsAtom } from "@/store/productsAtom";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { View, Text } from "react-native";

const URL = "https://nextjs-server-rho.vercel.app/api/products/getAllProducts/route";

const TestScreen = () => {

  const [, setData] = useAtom(allProductsAtom);

  const FetchData = async () => {
    const res = await fetch(URL);
    const resJson = await res.json();
    setData(resJson);
  };
  useEffect(() => {
    FetchData();
  }, []);



  return (
    <>
      <View>
        <Text>Fake Users Ftech Using Jotai</Text>
      </View>
 {/* <UsersList />     */}
    </>
  );
};

export default TestScreen;
