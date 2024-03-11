

const stateHook = (initialValue) => {
  var value = initialValue;

  const getValue = () => {
    return console.log(value, "initial Value");
  };

  const setValue = (data) => {
    value = data;
    console.log(data, "updatedValue");
    App();
  };
  return [getValue, setValue];
};

const [firstName, setFirstName] = stateHook("React");
firstName()
setFirstName("Besant classes")

function App(){
  console.log("rendered");
  return (
    <>
      <label>
        first name
        <input
          value={firstName}
          onChange={(e) => {
            console.log(e, "onchange trigger");
            setFirstName(e.target.value);
          }}
          type="text"
        ></input>
      </label>
    </>
  );
};

export default App;
