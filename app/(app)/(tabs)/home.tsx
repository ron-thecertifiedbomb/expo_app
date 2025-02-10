
import Container from "@/components/shared/Container";
import List from "@/components/shared/List";
import { content } from "@/mockData/cards/data";


const Home = () => (
  <Container>
     <List data={content} onPressItem={(item) => console.log(item)} />
  </Container>
);



export default Home;
