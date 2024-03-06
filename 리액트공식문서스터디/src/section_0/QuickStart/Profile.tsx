// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Profile({ user }: any) {
  // && 연산자를 사용하면 imageSize가 0 인경우 0을 return 하게된다. => 펄시 한 값 반환하는 것,,, 근데 숫자만 그래,,,
  // 가급적 삼항연산자를 사용하는 것이 좋음
  //     return (
  //     user.imageSize && (
  //       <>
  //         <h3>{user.name}</h3>
  //         <img
  //           className="avatar"
  //           src={user.imageUrl}
  //           alt={"Photo of " + user.name}
  //           style={{
  //             width: user.imageSize,
  //             height: user.imageSize,
  //           }}
  //         />
  //       </>
  //     )
  //   );

  return user.imageSize ? (
    <>
      <h3>{user.name}</h3>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  ) : //    ) : <></> 도 가능하지만 컴파일 작업이 별도로 필요하기 때문에 성능면에서 아주 조금 차이가 나기는 함.
  null;
}
