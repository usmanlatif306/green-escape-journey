import React, { useEffect, useRef, useState } from "react";
import "./cart.css";
import SuccessMessage from "./SuccessMessage";
import { Table, Button, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router";
import { useAuth } from "../Context/AuthContext";
import { db } from "../firebase";
import firebase from "firebase/app";
import { send } from "emailjs-com";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51IvOubCa4fLMha5RE0N8MjHwIpGTIvI3jF0Gb692cN9PL2QAtxh0Tm5qUVwHdHiWbPPIeMgzD9h9gkKrVehSqDXQ00uYur7p7k"
);
const Cart = () => {
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");
  const [phoneError, setphoneError] = useState(null);
  const [isProceed, setIsProceed] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [payId, setPayId] = useState("");
  const addressRef = useRef();
  const mobileRef = useRef();
  const history = useHistory();
  const {
    cart,
    SetCart,
    plans,
    setplans,
    currentUser,
    isOrder,
    setIsOrder,
    user,
  } = useAuth();
  useEffect(() => {
    var subTotal = 0;
    cart.map((item) => {
      return (subTotal = subTotal + item.persons * item.price);
    });
    setTotal(subTotal);
  }, [cart]);
  function increament(id) {
    SetCart(
      cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            persons: item.persons + 1,
          };
        }
        return item;
      })
    );
  }
  function decreament(id) {
    SetCart(
      cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            persons: item.persons - 1,
          };
        }
        return item;
      })
    );
  }
  function handleCartDelete(id) {
    setplans(
      plans.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            inCart: !item.inCart,
          };
        }
        return item;
      })
    );
    SetCart(cart.filter((item) => item.id !== id));
  }
  function addToCart() {
    try {
      cart.map((item) => {
        db.collection("orders").add({
          user: currentUser.uid,
          city: item.city,
          plan: item.plan,
          persons: item.persons,
          price: parseInt(item.price),
          total: item.persons * item.price,
          address: addressRef.current.value,
          mobile: mobileRef.current.value,
          status: "Pending",
          paymentID: payId,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      });
    } catch {
      setError("Something went wrong");
    }
  }
  async function handleStoreCart(e) {
    e.preventDefault();
    setError("");
    setphoneError(null);
    if (addressRef.current.value.length < 3) {
      setError("Minimum 3 characters are required");
    } else if (!addressRef.current.value.match(/^[A-Za-z0-9_ ,.-:]+$/)) {
      setError("Please type valid Address");
    } else if (mobileRef.current.value.toString().length == 0) {
      setphoneError("Required");
    } else {
      try {
        await addToCart();
        await send(
          "service_qqwlrhy",
          "template_nu2xnb4",
          {
            name: user.name,
            email: user.email,
          },
          "user_QquLLsPbkns5IQ1F5anSK"
        )
          .then(() => {
            console.log("Message has been Sent");
          })
          .catch((error) => {
            console.log(error.text);
          });
        setIsOrder(!isOrder);
        SetCart([]);
        setplans(
          plans.map((item) => {
            if (item.inCart === true) {
              return {
                ...item,
                inCart: !item.inCart,
              };
            }
            return item;
          })
        );
        alert(
          "Your order is submitted and is sent for Admin approval. You can check your order status in profile section"
        );
        history.push("/profile");
        addressRef.current.value = "";
        mobileRef.current.value = "";
      } catch {
        setError("Something went wrong");
      }
    }
  }
  return (
    <div>
      <div className="container-fluid  border-green ">
        <h1 className="text-center text-info">Green Ecsape Journey</h1>
        {cart.length === 0 ? (
          <h1 className="text-primary empty text-center">Empty Cart</h1>
        ) : (
          <div className="container border border-black mt-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>City Name</th>
                  <th>Plan</th>
                  <th>No Of Persons</th>
                  <th>Total</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.city}</td>
                    <td className="text-capitalize">{item.plan}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => decreament(item.id)}
                        disabled={item.persons < 2 || isProceed}
                      >
                        {" "}
                        -{" "}
                      </button>
                      <span className="mx-3">{item.persons}</span>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => increament(item.id)}
                        disabled={isProceed}
                      >
                        +
                      </button>
                    </td>
                    <td>{item.persons * item.price}</td>
                    <td>
                      {" "}
                      <div className="text-center">
                        <span
                          className="mx-2"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleCartDelete(item.id)}
                        >
                          <i className="fas fa-times text-danger fa-2x"></i>
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div>
              <label htmlFor="" className="font-weight-bolder">
                Grant Total::
              </label>
              <label className=" ml-4">{total}</label>
              <br />
              <br />
              <button
                className="btn btn-primary"
                onClick={() => setIsProceed(!isProceed)}
              >
                Proceed
              </button>
              {isProceed && (
                <div className="w-25">
                  <div className="form-group mt-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                      required
                      ref={addressRef}
                    />
                  </div>
                  {error !== "" && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  <div className="form-group mt-2">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Mobile"
                      ref={mobileRef}
                    />
                  </div>
                  {phoneError && (
                    <div className="alert alert-danger" role="alert">
                      {phoneError}
                    </div>
                  )}
                  <div className="card-container">
                    <div className="row s-box">
                      {paymentCompleted ? (
                        <SuccessMessage />
                      ) : (
                        <React.Fragment>
                          <div className="col-md-8 offset-2">
                            <Elements stripe={stripePromise}>
                              <CheckoutForm
                                amount={total}
                                setPaymentCompleted={setPaymentCompleted}
                                setPayId={setPayId}
                              />
                            </Elements>
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                  </div>

                  {/* {paymentCompleted && ( */}
                  <Button
                    as="input"
                    className=""
                    type="submit"
                    value="Submit"
                    disabled={!paymentCompleted}
                    onClick={handleStoreCart}
                  />
                  {/* )} */}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
