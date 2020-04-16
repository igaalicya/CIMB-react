import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import BooksData from './views/components/BooksData';
import Handmaid from './images/handmaid.png'
import Crazy from './images/crazyRich.png'
import Brave from './images/brave.png'
import Educated from './images/educated.png'

import CounterScreen from './views/screens/CounterScreen';
import InputScreen from './views/screens/InputScreen';
// import AuthScreen from './views/screens/AuthScreen';
import AuthScreen from './views/screens/AuthScreenV2';
import "./bootstrap.css";
import LifecycleScreen from './views/screens/LifecycleScreen';
import HomeScreen from './views/screens/HomeScreen';
function App() {

  let arrBooks = [
    {
      author: "Margaret Atwood",
      title: "The handmaid's tale",
      review: 4,
      desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
      price: 18.99,
      discount: 60,
      image: Handmaid,
      stock: 7,
    },
    {
      author: "Kevin Kwan",
      title: "Crazy rich asians",
      review: 5,
      desc: `the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
      price: 24.12,
      discount: 80,
      image: Crazy,
      stock: 0,
    },
    {
      author: "Aldous Huxley",
      title: "Brave new world",
      review: 3,
      desc: `dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
      price: 18.99,
      discount: 60,
      image: Brave,
      stock: 3,
    },
    {
      author: "Tara Westover",
      title: "Educated",
      review: 4.5,
      desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
      price: 34.21,
      discount: 0,
      image: Educated,
      stock: 3,
    },
  ];

    const renderBooks = () => {
      return arrBooks.map((val) => {
        return(
          <BooksData daftarBuku={val}/>
        )
      })
    }

    return (
      // <div className="App">
      //   <h1 className="p-5 font-weight-bolder text-primary">Toko Buku Purwadhika</h1>
      //   <div className="row offset-md-1">
      //       {renderBooks()}
      //   </div>
      //   <CounterScreen/>
      //   <InputScreen/>
      //   <AuthScreen/>
      //   <LifecycleScreen/>
      // </div>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={HomeScreen} />
          <Route path="/counter" component={CounterScreen} />
          <Route path="/input" component={InputScreen} />
          <Route path="/auth" component={AuthScreen} />
          <Route path="/lifecycle" component={LifecycleScreen} />
        </Switch>
      </BrowserRouter>
    )

}

export default App;
