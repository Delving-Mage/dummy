import { useContext, createContext, useState, useEffect } from "react";

const NameContext = createContext();

const ParentComponent = () => {
  const [text, setText] = useState("hi");
  const [flag, setFlag] = useState(false);
  const TriggerupdateFunc = (e) => {
    setText(e);
  };

  useEffect(() => {
    
  }, [text]);

  console.log(text)

  console.log(flag, "conditionalrender");
  return (
   
    <NameContext.Provider value={[text, setText, TriggerupdateFunc, setFlag]}>
      DummyComponent
      <br />
      <button disabled={flag ? false : true} onClick={() => setText("Besant")}>
        Update IN Parent
      </button>
      <br />
      <DummyComponent1 />
    </NameContext.Provider>
  );
};
const DummyComponent1 = () => {
  return (
    <>
      DummyComponent1
      <br />
      <DummyComponent2 />
    </>
  );
};
const DummyComponent2 = () => {
  const [textInherited, setTextInherited, updateParentText, setFlag] =
    useContext(NameContext);
  const [childText, setChildText] = useState("");
  const updateParentEntity = () => {
    updateParentText(childText);
    setFlag(true);
  };
  return (
    <>
      <br />
      DummyComponent2
      <br />
      <p>{textInherited}</p>
      <button onClick={() => setTextInherited("Besant classes")}>Update</button>
      <br />
      <input
        type={"text"}
        value={childText}
        onChange={(e) => setChildText(e.target.value)}
      ></input>
      <button onClick={() => updateParentEntity()}>Update parent text</button>
    </>
  );
};

export default ParentComponent;
