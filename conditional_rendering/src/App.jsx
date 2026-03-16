import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Conditional_rendering from "./Conditional_rendering";
function App() {
  return (
    <>
      <Header />
      <Hero name="Sumit Awatade" info="Full Stack Web Developer" />
      <Hero name1="Vishnavi Padgal" info1="Full Stack Web Developer" />
      <Conditional_rendering />
    </>
  );
}

export default App;
