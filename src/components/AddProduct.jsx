import React, { useState ,useDisclosure } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Select,
  RadioGroup,
  Radio

} from '@chakra-ui/react'

const AddProduct = () => {
  
  const [form, setForm] = useState ({})
 const [data, setData] = useState([])
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;

  const handleOnChange = (e) =>{
    let {type,name,value} = e.target 
     
    setForm({
      ...form,
      [name] : value,
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch("  http://localhost:8080/products",{
      method : "POST",
      body : JSON.stringify({
        name :form.name,
        category: form.category,
        gender : form.gender,
        price : form.price,
      }),
     headers : {
       "content-type" : "application/json"
     }
    })
    .then((res)=>{return res.json()})
    .then((res)=>{
      console.log(res)
      setData([...data,res])

    })
  }

  // function InitialFocus() {
  //   const { isOpen, onOpen, onClose } = useDisclosure()
  
  //   const initialRef = React.useRef()
  //   const finalRef = React.useRef()

  return (
    <>
      <Button my={4}  data-cy="add-product-button">Add New Products</Button>
      <Modal >
      
      {/*onClick={onOpen} initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}> */}
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" type="text" name="name" value={form.name} placeholder="Title" onChange={handleOnChange}  />
          <Select data-cy="add-product-category" name="category" onChange={handleOnChange}>
            <option data-cy="add-product-category-shirt" value="shirt" >Shirt</option>
            <option data-cy="add-product-category-pant" value="pant">Pant</option>
            <option data-cy="add-product-category-jeans" value="jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender"  type="radio" name="gender" onChange={handleOnChange}>
            <Radio data-cy="add-product-gender-male" name="gender" value="male">Male</Radio>
            <Radio data-cy="add-product-gender-female" name="gender" value="female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex" name="gender" value="unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" type="number" name="price" value={form.price} placeholder="Price" onChange={handleOnChange}/>
          <Button data-cy="add-product-submit-button" type="submit" onClick={handleOnSubmit}>Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};


export default AddProduct;
