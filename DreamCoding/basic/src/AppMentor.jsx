import React, { useCallback, useEffect, useReducer } from 'react';
import { useState } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentor() {

  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({type : 'updated', prev, current});
  });

  const handleAdd = useCallback(()=>{
    const name = prompt('멘토의 이름을 입력하세요.')
    const title = prompt('멘토의 직업을 입력하세요.')
    dispatch({type : 'added', name, title});

  });

  const handleDelete = useCallback(()=>{
    const name = prompt('누구를 삭제하고 싶은가요?')
    dispatch({type : 'deleted', name});
  });

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {
          person.mentors.map((mentor, index)=> (
              <li key={index}>
                {mentor.name} ({mentor.title})
              </li>
          ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  )
}

const initialPerson ={ 
  name : '유나',
  title: 'front-end developer',
  mentors: [
    {
      name: '혜화',
      title : 'senior developer',
    },
    {
      name: '루가',
      title : 'senior developer',
    },
  ]
}