// import Input from "./section_0/QuickStart/Input";
import Profile from "./section_0/QuickStart/Profile";
import MyButton from "./section_0/QuickStart/MyButton";

function App() {
  const user1 = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  const user2 = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 0,
  };

  return (
    // JSX에서는 최상단에 부모 태그가 반드시 필요하다.
    <>
      <h2>Welcome My App!</h2>
      <MyButton />

      {/* <Input/> */}

      <Profile user={user1} />
      <Profile user={user2} />
    </>
  );
}

export default App;
