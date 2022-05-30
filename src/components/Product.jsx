import React, { useEffect, useState } from "react";
import { Stack, HStack, VStack,Text,Image,Box,Heading,Tag,TagLabel } from '@chakra-ui/react'

const Product = ({page,setpage,limit,setlimit}) => {
  const [list, setList] = useState([])
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  useEffect (()=>{
    fetch(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
    .then((r)=>r.json())
    .then((d)=>{
      
      setList(d)
    })
  },[page,limit])

  return (
    <Stack data-cy="product">
      {
        list.map((item)=>{
          
        })
      }
      <Image data-cy="product-image" />
      <Text data-cy="product-category"></Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
  );
};

export default Product;
