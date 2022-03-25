import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Products } from "../../actions/productsActions";
import ErrorMessage from "../../helpers/ErrorMessage";
import Loading from "../../helpers/Loading";
import SideBar from "../Home/SideBar";
import SingleProduct from "../Home/SingleProduct";
import classes from '../Home/home.module.css'

const Home = () => {

 

const dispatch = useDispatch();

const productList = useSelector((state) => state.productList);

const { products, error, loading } = productList

console.log(products);
useEffect(() => {
    dispatch(Products());
},[dispatch])

  return (
    <div className ={classes.home}>
      {error && <ErrorMessage variant={error.info?"info":"danger"}>{error}</ErrorMessage>}
      {loading && <Loading />}
      <SideBar />
      <div className={classes.productContainer}>
        {
          products.map((product) => {
            return <SingleProduct product={product} key={product._id} />
          })
        }
      </div>
    </div>
  );
};

export default Home;
