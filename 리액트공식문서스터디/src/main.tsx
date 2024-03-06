import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// 각각 재사용할 수 있음
// ReactDOM.createRoot(document.getElementById('root-2')!).render(
//   <React.StrictMode>
//     <LikeButton />
//   </React.StrictMode>,
// )

// ReactDOM.createRoot(document.getElementById('root-3')!).render(
//   <React.StrictMode>
//     <LikeButton />
//   </React.StrictMode>,
// )

