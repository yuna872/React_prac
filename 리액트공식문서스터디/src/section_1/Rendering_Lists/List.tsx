import { people } from "./data.ts";
import { getImageUrl } from "../utils.ts";
import { JSX } from "react/jsx-runtime";

type TPerson = {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
};

export default function List() {
  // const chemist = people.filter((person) => person.profession === "chemist");
  // const others = people.filter((person) => person.profession !== "chemist");

  const ItemBuilder = (person: TPerson) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  );

  // const chemists: JSX.Element[] = [];
  // const others: JSX.Element[] = [];
  // people.forEach((person) =>
  //   person.profession === "chemist"
  //     ? chemists.push(ItemBuilder(person))
  //     : others.push(ItemBuilder(person))
  // );

  const { chemists, others } = people.reduce(
    (res: { chemists: JSX.Element[]; others: JSX.Element[] }, person) => {
      if (person.profession === "chemist")
        res.chemists.push(ItemBuilder(person));
      else res.others.push(ItemBuilder(person));
      return res;
    },
    {
      chemists: [],
      others: [],
    }
  );

  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemist</h2>
      <ul>{chemists}</ul>
      <h2>Others</h2>
      <ul>{others}</ul>
    </article>
  );
}
