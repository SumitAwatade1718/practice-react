import "./Conditional_rendering.css";
function Conditional_rendering() {
  return (
    <>
      <div className="main">
        <h1>Conditional Rendering in React</h1>
        <button>Click me to get how to perform conditional rendering</button>
        <p>Ways to perform conditional rendering:</p>

        <div className="info">
          <ol>
            <li>Using if statement</li>
            <li>Using ternary operator ( ? : )</li>
            <li>Using logical AND operator ( && )</li>
            <li>Using switch statement</li>
            <li>Using separate components</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Conditional_rendering;
