// Fake data in an array of objects; .map() turns each into a list row.
const transactions = [
  { id: 1, name: 'Grocery Store', amount: -42.5 },
  { id: 2, name: 'Paycheck', amount: 1200 },
  { id: 3, name: 'Coffee Shop', amount: -4.75 },
  { id: 4, name: 'Cash back reward', amount: 3.1 },
];

function Dashboard() {
  // reduce() adds up all amounts to get the balance
  const balance = transactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <section className="page">
      <h2>Dashboard</h2>
      <div className="balance">
        <span>Available balance</span>
        {/* toFixed(2) = always show 2 decimals */}
        <strong>${balance.toFixed(2)}</strong>
      </div>
      <h3>Recent activity</h3>
      <ul className="tx-list">
        {transactions.map((t) => (
          <li key={t.id}>
            <span>{t.name}</span>
            {/* class changes color depending on money in vs out */}
            <span className={t.amount < 0 ? 'out' : 'in'}>
              {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Dashboard;
