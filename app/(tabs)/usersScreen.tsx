import { basicInformationAtom } from "@/store/basicInformationAtom";
import { useAtom } from "jotai";
import React from "react";
import { View, StyleSheet } from "react-native";

const UsersScreen: React.FC = () => {

  const [basicInfo] = useAtom(basicInformationAtom)

  console.log("Basic Information", basicInfo);
  return (
    <View style={styles.container}>
      
    </View>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

});
