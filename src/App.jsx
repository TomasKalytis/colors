import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Create from './components/Create';
import { useEffect, useState } from 'react';
import { read, store, } from './Functions/ls';
import List from './components/List';


const KEY = 'colors';

function App() {
const [colors, setColors] = useState(null);
const [create, setCreate] = useState(null);

useEffect(_ => {
setTimeout(_ => {
  setColors(read(KEY));
}, 1000);
 
  console.log(read(KEY));
  }, []);


useEffect(() => {
  if (null === create) {
    return;
  }
  store(KEY, create);
}, [create]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <Create setCreate={setCreate}/>
        </div>
        <div className="col-7">
          <List colors={colors} />
        </div>
      </div>
    </div>
  );
}

export default App;
