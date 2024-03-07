type TSquareProps = {
  value: string | null;
  onSquareClick: () => void;
  isRed?: boolean;
};

export function Square({ value, onSquareClick, isRed }: TSquareProps) {
  return (
    <button
      style={{
        width: "50px",
        height: "50px",
        fontSize: "30px",
        fontWeight: "bold",
        backgroundColor: isRed ? "#d9d9d9" : "#FFF",
        border: "none",
        borderRight: "1px solid black",
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
