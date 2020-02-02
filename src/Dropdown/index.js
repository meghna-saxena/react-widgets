import React, { useState, useEffect, useRef } from "react";
import "../index.css";

const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onClick = event => {
      if (ref.current && !ref.current.contains(event.target)) {
          console.log('here')
        setOpen(false);
      }
    };

    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div ref={ref}>
      <button onClick={() => setOpen(!open)}>Open</button>
      {open ? children : null}
    </div>
  );
};

///////////////////////////////////////////////
// You don't need to modify anything below here
///////////////////////////////////////////////
const App = () => {
  const menu = (
    <div className="menu visible transition">
      <div className="item">New</div>
      <div className="item">
        <span className="description">ctrl + o</span>
        Open...
      </div>
      <div className="item">
        <span className="description">ctrl + s</span>
        Save as...
      </div>
      <div className="item">
        <span className="description">ctrl + r</span>
        Rename
      </div>
    </div>
  );

  return (
    <div className="ui container">
      <div className="ui dropdown">
        <Dropdown>{menu}</Dropdown>
      </div>
    </div>
  );
};

export default App;
export { Dropdown };
