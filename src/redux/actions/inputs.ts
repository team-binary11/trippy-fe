import { IInputs } from './../../lib/models/inputs';

export enum InputActionTypes {
  SetInputs = '[Inputs] Set Input',
}

export interface SetInputsAction {
  type:  InputActionTypes.SetInputs;
  payload: Partial<IInputs>;
}

export type InputActions = SetInputsAction;