import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card"
import Title from "../components/Title";
import { toggleButtonColor } from "../Store/action";
import { Link } from "react-router-dom";

function Categories() {
    const name = ['chat ', 'call', 'study', 'learning', 'call', 'study', 'learning', 'call', 'study', 'learning', 'call', 'study', 'learning', 'call', 'study', 'learning', 'call', 'study', 'learning', 'call', 'study', 'learning', 'call', 'study', 'learning']


    // const buttonColor = useSelector((state) => state.buttonColor);
    // console.log(buttonColor)
    // const dispatch = useDispatch();

    // const handleButtonClick = () => {
    //     dispatch(toggleButtonColor());
    // };


    return (
        <div className="container mt-4">
            <div className="w-75 m-auto shadow">

                <div className="card p-2 ">
                    <div>
                        <h3 className="text-center mt-3 fs-4">Select your interests</h3>
                    </div>
                    <hr />

                    <div className="d-flex justify-content-center" style={{
                        flexWrap: "wrap"
                    }}>
                        {
                            name.map((item, index) => (
                                <Card key={index} title={item} />
                            ))
                        }
                    </div>
                    <button className="btn btn-dark w-25 m-auto mt-3" ><Link className="nav-link " to="/login" >Done</Link>
                    </button>
                </div>

            </div>

        </div>
    )


}

export default Categories;