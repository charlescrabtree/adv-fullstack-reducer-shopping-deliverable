export default function ShoppingItem({ item, handleSeenChanged }) {
  return <div>
    <input type="checkbox" checked={item.seen} onChange={() => {
      handleSeenChanged(!item.seen);
    }}/>
    {item.id}
    {item.items}
  </div>;
}
