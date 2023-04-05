const BioText = ({ text }) => {
console.log(typeof text,'aaaaa')

    return (
        <div className="d-flex justify-content-center align-content-center">
        {/* // <p className="text-center dispaly-6color-base-90 mb-4 mx-auto max-w-100 m:max-w-75 ">{text} </p> */}
        {Array.prototype.map.call(text,(ele) => (
            <ul  >
                <li className="fs-5">{ele}</li>
            </ul>
          ))}
        </div>

        )
}

export default BioText;