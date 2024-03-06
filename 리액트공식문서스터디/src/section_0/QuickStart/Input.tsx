function Input() {
  return (
    <>
      {/* html */}
      {/* <label for="input">레이블</label> */}

      {/* JSX에서는 htmlFor로 레이블 동작 */}
      <label htmlFor="input">레이블</label>
      <input id="input" />
    </>
  );
}

export default Input;
