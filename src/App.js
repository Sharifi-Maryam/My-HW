import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    async function getPic() {
        const Picture = await fetch('https://random-d.uk/api/random');
        return (await Picture.json());
    }

    useEffect(() => {
        getPic()
            .then((data) => {
                setData(data);
                setLoading(false);
            })
    }, [])


    return (
        <>
            {!loading && <div className="App">
                <img src={data.url} alt={''} />
            </div>}
        </>
    );
}

export default App;
