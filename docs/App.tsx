import './App.css'
import { Button } from '../components'

function App() {

  return (
    <div className='flex flex-col items-center gap-4'>
      <Button>Button</Button>
      <div className='flex gap-2 flex-wrap'>
        <Button>Button</Button>
        <Button color='neutral'>neutral</Button>
        <Button color='primary'>primary</Button>
        <Button color='secondary'>secondary</Button>
        <Button color='accent'>accent</Button>
        <Button color='ghost'>ghost</Button>
      </div>
      <div className='flex gap-2 flex-wrap'>
        <Button loading>Button</Button>
      </div>
    </div>
  )
}

export default App
