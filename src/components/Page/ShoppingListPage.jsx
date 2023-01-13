import ShoppingItemList from '../Shopping/ShoppingList.jsx';
import { Context } from '../../ListProvider.jsx';
import { useContext, useEffect } from 'react';
import ShoppingListForm from '../Shopping/ShoppingListForm.jsx';
import { getItemsEffect } from '../effects/item-list-effects.js';
import { itemListSeenChangedAction,
  itemListCandidateBodyChanged } from '../../actions/item-list-actions.js';
import { createShoppingListItem } from '../../services/shopping-list-items.js';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    getItemsEffect(dispatch);
  }, []);
  const onBodyChanged = (body) => {
    dispatch(itemListCandidateBodyChanged(body));
  };
  const dispatchSeenChanged = (itemId, seen) => {
    dispatch(itemListSeenChangedAction(itemId, seen));
  };
  return <section>
    <h1>My Shopping List</h1>
    <ShoppingListForm
      body={state.itemCandidateBody}
      onBodyChanged={onBodyChanged}
      onSubmit={async (body) => {
        console.log(body);
        await createShoppingListItem({ items:body });
        getItemsEffect(dispatch);
        dispatch(itemListCandidateBodyChanged(''));
      }} 
    />
    { state.loadingMode === 'loading'
      ? <span>Loading Items!</span>
      : <ShoppingItemList
        itemList={state.itemList}
        handleSeenChangedByItemId={(itemId, seen) => {
          dispatchSeenChanged(itemId, seen);
        }}
      />
    }
  </section>;
}
