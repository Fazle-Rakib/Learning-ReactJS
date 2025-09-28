function ButtonEvent() {
  const handleClick = () => console.log("Clicked!");
  const handleClickParam = (name) => console.log(`Clicked by ${name}!`);

  let count = 0;

  const clickHandler = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} has clicked ${count} time\'s`);
    } else {
      console.log(`${name}, don\'t click me!!!`);
    }
  };

  const handleClickEvent = (event) => {
    event.target.innerText = "Clicked!!!";
  };

  return (
    <>
      <button className="button" onClick={handleClick}>
        Click Me!!!
      </button>

      <button className="button" onClick={() => handleClickParam("Rakib")}>
        Click Me(Params)!!!
      </button>

      <button className="button" onClick={() => clickHandler("Rakib")}>
        Click Me(Conditional)!!!
      </button>

      <button className="button" onClick={(e) => handleClickEvent(e)}>
        Click Me(Event)!!!
      </button>

       <button className="button" onDoubleClick={(e) => handleClickEvent(e)}>
        Doubel Click Me(Event)!!!
      </button>
    </>
  );
}

export default ButtonEvent;
