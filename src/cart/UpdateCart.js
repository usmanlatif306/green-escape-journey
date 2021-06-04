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
function UpdateCart(props) {
  const { plans, setplans, currentUser, orders, isOrder, setIsOrder, user } =
    useAuth();
  //   console.log(props.match.params.id);
  let id = props.match.params.id;
  let order = orders.filter((item) => item.id === id);
  const [cart, setCart] = useState(order);
  const [total, setTotal] = useState(cart[0].persons * cart[0].price);
  const [newTotal, setNewTotal] = useState(0);
  const [error, setError] = useState(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [isRefund, setIsRefund] = useState(false);
  const [refundMsg, setRefundMsg] = useState(null);
  const [refundErr, setRefundErr] = useState(null);
  const [isProceed, setIsProceed] = useState(false);
  const [payId, setPayId] = useState("");
  const history = useHistory();
  useEffect(() => {
    var subTotal = 0;
    cart.map((item) => {
      return (subTotal = subTotal + item.persons * item.price);
    });
    setNewTotal(subTotal - total);
  }, [cart]);
  function increament(id) {
    setCart(
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
    setCart(
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
  function addToCart() {
    try {
      cart.map((item) => {
        var orderRef = db.collection("orders").doc(item.id);
        orderRef.update({
          persons: item.persons,
          total: item.persons * item.price,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      });
    } catch {
      setError("Something went wrong");
    }
  }
  async function handleRefundHandler(id, amount) {
    let data = {
      id: id,
      amount: amount,
    };
    await fetch(`http://localhost:4000/refund`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsRefund(true);
        setPaymentCompleted(true);
        setRefundMsg(
          `Your Payment for Rs ${Math.abs(newTotal)} has been Refunded.`
        );
      })
      .catch((error) => {
        setRefundErr("Something went wrong while refunding payment.");
      });
  }
  async function handleStoreCart(e) {
    e.preventDefault();
    setError();
    addToCart();
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
      setPaymentCompleted(false);
      setIsRefund(false);
      alert("Your order has been updated");
      history.push("/profile");
    } catch {
      setError("Something went wrong");
    }
  }
  return (
    <div className="container-fluid  border-green ">
      <h1 className="text-center text-info">Green Ecsape Journey</h1>
      <h1 className="text-primary text-center">Update Cart</h1>
      <div className="container border border-black">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>NO</th>
              <th>City Name</th>
              <th>Plan</th>
              <th>No Of Persons</th>
              <th>Total</th>
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
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="">
          <label htmlFor="" className="font-weight-bolder">
            New Total::
          </label>
          <label className=" ml-4">{newTotal}</label>
        </div>
        <br />
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <button
          className="btn btn-primary"
          onClick={() => setIsProceed(!isProceed)}
          disabled={newTotal === 0}
        >
          Proceed
        </button>
        {isProceed && (
          <>
            {newTotal < 0 ? (
              <>
                <div className="my-3">
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      handleRefundHandler(cart[0].paymentID, Math.abs(newTotal))
                    }
                    disabled={isRefund}
                  >
                    Refund Rs:{Math.abs(newTotal)}
                  </button>
                </div>
                {refundMsg && (
                  <div className="alert alert-success" role="alert">
                    {refundMsg}
                  </div>
                )}
                {refundErr && (
                  <div className="alert alert-danger" role="alert">
                    {refundErr}
                  </div>
                )}
              </>
            ) : (
              <div className="card-container">
                <div className="row s-box">
                  {paymentCompleted ? (
                    <SuccessMessage />
                  ) : (
                    <React.Fragment>
                      <div className="col-md-8 offset-2">
                        <Elements stripe={stripePromise}>
                          <CheckoutForm
                            amount={newTotal}
                            setPaymentCompleted={setPaymentCompleted}
                            setPayId={setPayId}
                          />
                        </Elements>
                      </div>
                    </React.Fragment>
                  )}
                </div>
              </div>
            )}

            <Button
              as="input"
              className=""
              type="submit"
              value="Submit"
              disabled={!paymentCompleted}
              onClick={handleStoreCart}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default UpdateCart;
