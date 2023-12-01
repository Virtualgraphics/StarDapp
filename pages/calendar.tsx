import { Default } from '../components/layouts/Default';
import { Calendar } from '../components/templates/adventcalendar';
import type { NextPage } from 'next';

const CALENDAR: NextPage = () => {
  return (

    <Default pageName="CALENDAR">
    <Calendar/>
  </Default>
  
  );
};

export default CALENDAR;