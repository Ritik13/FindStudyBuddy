import React from 'react'
import download from "../media/images/download.png"



function UserDashboard() {
    return (
        <div className="container Dashgap">
            <div className="avatar-cont">
                <img src={download} className="img-round" />
            </div>
            <hr />
            <div className="avt-name">
                <h1>RITIK SINGH</h1>
            </div>
            <hr />

            <div className="avt-bio">
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-6 col-sm-8">

                            <h5>Bio</h5>
                            <hr />
                            <p>My name is Ritik singh . Estoy es developer de applicacion estas trabajando. </p>

                        </div>
                        <div className="col"></div>

                    </div>

                </div>

            </div>
            <hr />

            <div className="small-detail">
                <h4>More Details</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>University</td>
                            <td>Demo</td>
                        </tr>
                        <tr>
                            <td>Intrest</td>
                            <td>Demo</td>
                        </tr> <tr>
                            <td>Email</td>
                            <td>Demo</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="chng-pass">
                <a href="#">Change Password!</a>
            </div>
        </div>
    )
}

export default UserDashboard
