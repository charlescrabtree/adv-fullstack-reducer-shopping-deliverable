export default function ShoppingListForm({
  body,
  deleteItem,
  handleDeleteItem, 
  handleSubmitItem,
  onEditItem,
}) {
  return <form className="form" onSubmit={(e) => {
    e.preventDefault();
    handleSubmitItem(body);
  }}>
    <textarea value={body} onChange={(e) => onEditItem(e.target.value)}/>
    <div className="styles">
      <button type="submit">add item</button>
      { deleteItem 
        ? <button onClick={handleDeleteItem}>delete item</button>
        : ''
      }
    </div>
  </form>;
}
