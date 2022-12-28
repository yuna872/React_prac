import './App.css';
import Profile from './components/Profile';
import { useState } from 'react';

function AppProfile() {
  
  let [people, setPeople] = useState([
    {
      name : 'Yuna Kim',
      image : 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      title : 'Front-end Developer',
      isnew: true
    },
    {
      name : 'Hey Nah',
      image : 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80',
      title : 'Back-end Developer',
      isnew: false
    },
    {
      name : 'jiu choi',
      image : 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80',
      title : 'Full Stack Developer',
      isnew: false
    },

  ])

  return (
    
    <div>
      {
        people.map((person)=>{
          return (
            <Profile
            name={ person.name }
            image={ person.image }
            title={ person.title }
            isnew={ person.isnew }
          />
          )          
        })
      }
    </div>
  );
}

export default AppProfile;
