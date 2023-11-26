import data from './data.json';

function StatisticElem({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul>
        {stats.map(elem => (
          <li className="item" key={elem.id}>
            <span className="label">{elem.label}</span>
            <span className="percentage">{elem.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Statistics() {
  return <StatisticElem title="Upload stats" stats={data} />;
}
