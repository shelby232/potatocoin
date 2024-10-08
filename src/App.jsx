import { useEffect, useState } from 'react'
import Main from './components/Main'
import Button from './components/Button';


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
    <div className=' max-w-[500px] m-auto border'>
     <Main />
     <Button />
    </div>
  )
}

export default App
