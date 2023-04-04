import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Route, Redirect } from 'react-router-dom';

function Categories() {
// http://localhost:8000/api/tags/
// ---------------------
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
                console.log('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',error);
            });
    }, []);
// =================================================================
    const [selection, setSelection] = useState([]);

    const handelclick = event => {
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

    function handelsetselection(e){
        e.preventDefault();
        axios.patch('http://127.0.0.1:8000/api/update', {
            data: {
                favourite_bins: selection,
            }
        }, {
            headers: {
                Authorization: `Token ${token}`,
                // Authorization: 'Token f1c77bd4d39e0857771ddbda1dae548d0f248389',

            },
        })
            .then(response => {
                // setSelection(response.data.favourite_bins);
                // console.log("jooooooo", response.data.favourite_bins);
                console.log("selected")
            })
            .catch(error => {
                console.log('selection', error);
            });
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

                    <form onSubmit={handelsetselection}>
                        
                        <div className="form-group">
                            <select 
                                className="selectpicker form-control"
                                data-style="btn-primary" 
                                multiple
                                // multiple
                                // aria-label="Default select example"
                                value={selection}
                                onChange={handelclick}
                            >
                                {tagsData.map((item, index) => (
                                    <option
                                        key={index}
                                        value={item.caption}
                                        selected={selection.includes(item.caption)}
                                    >
                                        {item.caption}
                                    </option>
                                ))}
                            </select>

                            <button
                                type="submit"
                                className="btn btn-dark w-25 m-auto mt-3"
                            >
                                <Link className="nav-link " to="/home" >Done
                                </Link>
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        </>
    );
}

export default Categories;