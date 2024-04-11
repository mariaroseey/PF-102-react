import Card1 from "./component/card1";
import Header from "./component/header";
import Title from "./component/title";
import Card2 from "./component/card2";
import Card3 from "./component/card3";
import Card4 from "./component/card4";


function App() {
  return (
    <div>
        <div>
          <Header />
        </div>

        <div>
          <Title />
        </div>

        <div className="grid grid-cols-4 mt-10 gap-4 ">
          <Card1/>
          <Card2/>
          <Card3/>
          <Card4/>
        </div>
    </div>

    
  );
}

export default App;
