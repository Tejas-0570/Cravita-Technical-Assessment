import React from "react";

// const sidebar = [
//     {"Total Tasks": },
//     {"Pending Tasks":},
//     {"In Progress Tasks":},
//     {"Complete Tasks":}
// ]

const Dashboard = () =>{
    return(
        <div className="bg-white w-100% h-175">
            <h1 className="text-3xl font-bold pt-5 pl-5 mb-2">Task Management System</h1>
            <hr />
            <div className="flex row justify-center flex-wrap">
                <section className="w-100 h-165 bg-gray-200">
                    <h2>Total Tasks</h2>
                    <h2>Pending Tasks</h2>
                    <h2>In Progress Task</h2>
                    <h2>Complete Task</h2>
                </section>
                <section className="w-280 h-165 bg-amber-600">

                </section>
            </div>
        </div>
    );
}       


export default Dashboard;