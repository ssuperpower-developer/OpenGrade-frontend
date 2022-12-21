import "../css/MainBtn.css";

export default function MainBtn({ btnText, index, handlePress, isSelected }) {
  return (
    <button
      className={"mainBtn" + (isSelected[index] ? "Active" : "")}
      //   className="btn"
      onClick={() => handlePress(index)}
    >
      {btnText}
    </button>
  );
}
