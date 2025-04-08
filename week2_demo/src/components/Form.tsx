import {useState} from 'react'
//import DataDisplay from './DataDisplay';

const Form: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      //<DataDisplay newUrl={inputValue} />
      alert(`Submitted: ${inputValue}`);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default Form;