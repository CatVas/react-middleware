export default function({ dispatch }) {
  return next => action => {
    if(!action.payload || !action.payload.then) {
      return next(action);
    }

    action.payload
      .then(res => {
        const newAction = { ...action, payload: res.data };console.log(newAction);
        dispatch(newAction);
      });
  };
}