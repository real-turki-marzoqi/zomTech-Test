
import '../../Styles/costumBtns.css'

// eslint-disable-next-line react/prop-types
const CostumBtn = ({text}) => {
  return (
    <div className="btn-container">
    <div className="costum-button1 type--C">
      <div className="button__line"></div>
      <div className="button__line"></div>
      <span className="button__text">{text}</span>
      <div className="button__drow1"></div>
      <div className="button__drow2"></div>
    </div>
  </div>
  
  )
}

export default CostumBtn
