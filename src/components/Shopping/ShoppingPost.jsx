export default function ShoppingItem({ item, handleSeenChanged }) {
  return <div>
    <input type="checkbox" value={item.seen} onChange={() => {
      handleSeenChanged(!item.seen);
    }}/>
    {item.id}
    {item.body}
  </div>;
}
