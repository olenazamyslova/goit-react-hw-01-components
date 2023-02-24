import Profile from './Profile/Profile';
import user from '../srcData/user.json';
import Statistic from './Statistics/Statistics';
import data from '../srcData/data.json'
import {FriendList} from './FriendList/FriendList';
import friends from '../srcData/friends.json';
import TransactionHistory from './Transactions/TransactionHistory';
import transactions from '../srcData/transactions.json';


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
