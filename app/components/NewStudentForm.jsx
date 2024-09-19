// 'use client';
// import { useState } from "react";
// import classes from "./new-student-form-styles.module.css";

// function NewStudentForm() {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [classYear, setClassYear] = useState("");
//     const [concentrations, setConcentrations] = useState([]);

//     async function onSubmit() {
//         const newStudentBody = {
//             firstName,
//             lastName,
//             classYear,
//             concentrations,
//         };

//         // Add console log to check what's being sent
//         console.log("Submitting student:", newStudentBody);

//         try {
//             const res = await fetch("http://localhost:8080/students", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(newStudentBody),
//             });

//             if (res.ok) {
//                 alert("Student added successfully!");
//                 setFirstName("");
//                 setLastName("");
//                 setClassYear("");
//                 setConcentrations([]);
//             } else {
//                 alert("Failed to add student.");
//             }
//         } catch (error) {
//             console.error("Error submitting form:", error);
//         }
//     }

//     return (
//         <div>
//             <h3>Add New Student</h3>
//             <div className={classes.mainForm}>
//                 <div>
//                     <label htmlFor="firstName">First Name: </label>
//                     <input
//                         name="firstName"
//                         value={firstName}
//                         onChange={(event) => setFirstName(event.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="lastName">Last Name: </label>
//                     <input
//                         name="lastName"
//                         value={lastName}
//                         onChange={(event) => setLastName(event.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="classYear">Class Year: </label>
//                     <input
//                         name="classYear"
//                         value={classYear}
//                         onChange={(event) => setClassYear(event.target.value)}
//                     />
//                 </div>
//             </div>
//             <h4>Concentrations</h4>
//             {concentrations.map((concentration, i) => (
//                 <div key={i}>
//                     <input
//                         value={concentration}
//                         placeholder="Concentration"
//                         onChange={(event) =>
//                             setConcentrations(
//                                 concentrations.map((c, j) => (i === j ? event.target.value : c))
//                             )
//                         }
//                     />
//                     <br /><br />
//                 </div>
//             ))}
//             <button onClick={() => setConcentrations([...concentrations, ""])}>
//                 Add New Concentration
//             </button>
//             <br /><br />
//             <button onClick={onSubmit}>Submit</button>
//         </div>
//     );
// }

// export default NewStudentForm;

// 'use client';
// import { useState } from "react";
// import classes from "./new-student-form-styles.module.css";

// function NewBaseballPlayerForm() {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [classYear, setClassYear] = useState("");
//     const [concentrations, setConcentrations] = useState([]);

//     async function onSubmit() {
//         const newPlayerBody = {
//             firstName,
//             lastName,
//             classYear,
//             concentrations,
//         };

//         // Add console log to check what's being sent
//         console.log("Submitting player:", newPlayerBody);

//         try {
//             const res = await fetch("http://localhost:8080/baseballPlayers", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(newPlayerBody),
//             });

//             if (res.ok) {
//                 alert("Player added successfully!");
//                 setFirstName("");
//                 setLastName("");
//                 setClassYear("");
//                 setConcentrations([]);
//             } else {
//                 alert("Failed to add player.");
//             }
//         } catch (error) {
//             console.error("Error submitting form:", error);
//         }
//     }

//     return (
//         <div>
//             <h3>Add New Baseball Player</h3>
//             <div className={classes.mainForm}>
//                 <div>
//                     <label htmlFor="firstName">First Name: </label>
//                     <input
//                         name="firstName"
//                         value={firstName}
//                         onChange={(event) => setFirstName(event.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="lastName">Last Name: </label>
//                     <input
//                         name="lastName"
//                         value={lastName}
//                         onChange={(event) => setLastName(event.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="classYear">Class Year: </label>
//                     <input
//                         name="classYear"
//                         value={classYear}
//                         onChange={(event) => setClassYear(event.target.value)}
//                     />
//                 </div>
//             </div>
//             <h4>Concentrations</h4>
//             {concentrations.map((concentration, i) => (
//                 <div key={i}>
//                     <input
//                         value={concentration}
//                         placeholder="Concentration"
//                         onChange={(event) =>
//                             setConcentrations(
//                                 concentrations.map((c, j) => (i === j ? event.target.value : c))
//                             )
//                         }
//                     />
//                     <br /><br />
//                 </div>
//             ))}
//             <button onClick={() => setConcentrations([...concentrations, ""])}>
//                 Add New Concentration
//             </button>
//             <br /><br />
//             <button onClick={onSubmit}>Submit</button>
//         </div>
//     );
// }

// export default NewBaseballPlayerForm;

// 'use client';
// import { useState } from "react";
// import classes from "./new-student-form-styles.module.css";

// function NewBaseballPlayerForm() {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [year, setYear] = useState("");
//     const [battingAverage, setBattingAverage] = useState("");

//     async function onSubmit() {
//         const newPlayerBody = {
//             firstName,
//             lastName,
//             year,
//             battingAverage,
//         };

//         console.log("Submitting player:", newPlayerBody);

//         try {
//             const res = await fetch("http://localhost:8080/baseballPlayers", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(newPlayerBody),
//             });

//             if (res.ok) {
//                 alert("Player added successfully!");
//                 setFirstName("");
//                 setLastName("");
//                 setYear("");
//                 setBattingAverage("");
//             } else {
//                 alert("Failed to add player.");
//             }
//         } catch (error) {
//             console.error("Error submitting form:", error);
//         }
//     }

//     return (
//         <div>
//             <h3>Baseball Players Database</h3>
//             <div className={classes.mainForm}>
//                 <div>
//                     <label htmlFor="firstName">First Name: </label>
//                     <input
//                         name="firstName"
//                         value={firstName}
//                         onChange={(event) => setFirstName(event.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="lastName">Last Name: </label>
//                     <input
//                         name="lastName"
//                         value={lastName}
//                         onChange={(event) => setLastName(event.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="year">Year: </label>
//                     <input
//                         name="year"
//                         value={year}
//                         onChange={(event) => setYear(event.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="battingAverage">Batting Average: </label>
//                     <input
//                         name="battingAverage"
//                         value={battingAverage}
//                         onChange={(event) => setBattingAverage(event.target.value)}
//                     />
//                 </div>
//             </div>
//             <br /><br />
//             <button onClick={onSubmit}>Submit</button>
//         </div>
//     );
// }

// export default NewBaseballPlayerForm;

'use client';
import { useState } from "react";
import classes from "./new-student-form-styles.module.css";

function NewBaseballPlayerForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [year, setYear] = useState("");
    const [battingAverage, setBattingAverage] = useState("");

    async function onSubmit() {
        const newPlayerBody = {
            firstName,
            lastName,
            year,
            battingAverage,
        };

        console.log("Submitting player:", newPlayerBody);

        try {
            const res = await fetch("http://localhost:8080/baseballPlayers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPlayerBody),
            });

            if (res.ok) {
                alert("Player added successfully!");
                setFirstName("");
                setLastName("");
                setYear("");
                setBattingAverage("");
            } else {
                alert("Failed to add player.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }

    return (
        <div>
            <h3>Baseball Players Database</h3>
            <div className={classes.mainForm}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input
                        name="firstName"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input
                        name="lastName"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="year">Year: </label>
                    <input
                        name="year"
                        value={year}
                        onChange={(event) => setYear(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="battingAverage">Batting Average: </label>
                    <input
                        name="battingAverage"
                        value={battingAverage}
                        onChange={(event) => setBattingAverage(event.target.value)}
                    />
                </div>
            </div>
            <br /><br />
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
}

export default NewBaseballPlayerForm;