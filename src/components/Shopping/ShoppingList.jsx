import ShoppingItem from './ShoppingPost';

export default function ShoppingItemList({
  itemList,
  handleSeenChangedByItemId,
}) {
  return <ol>
    {itemList.map(item => {
      return <li key={item.id}>
        <ShoppingItem item={item} handleSeenChanged={(seen) => {
          handleSeenChangedByItemId(item.id, seen);
        }}/>
      </li>;
    })}
  </ol>;
}
