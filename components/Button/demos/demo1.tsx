import { Button } from 'daisyui-react';

export default function App() {
  return (
    <>
      <Button>button</Button>
      <Button color="neutral">neutral</Button>
      <Button color="primary">primary</Button>
      <Button color="secondary">secondary</Button>
      <Button color="accent">accent</Button>
      <Button color="ghost">ghost</Button>
      <Button size='lg' color='primary'>lg</Button>
      <Button fullWidth>fullWidth</Button>
    </>
  )
}