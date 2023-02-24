import PropTypes from 'prop-types';
import {Transactions} from './TransactionHistory.styled.js'

export default function TransactionHistory({ items }) {
  return (
    <Transactions>
      <table className="TransTable">
        <thead>
    <tr>
      <th className="TableHead">Type</th>
      <th className="TableHead">Amount</th>
      <th className="TableHead">Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map(({ id, type, amount, currency }) => (
    <tr>
      <td className="TableCells">{type}</td>
      <td className="TableCells">{amount}</td>
      <td className="TableCells">{currency}</td>
    </tr>
    ))}
  </tbody>
      </table>
    </Transactions>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
}
