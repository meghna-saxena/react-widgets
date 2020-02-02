import React from "react";

const Breadcrumbs = ({ path }) => {
  const navigator = path.map((item, i) => {
    if (i !== path.length - 1) {
      return (
        <>
          <Link name={item} active />
          <Divider />
        </>
      );
    }
    return <Link name={item} />;
  });

  return <div className="ui huge breadcrumb">{navigator}</div>;
};

////////////////////////////////////////////////
// You shouldn't need to change anything below here
////////////////////////////////////////////////
const Divider = () => <i class="right angle icon divider"></i>;
const Link = ({ name, active }) => {
  return active ? (
    <a className="section">{name}</a>
  ) : (
    <div className="active section">{name}</div>
  );
};

const App = () => {
  const path = ["Home", "Store", "T-Shirt"];

  return (
    <div style={{ paddingTop: "25px" }} className="ui container">
      <Breadcrumbs path={path} />
    </div>
  );
};

export default App;
export { Breadcrumbs };
