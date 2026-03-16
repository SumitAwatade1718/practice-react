import "./hero.css";
function Hero(props) {
  const { name, info, name1, info1 } = props;
  return (
    <>
      <div className="hero">
        <div className="first">
          <h1>{name}</h1>
          <p>{info} </p>
        </div>
        <div className="second">
          <h1>{name1}</h1>
          <p>{info1} </p>
        </div>
      </div>
    </>
  );
}
export default Hero;
