import AppHeader from "@/components/app/appHeader/AppHeader";
import SafeContainer from "@/components/shared/SafeAreaViewContainer";

const Home = () => (
  <SafeContainer style={{ backgroundColor: "yellow", padding: 10 }}>
    <AppHeader />
  </SafeContainer>
);

export default Home;
