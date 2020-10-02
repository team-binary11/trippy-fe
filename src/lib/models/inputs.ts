import { Moment } from 'moment';


export interface IInputs {
  departureTime: Moment,
  departureDate: Moment

  source: ILocation;
  destination: ILocation;

  isRoundTrip: boolean;

  returnDate?: Moment;
  returnTime?: Moment;
}

export interface ILocation {
  text: string;
  lat: number;
  long: number;
}


