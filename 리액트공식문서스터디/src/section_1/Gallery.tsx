function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export default function Gallery() {
  /*
  아래와 같이 컴포넌트의 정의를 중첩해서 작성하는 경우,
  props, state가 변경될 때마다 렌더링 사이클 동작 -> 렌더링 때마다 재정의를 하게 된다.
  현재 상태에서는 심각하지는 않지만,, 컴포넌트가 복잡해질수록 성능 저하가 일어날 수 있다.
  정의를 중첩하는 대신 props로 전달하는 것이 권장된다.
  */

  // function Profile() {
  //   return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
  // }

  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
