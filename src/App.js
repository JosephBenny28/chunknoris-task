import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import "./App.css";

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/categories"
      );
      setCategories(response.data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Chuck Norris</h1>
      <div className="row">
      <div className="category-grid ">
        {categories.map((category) => (
          <CategoryCard key={category} category={category} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default App;
