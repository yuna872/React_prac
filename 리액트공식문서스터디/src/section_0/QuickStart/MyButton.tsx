import React, { useEffect, useId } from "react";

/** [UPDATING THE SCREEN]
 * MyButton 컴포넌트를 여러 번 렌더링해도 각각 고유한 state를 갖게 된다.
 * === 각 버튼이 개별적으로 update
 */

function MyButton() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    alert("You clicked me!");
    setCount(count + 1);

    return () => {
      // closure
      console.log("clicked");
    };
  }

  const id = useId();
  useEffect(() => {
    /** [USING HOOKS]
     * use로 시작하는 함수를 hook이라고 하고, 컴포넌트의 최상위 레벨에서만 훅을 호출할 수 있다.
     * 아래와 같이 선언하면 에러가 발생한다.
     */
    // const id = useId();

    console.log(id);
  }, [count]);

  return <button onClick={handleClick}>Clicked {count} times</button>;

  /** [RESPONDING TO EVENTS]
   아래와 같이 이벤트를 전달했을 때 alert가 두 번 뜨는 현상
   -> <StrictMode> 컴포넌트의 하위에 있는 컴포넌트가 처음 렌더될 때, React가 오류 검사 등을 위해 한 번 더 렌더링을 촉발한다.
   production 환경에서는 이런 현상이 발생하지 않을 것.
   onClick에 handleClick이 실행된 값이 저장되기 때문에 바로 실행 되어버린다.
  */

  // return <button onClick={handleClick()}>I'm a button</button>;
}

export default MyButton;
