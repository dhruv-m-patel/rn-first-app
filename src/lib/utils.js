import { format } from 'date-fns';

export const toReadableDate = (text) => format(new Date(text), 'MMMM dd, yyyy hh:mm a');
