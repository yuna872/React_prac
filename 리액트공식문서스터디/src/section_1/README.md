# Section 1. Describing the UI

## 1-3. Writing Markup with JSX

JSX는 JavaScript를 확장한 문법으로, JavaScript 파일 안에 HTML과 유사한 마크업을 작성할 수 있도록 해준다.

### JSX: Putting markup into JavaScript

보통은 HTML, CSS, Javascript가 각각 분리된 파일 형태로 관리된다.  
하지만, 웹이 더욱 인터랙티브해지면서 로직이 컨텐츠를 결정하는 경우가 많아졌다.  
이것이 React에서 렌더링 로직과 마크업이 같은 위치의 컴포넌트에 함께 있는 이유이다.  
<br/>

### The Rules of JSX

---

**1. Return a single rot element**  
컴포넌트에서 여러 엘리먼트를 반환하려면, 하나의 부모 태그로 감싸야 한다.  
JSX는 HTML 처럼 보이지만 내부적으로는 JavaScript 객체로 변환된다.  
하나의 함수에서는 두 개의 객체를 반환할 수 없기 때문에 하나의 Fragment로 감싸야 한다.

```
<div> // Fragment
 <h1>Hedy Lamarr's Todos</h1>
  <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Hedy Lamarr"
    class="photo"
  >
  <ul>
    ...
  </ul>
</div>
```

<br/>

**2. Close all the tags**  
JSX에서는 태그를 명시적으로 닫아야 한다.

<br/>

**3. camelCase ~~all~~ most of the things**  
JSX는 JavaScript로 바뀌고 작성된 속성들은 JavaScript 객체의 키가 된다.  
그렇기 때문에 JavaScript에는 변수명에 대해 제한이 있다.  
ex) 변수명에는 대시를 포함하거나 `class` 처럼 예약어를 사용할 수 없다.

React에서 많은 HTML과 SVG 속성들이 camelCase로 작성되는 이유가 바로 여기에 있다.  
`class`는 예약어이므로, React에서는 대신 해당 DOM 속성의 이름을 따서 `className`을 사용한다.

<br/>

### Try out some challenges

**HTML**

```
export default function Bio() {
  return (
    <div class="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p class="summary">
      You can find my thoughts here.
      <br><br>
      <b>And <i>pictures</b></i> of scientists!
    </p>
  );
}
```

**JSX**

```
export default function Bio() {
  return (
    <>
        <div class="intro">
            <h1>Welcome to my website!</h1>
        </div>
        <p class="summary">
            You can find my thoughts here.
            <br/><br/>
            <i><b>And pictures</b></i> of scientists!
        </p>
    </>
  );
}
```

<br/>
<br/>

## 1-4. JavaScript in JSX wth Curly Braces 

JSX를 사용하면 JavaScript 파일 내에 HTML과 유사한 마크업을 작성하여 렌더링 로직과 콘텐츠를 같은 곳에 위치시킬 수 있다.  
때로는 마크업 안에 약간의 JavaScript 로직을 추가하거나 동적 프로퍼티를 참조하고 싶을 떄가 있다.  
이 경우 JSX에서 중괄호를 사용하여 JavaScript를 작성할 수 있다.
<br/>

### Padding strings with quotes
JSX에 문자열 속성을 전달하려면, `' '` 또는 `" "`로 묶는다.  
src 또는 alt를 동적으로 지정하려는 경우에는 중괄호로 대체하여 JavaScript의 값을 사용할 수 있다.
```
export default function Avatar() {
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt={description}
    />
  );
}
```

<br/>

### Using "double curlies" : CSS and other objects in JSX
string, number, JavaScript 표현식 외에도 객체를 전달할 수도 있다.  
JSX에서 JavaScript 객체를 전달하려면 다른 중괄호 쌍으로 객체를 감싸야 한다.
```
person={{ name:"Hedy Lamarr", inventions: 5}}
```