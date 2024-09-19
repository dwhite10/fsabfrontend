// 'use client'
// import { useEffect, useState } from "react"
// import classes from "./student-table-styles.module.css"

// function StudentTable() {
//     // Array of students state
//     const [students, setStudents] = useState([])
//     // A function to get all of the students from the frontend. MAKE SURE your backend is running on port 8080!
//     async function getAllStudents() {
//         // fetch the URL 
//         const res = await fetch("http://localhost:8080/students", {
//             method: "GET",
//         })
//         // We turn the result into a JSON. We could have also turned it into a string, for instance
//         const resJSON = await res.json()
//         setStudents(resJSON)
//     }

//     // You can use a side effect to the page loading by entering an empty [] dependency array
//     useEffect(() => {
//         getAllStudents()
//     }, [])

//     return (
//         <div>
//             <h2>Baseball Player Database</h2>
//             <button onClick={getAllStudents}>
//                 Reload
//             </button>
//             <br />
//             <br />
//             <table className={classes.table}>
//                 <tbody >
//                     <tr className={classes.row}>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Year</th>
//                         <th>Batting Average</th>
//                     </tr>
//                     {
//                         students.map((student) =>
//                             <tr key={student.id} className={classes.row}>
//                                 <td>{student.firstName}</td>
//                                 <td>{student.lastName}</td>
//                                 <td>{student.year}</td>
//                                 <td>{student.battingAverage}</td>
//                             </tr>
//                         )
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }
// export default StudentTable;


'use client';
import { useEffect, useState } from "react";
import classes from "./student-table-styles.module.css"; // Ensure this matches your actual file

function BaseballPlayerTable() {
    // Array of baseball players state
    const [players, setPlayers] = useState([]);

    // A function to get all of the baseball players from the backend
    async function getAllPlayers() {
        try {
            const res = await fetch("http://localhost:8080/baseballPlayers", {
                method: "GET",
            });
            const resJSON = await res.json();
            setPlayers(resJSON);
        } catch (error) {
            console.error("Error fetching players:", error);
        }
    }

    // Use a side effect to load the data when the component mounts
    useEffect(() => {
        getAllPlayers();
    }, []);

    return (
        <div>
            <h2>Baseball Player Database</h2>
            <button onClick={getAllPlayers}>
                Reload
            </button>
            <br />
            <br />
            <table className={classes.table}>
                <thead>
                    <tr className={classes.row}>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Year</th>
                        <th>Batting Average</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <tr key={player.id} className={classes.row}>
                            <td>{player.firstName}</td>
                            <td>{player.lastName}</td>
                            <td>{player.year}</td>
                            <td>{player.battingAverage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BaseballPlayerTable;