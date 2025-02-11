import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import TopSection from "@/components/home/layout/TopSection";
import MiddleSection from "./layout/MiddleSection";
import SafeContainer from "../shared/SafeAreaViewContainer";
import Label from "../shared/Label";

const HomeComponent = () => {
  return (
    <SafeContainer style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <Label
          lightColor="grey"
          text="List Icons"
          type="subtitle"
          customTextContainerStyle={styles.textContainer}
        />
        <TopSection />
        <Label
          lightColor="grey"
          text="App Icons"
          type="subtitle"
          customTextContainerStyle={styles.textContainer}
        />
        <MiddleSection />
      </ScrollView>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  textContainer: {
    padding: 12,
    marginBottom: 5,
  },
});

export default HomeComponent;
