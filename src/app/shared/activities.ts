import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
  {
    'id' : 1,
    'name' : 'Main Bike Trails',
    'date' : new Date('06/01/2017'),
    'distance' : 16.2,
    'comments' : 'Nice day, cool temps',
    'gpxData': '../../assets/gpx/1.gpx'
  },
  {
    'id': 2,
    'name': 'Industrial Park',
    'date': new Date('06/04/2017'),
    'gpxData': '../../assets/gpx/1.gpx',
    'distance': 1.6,
    'comments': 'Cool and windy.'
  },
  {
    'id': 3,
    'name': 'Forest Route',
    'date': new Date('06/05/2017'),
    'gpxData': '../../assets/gpx/2.gpx',
    'distance': 3.2,
    'comments': 'Evening run.'
  }
];
