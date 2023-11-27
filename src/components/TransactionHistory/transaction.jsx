import transactions from './transactions.json';
import css from './transactions.module.css';

function HistorySection({ items }) {
  return (
    <>
      <table className={css.history}>
        <thead className={css.head}>
          <tr className={css.tr}>
            <th className={css.title}>Type</th>
            <th className={css.title}>Amount</th>
            <th className={css.title}>Currency</th>
          </tr>
        </thead>

        <tbody className={css.tbody}>
          {items.map(({ id, type, amount, currency }, index) => (
            <tr
              key={id}
              style={{ backgroundColor: index % 2 === 0 ? 'white' : '#c9c3c3' }}
            >
              <td className={css.td}>{type}</td>
              <td className={css.td}>{amount}</td>
              <td className={css.td}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default function TransactionHistory() {
  return <HistorySection items={transactions} />;
}
