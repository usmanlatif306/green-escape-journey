import React, { useState } from "react";
import logo from "../logo.png";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import "./nav.css";
import { db } from "../firebase";
import moment from "moment";
const Navbar = () => {
  const { currentUser, user, logout, cart, notifications, setNotifications } =
    useAuth();
  const [isUserMenu, setIsUserMenu] = useState(false);
  async function handleLogOut() {
    try {
      await logout();
    } catch {
      console.log("somehing went wrong");
    }
  }
  function handleReadNotification() {
    let unRead = notifications.filter(
      (item) => item.user === currentUser.uid && item.read == false
    );
    setNotifications(
      unRead.map((item) => {
        if (item.read === false) {
          return {
            ...item,
            read: true,
          };
        }
        return item;
      })
    );
    unRead.map((item) => {
      let notification = db.collection("notifications").doc(item.id);
      notification.update({
        read: true,
      });
    });
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="/">
          <img className="logo mt-3 ml-2" src={"LOGO.PNG"} alt="logo ..."></img>
          <h4 className="jeg">Green Ecape Journey</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          color="white"
        >
          <span className="navbar-toggler-icon c890"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/about">
                About <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link" to="serve">
                Service <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item mr-5 ">
              <Link className="nav-link" to="contact">
                Contact <span className="sr-only">(current)</span>
              </Link>
            </li>
            {!currentUser && !user && (
              <li className="nav-item ">
                <Link className="nav-link" to="login">
                  Login <span className="sr-only">(current)</span>
                </Link>
              </li>
            )}
            {currentUser && user && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={handleReadNotification}
                >
                  <i className="fas fa-bell text-danger"></i>
                  {
                    notifications.filter(
                      (item) =>
                        item.user === currentUser.uid && item.read == false
                    ).length
                  }
                </a>
                <div
                  className="dropdown-menu custom-dropdown"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="drop-header">
                    <span>Notifications</span>
                  </div>
                  {notifications.filter((item) => item.user === currentUser.uid)
                    .length === 0 && (
                    <div className="notification p-2">
                      <p className="text-justify p-0 m-0">
                        No Notification here
                      </p>
                    </div>
                  )}
                  {notifications
                    .filter((item) => item.user === currentUser.uid)
                    .map((item) => (
                      <div className="notification p-2" key={item.id}>
                        <p className="text-justify p-0 m-0">{item.message}</p>
                        <span className="text-muted">
                          {moment(
                            new Date(item.createdAt.seconds * 1000)
                          ).fromNow()}
                        </span>
                      </div>
                    ))}
                </div>
              </li>
            )}
            {currentUser && user && (
              <li className="nav-item ">
                <Link className="nav-link" to="/cart">
                  <i className="fas fa-cart-plus text-danger"></i>
                  <span>{cart.length}</span>
                </Link>
              </li>
            )}
            {/* {currentUser && user && (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLinkProfile"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user-circle"></i>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLinkProfile"
                  >
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/logout"
                      onClick={handleLogOut}
                    >
                      Logout
                    </Link>
                  </div>
                </li>
              )} */}
          </ul>
          {currentUser && user && (
            <img
              src={user.image !== "" ? user.image : "user.png"}
              alt="user-image"
              className="user-image dropdown-toggle"
              onClick={() => setIsUserMenu((state) => !state)}
            />
          )}
          {isUserMenu && (
            <div className="dropdown-menu user-profile-menu">
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
              <Link
                className="dropdown-item"
                to="/logout"
                onClick={handleLogOut}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
