import { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '김유나',
  'birthday' : '970426',
  'gender' : '여자',
  'job' : '학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '나혜승',
    'birthday' : '980426',
    'gender' : '여자',
    'job' : '학생'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '신한국',
    'birthday' : '940426',
    'gender' : '남자',
    'job' : '학생'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          customers.map((customer)=>{
            return (
              <Customer
                key={customer.id}
                id={customer.id}
                image={customer.image}
                name={customer.name}
                birthday={customer.birthday}
                gender={customer.gender}
                job={customer.job}
              />    
            )
          })
        }
      </div>
    );
  }
  
}

export default App;
