import '../styles/Jumbotron.css'

function Jumbotron(data) {
  const imageUrl = 'images/backgrounds/' + data.jumbotron.picture

  return (
    <>
      <div
        className="jumbotron"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl}) no-repeat`,
        }}
      >
        <div className="jumbotron-content">
          {data.jumbotron.title != '' && (
            <div className="jumbotron-content-text">{data.jumbotron.title}</div>
          )}
        </div>
      </div>
    </>
  )
}

export default Jumbotron
