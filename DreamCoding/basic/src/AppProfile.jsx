import './App.css';
import Profile from './components/Profile';
import Avatar from './components/Avatar';
import { useState } from 'react';

function AppProfile() {
  
  let [people, setPeople] = useState([
    {
      name : 'Yuna Kim',
      image : 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      title : 'Front-end Developer',
      isNew: true
    },
    {
      name : 'Hey Nah',
      image : 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80',
      title : 'Back-end Developer',
      isNew: false
    },
    {
      name : 'jiu choi',
      image : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      title : 'Full Stack Developer',
      isNew: false
    },

  ])
  
  const handleClick = (event)=>{
    console.log(event)
    alert('클릭되었습니다!')
  }

  return (
    <div>
      <button onClick={handleClick}>버튼</button>
      {
        people.map((person, i)=>{
          return (
            <Profile
            key={i}
            name={ person.name }
            image={ person.image }
            title={ person.title }
            isNew={ person.isNew }
          />
          )          
        })
      }
      {
        people.map((person,i)=>{
          return(
            <Avatar 
              key={i}
              image={ person.image }
              isNew={ person.isNew }
            />
          )
        })
      }
    </div>
  );
}

export default AppProfile;
