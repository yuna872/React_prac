/*
1. board 그리기
2. 9개를 3개씩
3. 그 안에 X, O 넣기
4. 현재 순서 누군지 판단
5. 클릭했을 때 비어있으면 해당 기호 넣기
6. 한 줄 모두 같은 값일 때 승자 결정
7. 히스토리 저장
*/

import React from "react";
import { Square } from "./component/Square";
import calculateWinner from "./component/calculateWinner";

function TicTacToe() {
  const [player, setPlayer] = React.useState("X");
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [history, setHistory] = React.useState<number[][]>([]);

  const [winner, points] = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = `Next Player : ${player}`;
  }

  const handleClick = (idx: number) => {
    // 이미 승자가 결정된 경우
    if (winner) return;

    // 이미 수를 놓은 칸이라면 return
    if (squares[idx]) return;

    // 히스토리 저장
    setHistory([...history, squares]);

    // 수 놓기
    const nextSquares = [...squares];
    nextSquares[idx] = player;
    setSquares(nextSquares);

    // 다음 플레이어 set
    if (player === "X") setPlayer("O");
    else setPlayer("X");
  };

  const handleClickGoTo = (idx: number) => {
    // squares reset
    setSquares(history[idx]);
    // history reset
    setHistory(history.slice(0, idx));

    // Player도 같이 reset
    if (idx % 2 === 0) setPlayer("X");
    else setPlayer("O");
  };

  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>{status}</h2>

      <div style={{ margin: "20px", display: "flex", gap: "50px" }}>
        <div>
          <div style={boardStyle}>
            <div style={rowStyle}>
              {/**
               * onSquareClick={handleClick(0)} 으로 작성할 경우 함수 호출은 TicTacToe 컴포넌트 렌더링의 일부가 된다.
               * handleClick(0)은 setSquare를 호출하기 때문에, 전체 컴포넌트가 다시 렌더링된다.
               * 따라서, 우리는 무한루프에 빠지게 된다.
               * 화살표 함수로, 함수를 짧게 정의하면 이를 해결할 수 있다.
               */}
              <Square onSquareClick={() => handleClick(0)} value={squares[0]} isRed={points?.includes(0)} />
              <Square onSquareClick={() => handleClick(1)} value={squares[1]} isRed={points?.includes(1)} />
              <Square onSquareClick={() => handleClick(2)} value={squares[2]} isRed={points?.includes(2)} />
            </div>
            <div style={rowStyle}>
              <Square onSquareClick={() => handleClick(3)} value={squares[3]} isRed={points?.includes(3)} />
              <Square onSquareClick={() => handleClick(4)} value={squares[4]} isRed={points?.includes(4)} />
              <Square onSquareClick={() => handleClick(5)} value={squares[5]} isRed={points?.includes(5)} />
            </div>
            <div style={rowStyle}>
              <Square onSquareClick={() => handleClick(6)} value={squares[6]} isRed={points?.includes(6)} />
              <Square onSquareClick={() => handleClick(7)} value={squares[7]} isRed={points?.includes(7)} />
              <Square onSquareClick={() => handleClick(8)} value={squares[8]} isRed={points?.includes(8)} />
            </div>
          </div>
        </div>
        <div>
          <p style={{ margin: "0px", marginBottom: "10px" }}>HISTORY</p>
          <ul>
            {history.map((item, idx) => (
              <li key={idx}>
                <button onClick={() => handleClickGoTo(idx)}>
                  {idx === 0 ? "Go to Game Start" : `Go to Move #${idx}`}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
const boardStyle = {
  borderTop: "1px solid black",
  borderLeft: "1px solid black",
};
const rowStyle = { borderBottom: "1px solid black", display: "flex" };

export default TicTacToe;
