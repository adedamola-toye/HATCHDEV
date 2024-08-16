/* import { MouseEvent } from "react"; */

import { useState } from "react";

//{items:[], heading: string}: we want to be able to pass this to any component so that it can be reusable
interface Props{
  items: string[];
  heading: string;
}

function ListGroup({items, heading}: Props) {
  
  // eslint-disable-next-line prefer-const
  
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const [name, setName] = useState(' ')


  //items = [];
  //const message = items.length === 0 ? <p>No item found</p> : null
  /* const getMessage = () => {
        return items.length === 0 ? <p>No item found</p> : null
   } */

  //Event handler
  /* const handleClick = (event: MouseEvent) => console.log(event); */

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {/* {getMessage} */}
      {/* {message} */}

      {items.length === 0 && <p>No item found</p>}
      {/* Returns 2nd operand if first is truthy */}
      <ul className="list-group">
        {items.map((item, index) => (  //Takes each item in items and transforms it to a list tag. index is to keep track of the index of each
          <li
            className={selectedIndex === index? 'list-group-item active' : 'list-group-item'}
            key={item}
            /* onClick={handleClick} */
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
