import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOrder, setIsOrder] = useState(false);
  const [plans, setplans] = useState([]);
  const [cart, SetCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [dbPlans, setdbPlans] = useState([]);
  const [notifications, setNotifications] = useState([]);
  // For getting plans cities from database
  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("cities").get();
      setplans(data.docs.map((plan) => ({ ...plan.data(), id: plan.id })));
    };
    fetchData();
  }, []);
  // For getting plans from database
  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("plans").get();
      setdbPlans(data.docs.map((plan) => ({ ...plan.data(), id: plan.id })));
    };
    fetchData();
  }, []);
  // For getting Notifications from database
  useEffect(() => {
    const fetchData = async () => {
      const data = await db
        .collection("notifications")
        .orderBy("createdAt", "desc")
        .get();
      setNotifications(
        data.docs.map((plan) => ({ ...plan.data(), id: plan.id }))
      );
    };
    const interval = setInterval(() => {
      fetchData();
    }, 10000);
    fetchData();
    return () => clearInterval(interval);
  }, []);
  // For getting user from database
  useEffect(() => {
    if (currentUser) {
      var docRef = db.collection("profile").doc(currentUser.uid);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            setUser(doc.data());
          } else {
            console.log("No such User Found");
          }
        })
        .catch((error) => {
          console.log("Error getting User:", error);
        });
    }
  }, [currentUser]);
  // For getting orders from database
  useEffect(() => {
    const fetchData = async () => {
      const data = await db
        .collection("orders")
        .orderBy("createdAt", "desc")
        .get();
      setOrders(data.docs.map((order) => ({ ...order.data(), id: order.id })));
    };
    fetchData();
  }, [isOrder, notifications]);
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }
  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }
  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }
  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    user,
    setUser,
    orders,
    plans,
    setplans,
    dbPlans,
    cart,
    SetCart,
    isOrder,
    setIsOrder,
    notifications,
    setNotifications,
    signup,
    login,
    resetPassword,
    updateEmail,
    updatePassword,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
