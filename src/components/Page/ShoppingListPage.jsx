import ShoppingListForm from '../Shopping/ShoppingListForm.jsx';
import { getItemsEffect } from '../effects/item-list-effects.js';
import { useContext, useEffect } from 'react';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    getItemsEffect(dispatch);
  }, []);
  const onBodyChanged = (body) => {
    dispatch(itemListCandidateBodyChanged(body));
  };
  const
  return <section>
    <h1>My Shopping List</h1>
    <ShoppingListForm />
  </section>;
}
