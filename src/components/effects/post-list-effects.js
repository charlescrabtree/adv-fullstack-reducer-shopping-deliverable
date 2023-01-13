import {
  postLIstLoadSuccessAction,
  postListLoadStartAction,
  postListLoadErrorAction,
} from '../actions/post-list-actions';
import { getShoppingListItems } from '../../services/shopping-list-items';

export const getItemsEffect = async (dispatch) => {
  dispatch(postListLoadStartAction());
  try {
    const items = await getShoppingListItems();
    dispatch(postLIstLoadSuccessAction(items));
  } catch (error) {
    dispatch(postListLoadErrorAction(error));
  }
};
