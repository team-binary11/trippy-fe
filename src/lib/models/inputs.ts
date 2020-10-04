import { Moment } from 'moment';


export interface IInputs {
  departureTime: Date | Date[],//Moment,
  departureDate: Date | Date[],//Moment

  source: ILocation;
  destination: ILocation;

  isRoundTrip: boolean;

  returnDate?: Moment;
  returnTime?: Moment;
}

export interface ILocation {
  text: string;
  lat?: number;
  long?: number;
}


