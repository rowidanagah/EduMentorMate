import { Link } from "react-router-dom";
import "./singleplog.css";

export default function SinglePost() {
  return (

    <div className="container mt-5">
      <div className="row">
          <div className="col-6">
          <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
          </div>
          <div className="col-6">
          <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Abdallah Abdelsabour
              </Link>
            </b>
          </span>
          <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
 

        </p>
          </div>
      </div>

    </div>



    // <div className="singlePost">
    //   <div className="singlePostWrapper">
    //     <img
    //       className="singlePostImg"
    //       src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    //       alt=""
    //     />
    //     <h1 className="singlePostTitle">
    //       Lorem ipsum dolor
    //       <div className="singlePostEdit">
    //         <i className="singlePostIcon far fa-edit"></i>
    //         <i className="singlePostIcon far fa-trash-alt"></i>
    //       </div>
    //     </h1>
    //     <div className="singlePostInfo">
    //       <span>
    //         Author:
    //         <b className="singlePostAuthor">
    //           <Link className="link" to="/posts?username=Safak">
    //             Abdallah Abdelsabour
    //           </Link>
    //         </b>
    //       </span>
    //       <span>1 day ago</span>
    //     </div>
    //     <p className="singlePostDesc">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
    //       quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
    //       Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
    //       eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
    //       error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
    //       impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
    //       odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
    //       elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
    //       iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
    //       a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
    //       elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
    //       iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
    //       a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
    //       elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
    //       iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
    //       a odit modi eos!
    //       <br />
    //       <br />
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
    //       quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
    //       Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
    //       eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
    //       error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
    //       impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
    //       odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
    //       elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
    //       iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
    //       a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
    //     </p>
    //   </div>
    // </div>
  );
}
