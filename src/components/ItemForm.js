import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [namee, setName] = useState("")
  const [cat, setCat] = useState("Produce")

    function onFormName(e){
      setName(e.target.value)
    }

    function onFormCat(e) {
      setCat(e.target.value)
    }
  

  function onSubmit() {
    onItemFormSubmit( {id: uuid(), name: namee, category: cat})
  }
  

  return (
    <form onSubmit={onSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={onFormName} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={onFormCat} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
