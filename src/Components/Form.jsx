import { useState } from "react";
import Modal from "./Modal/Modal";
import "../Styles/Filter.css";
import "../Styles/Fridge.css";
import Backdrop from "./Modal/Backdrop";

const Form = (props) => {
  const [productName, setProductName] = useState("");
  const [productAmount, setProductAmount] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDate, setProductDate] = useState("");
  const [showModal, setShowModal] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const userObject = {
      productName,
      productAmount,
      productCategory,
      productDate,
      show: true,
      titleTxt: "",
      btnText: "",
    };
    if (
      productName === "" ||
      productAmount === "" ||
      productCategory === "" ||
      productDate === ""
    ) {
      setShowModal(true);
      let sus = new Audio("./sus.mp3");
      let boom = new Audio("./vine-boom.mp3");
      sus.play();
      boom.play();
      return;
    }
    props.setProductItem([...props.productItem, userObject]);
    setProductName("");
    setProductAmount("");
    setProductCategory("");
    setProductDate("");
    return;
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setProductName(e.target.value)}
          type="text"
          placeholder="Product name"
          value={productName}
        />
        <input
          onChange={(e) => setProductAmount(e.target.value)}
          type="number"
          value={productAmount}
          placeholder="Product amount"
        />
        <input
          onChange={(e) => setProductDate(e.target.value)}
          type="date"
          value={productDate}
        />
        <input
          onChange={(e) => setProductCategory(e.target.value)}
          type="text"
          value={productCategory}
          placeholder="Product category"
        />
        <button className="submit-item">Submit</button>
        {showModal && (
          <Modal titleTxt="Please fill in every input" btnText="Dismiss"  hideModal={hideModal}/>
        )}

        {showModal && <Backdrop show hideModal={hideModal}/>}
      </form>
    </>
  );
};

export default Form;
