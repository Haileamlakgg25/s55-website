import { useEffect, useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000')
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-4xl font-bold text-blue-700">Welcome to Team S55</h1>
      <p className="text-xl mt-4 text-gray-700 italic bg-blue-100 p-4 rounded shadow-md w-fit">
        {message}
      </p>
    </div>
  );
};

export default Home;
