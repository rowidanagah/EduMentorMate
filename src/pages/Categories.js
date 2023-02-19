import Card from "../components/Card"
import Title from "../components/Title";


function Categories() {
    const name = ['chat ', 'call', 'study', 'learning', 'call', 'study', 'learning', 'call', 'study', 'learning', 'call', 'study', 'learning', 'call', 'study', 'learning', 'call', 'study', 'learning', 'call', 'study', 'learning', 'call', 'study', 'learning']

    // const add = []
    // push in it 

    return (
        <>
     <div className="container">
        <div  className="card p-4">
            <div className="  row m-4">
                    {
                        name.map((item, index) => (
                            <Card className="col-2" key={index} title={item} />
                        ))
                    }
                </div>
                <button className="btn btn-danger w-25 m-auto" > Done </button>
        </div>
                
     </div>
        
         </>
    )


}

export default Categories;