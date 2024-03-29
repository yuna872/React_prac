import React, { useEffect, useReducer } from 'react';
import { useState } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsImmer() {

  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    updatePerson((person) => {
        const mentor = person.mentors.find((m)=>m.name === prev);
        mentor.name = current;
    })
  }
  const handleAdd = ()=>{
    const name = prompt('멘토의 이름을 입력하세요.')
    const title = prompt('멘토의 직업을 입력하세요.')
    updatePerson(person => person.mentors.push({name, title}));
  }
  const handleDelete = ()=>{
    const name = prompt('누구를 삭제하고 싶은가요?')
    updatePerson((person)=>{
        const index = person.mentors.findIndex((m)=> m.name === name);
        person.mentors.splice(index, 1);
    })
  }

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