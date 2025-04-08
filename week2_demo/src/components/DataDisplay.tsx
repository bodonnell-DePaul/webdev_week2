import {useState, useEffect} from 'react'

const useFetchData = (url: string) => {
    const [data, setData] = useState(null);
    if(url === null){
        url = 'https://api.chucknorris.io/jokes/random';
    }
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
  
  interface DataProps {
    newUrl: string;
  }
  
  

  const DataDisplay: React.FC<DataProps> = ({newUrl}) => {
    const data = useFetchData(newUrl);
    return(
        <div>
            {
                data ? JSON.stringify(data) : 'Loading...'
            }
        </div>
    );
  };

  export default DataDisplay;