const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

const person2 = {
  theme: {
    backgroundColor: "white",
    color: "blue",
  },
};

// export default function TodoList() {
//   const { name, theme } = person; // 해체 할당

//   return (
//     <div style={theme}>
//       <h1>{name}'s Todos</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }
type TPerson = {
  name?: string;
  theme: {
    backgroundColor: string;
    color: string;
  };
};

function TodoList({ person }: { person: TPerson }) {
  // 객체 구조 분해 할당***
  const { theme, name = "default name" } = person;
  return (
    <div style={theme}>
      <h1>{name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <>
      <TodoList person={person} />
      <TodoList person={person2} />
    </>
  );
}
