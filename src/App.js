import Profile from './Components/Profile/Profile'
import Statistics from './Components/Statistics/Statistics'
import FriendList from './Components/FriendList/FriendList'
import TransactionHistory from './Components/Transactions/TransactionHistory'
import './CSS/App.css'
import data from './Data/data.json'
import user from './Data/user.json'
import friends from './Data/friends.json'
import transactions from './Data/transactions.json'


function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} /> 
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div> 
  );
}

export default App;
