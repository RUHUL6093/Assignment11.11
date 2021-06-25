import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Admin from "./Components/Admin/Admin/Admin";
import AddService from "./Components/Admin/AddService/AddService";
import ManageService from "./Components/Admin/ManageService/ManageService";
import User from "./Components/User/User/User";
import BookService from "./Components/User/BookService/BookService";
import Review from "./Components/User/Review/Review";
import BookingList from "./Components/User/BookingList/BookingList";
import OrderList from "./Components/Admin/OrderList/OrderList";
import Service from "./Components/Home/Service/Service";
import Header from "./Components/Home/Header/Header";
import { createContext, useState } from "react";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";
import NotAdmin from "./Components/Admin/NotAdmin/NotAdmin";
import NotFound from "./Components/NotFound/NotFound";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/manageService">
            <ManageService></ManageService>
          </Route>
          <PrivateRoute path="/user">
            <User></User>
          </PrivateRoute>
          <PrivateRoute path="/notAdmin">
            <NotAdmin></NotAdmin>
          </PrivateRoute>
          <Route path="/bookService">
            <BookService></BookService>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>
          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>
          <Route path="/service">
            <Header></Header>
            <Service></Service>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
