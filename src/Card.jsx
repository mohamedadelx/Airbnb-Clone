import PropTypes from 'prop-types';
const Card = (props) => {

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
    <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card-image" src= {`../assets/${props.item.coverImg}`} alt="Katie" />
      <div className="card-stats">
        <img className="card-star" src={`../assets/star.png`} alt="starlogo" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • &nbsp;</span>
        <span className="gray">{props.item.location}</span>
      </div>
      <h2 className='card--title'>{props.item.title}</h2>
      <p className='card-price'><span className="bold-dollar">From {props.item.price}</span> / person</p>
    </div>
  );
};


// to avoid warnings
Card.propTypes = {
    item: PropTypes.string.isRequired,
  };

export default Card;
