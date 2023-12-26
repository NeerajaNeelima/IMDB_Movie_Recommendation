import {Link} from 'react-router-dom'

const errorpage = () =>{
    return(
        <div id="error-page">
         <div className="content">
            <h2 className="header" >
               404
            </h2>
            <h4 >
               Opps! Page not found
            </h4>
            <p>
               Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
            </p><br/>
            <p>Click on LOG IN to return back to login page.</p>
            <div className="btns">
               <center><Link to="/">LOG IN</Link></center>
               
            </div>
         </div>
      </div>

    );
}

export default errorpage;