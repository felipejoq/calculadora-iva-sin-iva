import Head from './components/general/Head';
import Options from './components/controls/Options';
import Amount from './components/controls/Amount';
import Result from './components/general/Result';

import { useState } from 'react';
import { calPrice } from './helpers/calculate.helpers';

function App() {

  const [option, setOption] = useState('WithIVA');
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState('$0,00');

  const handleOptionChange = (evt) => {
    setOption(evt.target.value)
    setResult(calPrice(amount, evt.target.value))
  }

  const handleInputChange = (evt) => {
    setAmount(evt.target.value);
    setResult(calPrice(evt.target.value, option))
  }

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    setResult(calPrice(amount, option));
  }

  return (
    <main>
      <Head />
      <form onSubmit={handleSubmitForm}>
        <Options onClickOption={handleOptionChange} />
        <Amount onChangeAmount={handleInputChange} />
        <Result result={result} />
      </form>
    </main>
  )
}

export default App
