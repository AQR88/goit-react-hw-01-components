import data from './data.json';
import css from './statistics.module.css';
import getRandomColor from './statistics.js';

function StatisticElem({ title, stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.list}>
        {stats.map(elem => (
          <li
            className={css.item}
            key={elem.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={css.label}>{elem.label}</span>
            <span className={css.percentage}>{elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Statistics() {
  return <StatisticElem title="UPLOAD STATS" stats={data} />;
}
