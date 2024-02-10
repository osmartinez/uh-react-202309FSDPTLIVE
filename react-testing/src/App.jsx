import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Swal from 'sweetalert2'

function App() {
  
  const [contador, setContador] = useState(0)

  function showModal(){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
      else{
        Swal.fire({
          title: "Not deleted!",
          text: "Your file has not been deleted.",
          icon: "warning"
        });
      }
    })
  }

  return (
    <>
      <h1>CONTADOR</h1>

      <button onClick={()=> setContador(contador+1)} data-testid="btn-sumar">+</button>
      <button onClick={()=> setContador(contador-1)} data-testid="btn-restar">-</button>
      <h2 data-testid="contador">{contador}</h2>

      <button onClick={showModal}>abrir alert</button>
    </>
  )
}

export default App
