import ShoppingItem from './ShoppingPost';

export default function ShoppingPostList({
  itemList,
  handleSeenChangedByItemId,
}) {
  return <ol>
    {itemList.map(item => {
      return <li key={itemList.id}>
        <ShoppingItem item={item} handleSeenChanged={(seen) => {
          handleSeenChangedByItemId(item.id, seen);
        }}/>
      </li>;
    })}
  </ol>;
}
