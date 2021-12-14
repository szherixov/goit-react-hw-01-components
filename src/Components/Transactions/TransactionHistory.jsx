import PropTypes from 'prop-types';
import styles from './transactions.module.css'

function Transactions({items}) {
    const el = items.map(transaction => 
        <tr key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </tr>)
                 
        return (<table className={styles.table}>
            <thead>
                <tr className={styles.head}>
                    <th className={styles.headItem}>Type</th>
                    <th className={styles.headItem}>Amount</th>
                    <th className={styles.headItem}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {el}
            </tbody>
        </table>);
    }

export default Transactions;

Transactions.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }),
    ),
  };