import React, { useRef, useState } from "react";
import { Button, ButtonGroup,Select  } from '@chakra-ui/react'

const Pagination = () => {
  const [page, setpage] = useState(1)
  const [limit, setlimit] = useState(3)
  const id = useRef(null)

  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  const handlePage = (p) => {
   id.current = p
   setpage(p)
  }
  const handleLimit = (value) => {
    setlimit (value)
  }

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick={() =>handlePage(1)}>First</Button>
      <Button data-cy="pagination-previous-button" onClick={() =>handlePage(p-1)}>Previous</Button>
      <Select data-cy="pagination-limit-select" name="limit" onChange={(e) =>handleLimit(e.target.value)}>
        <option data-cy="pagination-limit-3" value="3">3</option>
        <option data-cy="pagination-limit-6" value="6">6</option>
        <option data-cy="pagination-limit-9" value="9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={() =>handlePage(p+1)}>Next</Button>
      <Button data-cy="pagination-last-button" onClick={() =>handlePage(1)}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
