import "./Button.css";

function Button({ children, doSomething }) {
  return (
    <div
      className="Button"
      onClick={() => {
        doSomething();
      }}
    >
      {children}
    </div>
  );
}

export default Button;
