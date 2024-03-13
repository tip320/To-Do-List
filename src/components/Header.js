import React from 'react'

//HEADER only contains A TITLE/H1
function Header() {

    return (
        <div className="row justify-content-center">
            {/* THIS HEADER ISN"T TAKING UP ENTIRE WEBSITE */}
            <div className="col-sm-4 text-center toDoListTitle">
                <h1>Brandon's To Do list</h1>
            </div>
        </div>
    )
}

export default Header