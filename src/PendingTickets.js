import React from 'react';
import TicketList from './TicketList';

const PendingTickets = () => {
  return <TicketList parm1={'isComplete'} bool={false} />
}
export default PendingTickets
