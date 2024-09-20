import { useEffect, useState } from 'react'
import Main from './components/Main'


const telegram = window.Telegram.WebApp;
function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    telegram.ready();
  })

  const onCheckout = () => {
    telegram.MainButton.text = 'Sotib olish :)';
    telegram.MainButton.show();
  }
  return (
    <>
     <Main />
    </>
  )
}

export default App
