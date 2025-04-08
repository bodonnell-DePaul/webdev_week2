import {useState} from 'react'

const Form: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
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