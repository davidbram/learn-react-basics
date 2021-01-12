import { createStore, applyMiddleware } from "https://unpkg.com/redux@4.0.5/es/redux.mjs";

const BUTTON_CLICKED = "BUTTON_CLICKED";
const DIV_VISIBLE = "DIV_VISIBLE";

const initialState = {
  buttonVisible: "no",
  divVisible: "no",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_CLICKED:
      return {
        ...state,
        buttonVisible: "yes",
      };
    case DIV_VISIBLE:
      return {
        ...state,
        divVisible: "yes",
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
  if (store.getState().divVisible === "yes") {
    const div = document.getElementById("my-div");
    div.style.display = "block";
  }
});

const myButton = document.getElementById("my-button");
myButton.addEventListener("click", function () {
  const buttonClickedAction = {
    type: BUTTON_CLICKED,
  };

  const divVisibleAction = {
    type: DIV_VISIBLE,
  };
  store.dispatch(buttonClickedAction);
  store.dispatch(divVisibleAction);
});
