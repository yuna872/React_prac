/**
 * 결과 구조를 다음과 같이 변경하라
 * <article>
  <p>I write, erase, rewrite</p>
  <hr />
  <p>Erase again, and then</p>
  <hr />
  <p>A poppy blooms.</p>
</article>
 */

import { Fragment } from "react/jsx-runtime";

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <Fragment key={index}>
          <p key={index}>{line}</p>
          {index < poem.lines.length - 1 && <hr />}
        </Fragment>
      ))}
    </article>
  );
}
