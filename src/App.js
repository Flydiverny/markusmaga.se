import React from "react";
import { useTrail, animated } from "react-spring/hooks";
import "./App.css";
const config = { mass: 5, tension: 2000, friction: 200 }
const App = () => {
  const items = ["M", "a", "r", "k", "u", "s", "\u00a0", "M", "a", "g", "a"];
  const trail = useTrail(items.length, {
    config,
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div className="App">
      <header className="App-header">
        <span className="App-logo" role="img">
          🤪
        </span>
        <div className="App-name">
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.span key={rest.key}
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            {items[index]}
          </animated.span>
        ))}
        </div>
      </header>
    </div>
  );
};

export default App;
