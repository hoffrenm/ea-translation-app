import { createContext, useContext, useReducer } from 'react';

// you can introduce variables to context here.
// objects, arrays and primitive types are fine
const initialState = {
  user: {},
  translations: [],
  translate: ''
};

const StateContext = createContext([
  initialState,
  () => initialState
]);

export const StateProvider = ({ reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

// you can refer to variables in context by using useStateValue import e.g.
// const [{variableName}, dispatch] = useStateValue();
// const [{user, translations}] = useStateValue();
// const [, dispatch] = useStateValue();
export const useStateValue = () => useContext(StateContext);
