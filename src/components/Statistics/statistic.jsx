import css from './statistics.module.css';
import getRandomColor from './statistics.js';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
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
