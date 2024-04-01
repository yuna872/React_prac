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

<br/>
<br/>

## Passing Props to a Component

### Specifying a default value for a prop

값이 지정되지 않았을 때, prop에 기본값을 주길 원한다면, 변수 바로 뒤에 `=`과 함께 기본값을 넣어 구조 분해 할당을 해줄 수 있다.

이 기본값은 size prop이 없거나 `size={undefined}`로 전달될 때 사용된다.  
`size={null}`의 경우에는 기본값을 사용하지 않는다.

```
function Avatar({ person, size = 100 }) {
  //...
}
```


### Forwarding props with the JSX spread syntax

```
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}
```
Profile 컴포넌트에서 props는 Avatar 컴포넌트에 전달될 때만 사용된다. 
이 경우에는 보다 간결한 spread 구문을 사용하는 것이 합리적일 수 있다.
```
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```
**단, 전개구문은 제한적으로 사용하는 것이 좋다.**  
이는 종종 컴포넌트들을 분할하여 자식을 JSX로 전달해야 함을 의미한다.

### Passing JSX as children

때로는 만든 컴포넌트들끼리 중첩하고 싶을 수도 있다.  
JSX 태그 내에 컨텐츠를 중첩하면, 부모 컴포넌트는 해당 컨텐츠를 `children`이라는 prop으로 받는다.
```
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
```

### How props change over time

__컴포넌트는 시간에 따라 다른 props를 받을 수 있다.__ props는 항상 고정되어 있지 않다.  
즉, props는 컴포넌트의 데이터를 처음에만 반영하는 것이 아니라 모든 시점에 반영한다.

그러나 props는 불변으로, "변경할 수 없다(immutable)"는 뜻을 가진다.  
컴포넌트가 props를 변경해야 하는 경우, 부모 컴포넌트에 다른 props(새로운 객체)를 전달하도록 요청해야 한다. 이전의 props는 버려지고 JavaScript 엔진은 기존 props가 차지했던 메모리를 회수(가비지 컬렉팅)하게 된다.

<br/>

## Conditional Rendering
### 조건에 따라 JSX 반환하기 및 삼항연산자
```
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;
```
위와 같은 중복은 코드를 관리하기 어렵게 만들 수 있다.  
이런 상황에서는 조건부로 약간의 JSX를 포함시켜 코드를 더 DRY(Don't Repeat Yourself)하게 만들 수 있다.

```
return (
  <li className="item">
    {isPacked ? name + ' ✔' : name}
  </li>
);
```

> 이 두 예제는 완전히 동일할까?

첫번째 코드에서 `<li>`의 서로 다른 두 인스턴스를 생성하고 있기 때문에 다르다고 생각할 수 있다.  
하지만 JSX 요소는 내부 state를 보유하지 않고 실제 DOM 노드가 아니기 때문에 [인스턴스]가 아니다. 두 개의 인스턴스를 생성하는 것이 아니라 청사진에 가깝다고 할 수 있다.  


따라서, __이 두 예제는 완전히 동일하다!__

### 논리 AND 연산자
```
return (
  <li className="item">
    {name} {isPacked && '✔'}
  </li>
);
```

__`&&`의 왼쪽에 숫자를 넣지 말아라.__  
JavaScript는 왼쪽을 자동으로 `boolean`으로 변환한다.  
그러나 왼쪽이 0이면 React는 빈 값 대신 0을 렌더링한다.

예를 들어, `massageCount && <p>New Messages</p>`와 같은 코드를 작성하면,  
messageCount가 0일 떄 아무것도 렌더링되지 않을 것을 기대하지만, 실제로는 0 자체를 렌더링한다.  

이 문제를 해결하기 위해서는 왼쪽을 `boolean`으로 만들어 주면 된다.
```
messageCount > 0 && <p>New messages</p>
// 형변환, 이중부정
!!messageCount && <p>New messages</p>
```
