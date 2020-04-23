import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Cookie from "universal-cookie";
import { connect } from "react-redux";

import logo from "./logo.svg";
import "./App.css";
import BooksData from "./views/components/BooksData";
import Handmaid from "./images/handmaid.png";
import Crazy from "./images/crazyRich.png";
import Brave from "./images/brave.png";
import Educated from "./images/educated.png";

import CounterScreen from "./views/screens/CounterScreen";
import InputScreen from "./views/screens/InputScreen";
// import AuthScreen from './views/screens/AuthScreen';
import AuthScreen from "./views/screens/AuthScreenV2";
import "./bootstrap.css";
import LifecycleScreen from "./views/screens/LifecycleScreen";
import HomeScreen from "./views/screens/HomeScreen";
import PageNotFound from "./views/screens/PageNotFound";
import Navbar from "./views/components/Navbar";
import ProfileScreen from "./views/screens/ProfileScreen";
import RegisterScreen from "./views/screens/RegisterScreen";
import LoginScreen from "./views/screens/LoginScreen";
import ProfileUser from "./views/screens/profileUser";
import TodoReduxScreen from "./views/screens/TodoReduxScreen";

import { userKeepLogin } from "./redux/actions";

const cookieObject = new Cookie();

class App extends React.Component {
  arrBooks = [
    {
      author: "Margaret Atwood",
      title: "The handmaid's tale",
      review: 4,
      desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
      price: 18.99,
      discount: 60,
      image: Handmaid,
      stock: 7
    },
    {
      author: "Kevin Kwan",
      title: "Crazy rich asians",
      review: 5,
      desc: `the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
      price: 24.12,
      discount: 80,
      image: Crazy,
      stock: 0
    },
    {
      author: "Aldous Huxley",
      title: "Brave new world",
      review: 3,
      desc: `dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
      price: 18.99,
      discount: 60,
      image: Brave,
      stock: 3
    },
    {
      author: "Tara Westover",
      title: "Educated",
      review: 4.5,
      desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
      price: 34.21,
      discount: 0,
      image: Educated,
      stock: 3
    }
  ];

  renderBooks = () => {
    return this.arrBooks.map(val => {
      return <BooksData daftarBuku={val} />;
    });
  };

  componentDidMount() {
    let cookieResult = cookieObject.get("authData");
    console.log(cookieResult);
    if (cookieResult) {
      this.props.userKeepLogin(cookieResult);
    }
  }

  render() {
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
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/counter" component={CounterScreen} />
          <Route exact path="/input" component={InputScreen} />
          <Route exact path="/auth" component={AuthScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/profileUser/:username" component={ProfileUser} />
          {/* setelah : adalah parameter yang bebas diisi apa aja */}
          <Route exact path="/profile/:username" component={ProfileScreen} />
          <Route exact path="/todo" component={TodoReduxScreen} />
          {/* <Route path="/lifecycle" component={LifecycleScreen} /> */}
          {/* 
            user list
            login screen
              - get user sesuai username + password
              - user ada -> redirect ke profile user
              - user tidak ada / salah pass -> alert "user tidak ditemukan/ pass salah"
            register screen
              - post user baru ke db.json
              - username harus unik
              - data (username, fullname, password, role)
            Profile Screen
              - ketika masuk screen langsung
                GET data user melalui route param (isi params bisa username atau id)
              - gunakan Lifecycle Method componentDidMount
              - tampilkan username, fullName, dan role user tsb
          */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </>
    );
  }
}

const mapsStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  userKeepLogin
};

export default connect(mapsStateToProps, mapDispatchToProps)(withRouter(App));
