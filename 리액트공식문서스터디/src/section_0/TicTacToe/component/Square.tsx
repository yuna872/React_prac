type TSquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

export function Square({ value, onSquareClick }: TSquareProps) {
  return (
    <button
      style={{
        width: "50px",
        height: "50px",
        fontSize: "30px",
        fontWeight: "bold",
        backgroundColor: "#FFF",
        border: "none",
        borderRight: "1px solid black",
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
