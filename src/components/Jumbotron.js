import '../styles/Jumbotron.css'

function Jumbotron(data) {
  const imageUrl = 'images/backgrounds/' + data.jumbotron.picture

  return (
    <>
      <div className="jumbotron">
        <div
          className="jumbotron-img"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="jumbotron-content">
          {data.jumbotron.title !== '' && (
            <div className="jumbotron-content-text">{data.jumbotron.title}</div>
          )}
        </div>
      </div>
    </>
  )
}

export default Jumbotron
