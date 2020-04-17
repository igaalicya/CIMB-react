import React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'

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
import PageNotFound from './views/screens/PageNotFound';
import Navbar from './views/components/Navbar';
import ProfileScreen from './views/screens/ProfileScreen';
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
      <>
        {/* yang diletakkan di dalam Browser Router akan muncul di semua screen */}
        {/* <LifecycleScreen/> */}
        <Navbar/>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/counter" component={CounterScreen} />
          <Route exact path="/input" component={InputScreen} />
          <Route exact path="/auth" component={AuthScreen} />
          {/* setelah : adalah parameter yang bebas diisi apa aja */}
          <Route exact path="/profile/:username" component={ProfileScreen} />
          {/* <Route path="/lifecycle" component={LifecycleScreen} /> */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </>
    )

}

export default withRouter(App);
