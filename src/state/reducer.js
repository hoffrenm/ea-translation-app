export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: {
          id: action.payload.id,
          name: action.payload.username
        }
      };
    case "SET_TRANSLATIONS":
      return {
        ...state,
        translations: [
          ...action.payload
        ]
      };
    case "SET_TRANSLATE":
      return {
        ...state,
        translate: action.payload
      };
    case "ADD_TRANSLATIONS":
      return {
        ...state,
        translations: [
          ...state.translations,
          action.payload.newTranslation
        ]
      };
    case "CLEAR_TRANSLATIONS":
      return {
        ...state,
        translations: []
      };
    default: return state;
  }
};

export const setUser = user => {
  console.log('SET_USER', user);
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const setTranslations = translations => {
  return {
    type: "SET_TRANSLATIONS",
    payload: translations
  };
};

export const setTranslate = input => {
  return {
    type: "SET_TRANSLATE",
    payload: input
  };
};
