import React from "react";
import { v4 as uuid } from "uuid";
import items from "../data/items";

function ItemForm({onItemFormSubmit}) {
  function handleSubmit(event){
    event.preventDefault()

    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: event.target.name.value,
      category: event.target.category.value,
    };

    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
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
