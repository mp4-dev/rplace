interface colorSelectorProps {
  changeCurrentColor: Function;
}

export default function ColorSelector({
  changeCurrentColor,
}: colorSelectorProps) {
  function handleChangeColor(color: string) {
    changeCurrentColor(color);
    console.log("changed color to " + color);
  }
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        className="btn btn-red"
        onClick={() => {
          handleChangeColor("Red");
        }}
      ></button>
      <button
        type="button"
        className="btn btn-blue"
        onClick={() => {
          handleChangeColor("Blue");
        }}
      ></button>
      <button
        type="button"
        className="btn btn-green"
        onClick={() => {
          handleChangeColor("Green");
        }}
      ></button>
      <button
        type="button"
        className="btn btn-yellow"
        onClick={() => {
          handleChangeColor("Yellow");
        }}
      ></button>
    </div>
  );
}
