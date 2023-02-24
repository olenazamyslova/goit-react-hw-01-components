import PropTypes from 'prop-types';
import {StatCard} from './Statistics.styled'

const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};

export default function Statistics({ title, stats }) {
  return (
    <StatCard>
        <h2 className="statisticTitle">{title} </h2>

      <ul className="statisticList">
        {stats.map(({ id, label, percentage }) => (
          <li
            className="statisticListItem"
            key={id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className="statisticsSpan" value={label}>{label}</span>
            <span className="statisticsSpan">{percentage}%</span>
          </li>
        ))}
      </ul>
    </StatCard>
  );

}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
