import React from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;

  return (
    <>
    <AddProduct />
    <Product />
    <Pagination  />
    <Flex>
      {/*  AddProduct */}
     


      <Grid>{/* List of Products */}
      {/* <Product /> */}
      </Grid>


      {/* Pagination */}
      {/* <Pagination /> */}
    </Flex>
    </>
  );
};

export default Products;
