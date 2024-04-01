// import Input from "./section_0/QuickStart/Input";
// import Profile from "./section_0/QuickStart/Profile";
import MyButton from "./section_0/QuickStart/MyButton";
// import TicTacToe from "./section_0/TicTacToe/TicTacToe";
import ThinkingInReact from "./section_0/ThinkingInReact/FilterableProductTable";
import Gallery from "./section_1/Gallery";
import TodoList from "./section_1/TodoList";
import Profile from "./section_1/Avatar";
import List from "./section_1/Rendering_Lists/List";
import RecipeList from "./section_1/Rendering_Lists/Recipes";
import Poem from "./section_1/Rendering_Lists/Poem";

function App() {
  return (
    <>
      {/* Tic Tac Toe */}
      {/* <TicTacToe /> */}

      {/* Thinking In React */}
      {/* <ThinkingInReact/> */}

      {/* Describing the UI */}
      {/* <Gallery/> */}
      {/* <TodoList /> */}
      {/* <Profile /> */}
      {/* <List /> */}
      {/* <RecipeList /> */}
      <Poem />
    </>
  );

  // Installation & Quick Start
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

      {/* <Profile user={user1} />
      <Profile user={user2} /> */}
    </>
  );
}

export default App;
