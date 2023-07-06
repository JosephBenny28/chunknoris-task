import React, { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { GrClose } from "react-icons/gr";

const CategoryCard = ({ category }) => {
  const [joke, setJoke] = useState("");
  const [open, setOpen] = useState(false);

  const getJoke = async () => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    setJoke(response.data.value);
  };

  const handleClick = async () => {
    setOpen(true);
    await getJoke();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNextJoke = () => {
    getJoke();
  };

  return (
    <>
      <div className="category-card" onClick={handleClick}>
        <h6 className="category-title">{category}</h6>
        <p className="category-description">Unlimited jokes on {category}</p>
      </div>
      {open && (
        <div className="modal-overlay ">
          <div className="modal-content">
            <div className="top">
              <h1 className="header ">{category}</h1>
              
              <Button  variant=" " className=" bg-none "  onClick={handleClose}><GrClose/></Button>
            </div>
            <div className="joke ">
            <p >{joke}</p>
            
              <Button variant="primary " className="next-joke-button bg-none btn" onClick={handleNextJoke}>
                Next Joke
              </Button>
            
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryCard;
