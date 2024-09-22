import UsersList from "@/components/UserList";
import { DataAtom } from "@/store/dataAtom";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import {  View, Text } from "react-native";

const URL = "https://jsonplaceholder.typicode.com/users";

const TestScreen = () => {
  const [, setData] = useAtom(DataAtom);

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
    <View><Text>Fake Users Ftech Using Jotai</Text></View>
      
      <UsersList />
    </>
  );
};

export default TestScreen;
