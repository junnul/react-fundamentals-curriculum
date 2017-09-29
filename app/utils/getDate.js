import moment from 'moment';

export default timestamp => moment.unix(timestamp).format('dddd D.M.');
