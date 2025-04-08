import {useState, useEffect} from 'react'

const useFetchData = (url: string) => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
            console.log(data)
            setData(data)
        })
    }, [url]);
  
    return data;
  };
  
  const DataDisplay: React.FC = () => {
    const data = useFetchData('https://api.chucknorris.io/jokes/random');
  
    return(
        <div>
            <img src={data ? JSON.stringify(data['icon_url']) : '404' } />
            
            {
                data ? JSON.stringify(data['value']) : 'Loading...'
            }
        </div>
    );
  };

  export default DataDisplay;