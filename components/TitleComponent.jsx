
const TitleComponent = ({ titleText, subtitleText, subtitleTextSecond, colorText, backgroundText, backgroundColor }) => {
  return (
    <div className="title-container">
      <div className={`text-background ${backgroundColor}`}>{backgroundText}</div>
      <div className="text-wrapper">
        <p className="text-color">{colorText}</p>
        <h2 className="text-title">{titleText}</h2>
        <p className="text-subtitle">
          {subtitleText}
        </p>
        {subtitleTextSecond && (<p className="text-subtitle">
          {subtitleTextSecond}
        </p>)}
      </div>
    </div>
  )
}

export default TitleComponent
