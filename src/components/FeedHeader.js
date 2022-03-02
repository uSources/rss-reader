import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import { Order } from './Order';
import { Searchbar } from './Searchbar';

export const FeedHeader = ({ orderData, searchText }) => {
  return (
    <div className='flex flew-row items-center'>
      <div className='w-60'>
        <Order selectOrder={orderData}></Order>
      </div>
      <div className='grow'>
        <Searchbar setSearchtext={searchText}></Searchbar>
      </div>
      <Link to='/config'>
        <Icon icon='⚙'></Icon>
      </Link>
    </div>
  );
};
