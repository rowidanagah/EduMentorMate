
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
function Categories() {
    // http://localhost:8000/api/tags/
    const [tagsData, setTagsData] = useState([]);
    const token = localStorage.getItem('token');
    useEffect(() => {
        let x = axios.get('http://127.0.0.1:8000/api/tags/', {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
            .then(response => {
                setTagsData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log( error);
            });
    }, []);

    // =================================================================
    const [selection, setSelection] = useState([]);
    const handleCheckboxChange = (event) => {
        console.log('handelclick', event.target.value);
        const value = event.target.value;

        if (selection.includes(value)) {
            // If the value is already in the selection array, remove it
            const updatedSelection = selection.filter(item => item !== value);
            setSelection(updatedSelection);
            axios.patch('http://127.0.0.1:8000/api/update', {
                favourite_bins: updatedSelection,
            }, {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
                .then(response => {
                    console.log('Selection updated successfully');
                })
                .catch(error => {
                    console.log('Error updating selection', error);
                });
        } else {
            // If the value is not in the selection array, add it
            const updatedSelection = [...selection, value];
            setSelection(updatedSelection);
            axios.patch('http://127.0.0.1:8000/api/update', {
                favourite_bins: updatedSelection,
            }, {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
                .then(response => {
                    console.log('Selection updated successfully');
                })
                .catch(error => {
                    console.log('Error updating selection', error);
                });
        }
    };

    const history = useHistory();
    function validateForm() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const checkedBoxes = Array.prototype.slice.call(checkboxes).filter(checkbox => checkbox.checked);

        if (checkedBoxes.length === 0) {
            alert('Please select at least one checkbox.');
            return false;
        }
        history.push('/home')
        // Other form validation logic goes here...

        return true;
    }
// ============================>(form submit)
    const handleFormSubmit = (event) => {
        event.preventDefault();
        validateForm()
    }

    return (
        <>
            <div className=" p-5 background">

                <div className="w-75 m-auto shadow">
                    <div className="card p-2 ">
                        <div>
                            <h3 className="text-center mt-3 fs-4">Select your interests</h3>
                        </div>
                        <hr />

                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <div className="m-3 d-flex align-content-center flex-wrap">
                                {tagsData.map((item, index) => (
                                    <div className="m-2" key={index}>
                                        <div className="btn-group-toggle" data-toggle="buttons">
                                            <label style={{ backgroundColor: '#074f57' }} className={`btn text-light ${selection.includes(item.caption) ? 'active' : ''}`}>
                                                <input
                                                    type="checkbox"
                                                    value={item.caption}
                                                    checked={selection.includes(item.caption)}
                                                    onChange={handleCheckboxChange}
                                                />
                                                {item.caption}
                                            </label>
                                        </div>
                                    </div>
                                ))}
</div>
<hr />
                               <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-dark w-25 ms-3 mt-3"
                                    >
                                        Done
                                    </button>
                               </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Categories;
