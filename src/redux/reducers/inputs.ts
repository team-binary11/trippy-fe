import moment from 'moment';

import { IInputs } from './../../lib/models/inputs';
import { InputActions, InputActionTypes} from '../actions';
const initial_state: IInputs = {
  departureTime: new Date(),//moment(),
  departureDate : new Date(),
  source: {
    text: "",
    lat: 0,
    long: 0
  },
  destination: {
    text: "",
    lat: 0,
    long: 0,
  },
  isRoundTrip: false,
  returnDate: moment(),
  returnTime: moment()
};

export default (state: IInputs = initial_state, action: InputActions) => {
  switch (action.type) {
    case InputActionTypes.SetInputs: return {...state, ...action.payload};
    default: return state;
  }
}