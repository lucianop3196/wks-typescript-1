interface stateI {
  counter: number;
}
interface actionI {
  type: string;
  payload?: object;
}

const initialState: stateI = {
  counter: 1,
};

export default function reducer(state: stateI = initialState, action: actionI) {
  return state;
}
