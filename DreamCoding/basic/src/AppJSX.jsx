import './App.css';

function AppJSX() {
  const name = '유나';
  const list = ['우유', '딸기', '바나나'];
  return (
    <>
      <h1 className='orange'>Hell0! { name }야 안녕</h1>
      <h2>Hell0!</h2>
      <p>name</p>
      <p>{ name }</p>
      
      <ul>
        {
          list.map((item)=>{
            return <li>{ item }</li>
          })
        }
      </ul>
      <img
        style={{ width : '200px', height: '200px' }}
        src=''
      />
    </>
  );
}

export default AppJSX;
