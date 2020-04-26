import { createAction, handleActions } from 'redux-actions';

export const actionTypes = {
  toggleAuthorSelectStatus: 'filter/toggle_author_select_status',
};

export const toggleAuthorSelectStatus = createAction(
  actionTypes.toggleAuthorSelectStatus
);

interface IFilterReducer {
  selectedAuthorIds: string[];
}
type ToggleAuthorSelectStatusPayload = string;
type CombinedPayloads = ToggleAuthorSelectStatusPayload;

const defaultState: IFilterReducer = {
  selectedAuthorIds: [],
};

export default handleActions<IFilterReducer, CombinedPayloads>(
  {
    [actionTypes.toggleAuthorSelectStatus]: (
      state,
      { payload }
    ): IFilterReducer => {
      const authorIds = state.selectedAuthorIds.slice();

      if (authorIds.includes(payload)) {
        return {
          ...state,
          selectedAuthorIds: authorIds.filter((id) => id !== payload),
        };
      }

      authorIds.push(payload);
      return {
        ...state,
        selectedAuthorIds: authorIds,
      };
    },
  },
  defaultState
);
