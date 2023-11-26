import data from './data.json';

function statisticELem ({title,data}) {
  return map.stats(elem => (
    <>
      <section class="statistics">
        <h2 class="title">{title}</h2>
        <ul>
          <li class="item" key={elem.id}>
            <span class="label">{elem.label}</span>
            <span class="percentage">{elem.percentage}</span>
          </li>
        </ul>
      </section>
    </>
  ));
}
