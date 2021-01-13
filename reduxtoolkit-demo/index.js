import { createStore, applyMiddleware } from "https://unpkg.com/redux@4.0.5/es/redux.mjs";

const BUTTON_CLICKED = "BUTTON_CLICKED";
const DIV_VISIBLE = "DIV_VISIBLE";

const initialState = {
  buttonVisible: false,
  divVisible: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_CLICKED:
      return {
        ...state,
        buttonVisible: action.payload,
      };
    case DIV_VISIBLE:
      return {
        ...state,
        divVisible: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

store.subscribe(() => {
  const div = document.getElementById("my-div");
  if (store.getState().divVisible) {
    div.style.display = "block";
  }
  else {
    div.style.display = "none";
  }
});

const myButton = document.getElementById("my-button");
myButton.addEventListener("click", function () {
  const buttonClickedAction = visible => {
   return {
     type: BUTTON_CLICKED,
     payload: visible
  };
}
  const divVisibleAction = visible => {
    return {
      type: DIV_VISIBLE,
      payload: visible
    }
  };

  store.dispatch(buttonClickedAction(!store.getState().buttonClicked));
  store.dispatch(divVisibleAction(!store.getState().divVisible));
});
