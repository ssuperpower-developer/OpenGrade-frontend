import "../css/MainBtn.css";

export default function MainBtn({ btnText, index, handlePress, isSelected }) {
  return (
    <button
      className={"btn" + (isSelected[index] ? "Active" : "")}
      //   className="btn"
      onClick={() => handlePress(index)}
    >
      {btnText}
    </button>
  );
}
