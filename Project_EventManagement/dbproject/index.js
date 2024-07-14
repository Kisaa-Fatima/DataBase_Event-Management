const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser'); 

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

const connection = mysql.createConnection({  
    host: "localhost",          
    user: "root",  
    password: "Sharjeel0302",
    database: "dbproject"                
});

connection.connect(function(err) {                
    if (err) throw err;  
    console.log("Connected!");  
});



app.get('/createDatabase',function(req,res) {          
    let sql = "CREATE DATABASE IF NOT EXISTS dbproject";
    connection.query(sql,function(err,results){
        if (err) throw err;  
        res.send(results);
    });
});
app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'frontpage.html'));
});
app.get('/studentssignup', async(req, res) => {
    res.sendFile(path.join(__dirname, 'studentsignup.html'));
});
app.get('/teacherssignup', async(req, res) => {
    res.sendFile(path.join(__dirname, 'teachersignup.html'));
});
app.get('/Teacherlogin', async(req, res) => {
    res.sendFile(path.join(__dirname, 'teacherslogin.html'));
});
app.get('/studentlogin', async(req, res) => {
    res.sendFile(path.join(__dirname, 'studentlogin.html'));
});
app.get('/signup', async(req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'));
});
app.get('/studentmain', async(req, res) => {
    res.sendFile(path.join(__dirname, 'studentmain.html'));
});
app.get('/menu', async(req, res) => {
    res.sendFile(path.join(__dirname, 'menu.html'));
});
app.get('/performance', async(req, res) => {
    res.sendFile(path.join(__dirname, 'performance.html'));
});
app.get('/teamlogin', async(req, res) => {
    res.sendFile(path.join(__dirname, 'teamlogin.html'));
});
app.get('/teammain', async(req, res) => {
    res.sendFile(path.join(__dirname, 'teammain.html'));
});
app.get('/teachermain', async(req, res) => {
    res.sendFile(path.join(__dirname, 'teachermain.html'));
});
app.get('/teachermenu', async(req, res) => {
    res.sendFile(path.join(__dirname, 'teacherMenu.html'));
});
app.get('/voting', async(req, res) => {
    res.sendFile(path.join(__dirname, 'voting.html'));
});
app.get('/teamoptions/president', async (req, res) => {

    res.sendFile(path.join(__dirname, 'presidentlogin.html'));
});
app.get('/teamoptions/teamcreatives', async (req, res) => {

    res.sendFile(path.join(__dirname, 'teamcreatives.html'));
});
app.get('/teamoptions/teamoperations', async (req, res) => {

    res.sendFile(path.join(__dirname, 'teamoperation.html'));
});
app.get('/teamoptions/teamfinance', async (req, res) => {

    res.sendFile(path.join(__dirname, 'teamfinance.html'));
});
app.get('/teamoptions', async(req, res) => {
    res.sendFile(path.join(__dirname, 'teamoption.html'));
});
app.get('/DietaryPreferences', async(req, res) => {
    res.sendFile(path.join(__dirname, 'DietaryPreferences.html'));
});
app.get('/PresidentMain', async(req, res) => {
    res.sendFile(path.join(__dirname, 'presidentmain.html'));
});
app.get('/progresstracking', async(req, res) => {
    res.sendFile(path.join(__dirname, 'progresstracking.html'));
});
app.get('/budgetoverview', async(req, res) => {
    res.sendFile(path.join(__dirname, 'budgetoverview.html'));
});
app.get('/decor', async(req, res) => {
    res.sendFile(path.join(__dirname, 'decormanagment.html'));
});

app.get('/expensetracking', async(req, res) => {
    res.sendFile(path.join(__dirname, 'expensetracking.html'));
});

app.get('/budgetadjustment', async(req, res) => {
    res.sendFile(path.join(__dirname, 'budgetadjustment.html'));
});
app.get('/financemain', async(req, res) => {
    res.sendFile(path.join(__dirname, 'financemain.html'));
});
app.get('/taskallocation', async(req, res) => {
    res.sendFile(path.join(__dirname, 'taskallocation.html'));
});
app.get('/rehersal', async(req, res) => {
    res.sendFile(path.join(__dirname, 'reharsalschedule.html'));
});
app.get('/creativemain', async(req, res) => {
    res.sendFile(path.join(__dirname, 'creativemain.html'));
});
app.get('/performancelist', async(req, res) => {
    res.sendFile(path.join(__dirname, 'performancelist.html'));
});
app.get('/manageperformance', async(req, res) => {
    res.sendFile(path.join(__dirname, 'performancemanagement.html'));
});
app.get('/invitationcards', (req, res) => {
    res.sendFile(path.join(__dirname, 'invitationcards.html'));
});
app.get('/teamoptions/teamoperations', async (req, res) => {

    res.sendFile(path.join(__dirname, 'teamoperation.html'));
});
app.get('/operationmain', async(req, res) => {
    res.sendFile(path.join(__dirname, 'operationmain.html'));
});
app.get('/dinnermenu', async(req, res) => {
    res.sendFile(path.join(__dirname, 'dinnermenu.html'));
});
app.get('/teamannouncement', async(req, res) => {
    res.sendFile(path.join(__dirname, 'teamannouncement.html'));

});

app.get('/PresidentAttendance', async(req, res) => {
    res.sendFile(path.join(__dirname, 'attendance.html'));
});

// Login authentication for team route
app.get("/authentication/login", (req, res) => {    
    const { username, password } = req.query;

    let sql = "SELECT * FROM team WHERE username = ? AND paassword = ?";
    let values = [username, password];

    connection.query(sql, values, function(err, results) {
        if (err) {
            console.error('Error:', err);
            res.json({ success: false, message: 'Internal server error' });
        } else {
            if (results.length > 0) {
                console.log("Data Found successfully!");
                res.json({ success: true });
            } else {
                console.log("No matching user found!");
                res.json({ success: false, message: "Invalid username or password" });
            }
        }
    });
});
//login authentication for students route
app.get("/authentication/studentslogin", (req, res) => {
    const { username, password } = req.query;

    let sql = "SELECT * FROM student WHERE studentuniid = ? AND yourpassword = ?";
    let values = [username, password];

    connection.query(sql, values, function (err, results) {
        if (err) {
            console.error('Error:', err);
            res.json({ success: false, message: 'Internal server error' });
        } else {
            if (results.length > 0) {
                console.log("Data Found successfully!");
                res.json({ success: true });
            } else {
                console.log("No matching user found!");
                res.json({ success: false, message: "Invalid username or password" });
            }
        }
    });
});


// Login authentication for teacher route
app.get("/authentication/teacherslogin", (req, res) => {    
    const { username, password } = req.query;

    let sql = "SELECT * FROM teacher WHERE username = ? AND paassword = ?";
    let values = [username, password];

    connection.query(sql, values, function(err, results) {
        if (err) 
        {
            console.error('Error:', err);
            res.json({ success: false, message: 'Internal server error' });
        } else
        {
            if (results.length > 0) {
                console.log("Data Found successfully!");
                res.json({ success: true });
            } 
            else 
            {
                console.log("No matching user found!");
                res.json({ success: false, message: "Invalid username or password" });
            }
        }
    });
});
app.get('/forgotPassword', async(req, res) => {
    res.sendFile(path.join(__dirname, 'forgotPassword.html'));
});

// Update password route
function updatePassword(username, newPassword) {
    let sql = "UPDATE Data SET password = ? WHERE username = ?";
    let values = [newPassword, username];

    connection.query(sql, values, function(err, results) {
        if (err) {
            console.error('Error:', err);
            
        } else {
            if (results.affectedRows > 0) {
                console.log("Password updated successfully!");
            } else {
                console.log("No matching user found for the provided username.");
            }
        }
    });
}
app.post('/updatePassword', function(req, res) {
    const { username, newPassword } = req.body;
    updatePassword(username, newPassword);
    console.log("Password Changed");
    res.send("Password changed successfully");
});
// Announcement route
app.get('/getAnnouncement', (req, res) => {
    const sql = "SELECT * FROM announcement ORDER BY announcementid DESC LIMIT 1";
    
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            const announcement = results[0] || {};
            res.json({ message: announcement.message });
        }
    });
});
// Insert student details route
app.get("/insertStudentDetails", (req, res) => {
    const { studentid, name, username, password, email, phone, cnic, age, dietarypreferences } = req.query;

    const sql = "INSERT INTO student (yourname, username, yourpassword, email, phone, cnic, age, studentuniid, dietarypreferences) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [name, username, password, email, phone, cnic, age, studentid, dietarypreferences];

    connection.query(sql, values, function(err, results) {
        if (err) {
            console.error('Error:', err);
            res.json({ success: false, message: 'Failed to insert values into student table.' });
        } else {
            console.log("Values inserted into student table successfully!");
            res.json({ success: true, message: 'Values inserted into student table successfully!' });
        }
    });
});


// Insert teacher details route
app.get("/insertTeachersDetails", (req, res) => {
    const { name, phone, cnic, age, email, familymembers, paassword, username } = req.query;

    // Insert into the family table
    const insertFamilySql = "INSERT INTO family (familyname) VALUES (NULL)";
    connection.query(insertFamilySql, (familyErr, familyResults) => {
        if (familyErr) {
            console.error('Error inserting into family table:', familyErr);
            res.json({ success: false, message: 'Failed to insert into family table.' });
        } else {
            const familyid = familyResults.insertId;

            // Insert into the teacher table
            const insertTeacherSql = "INSERT INTO teacher (yourname, phone, cnic, age, email, familymembers, paassword, username, familyid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            const teacherValues = [name, phone, cnic, age, email, familymembers, paassword, username, familyid];

            connection.query(insertTeacherSql, teacherValues, (teacherErr, teacherResults) => {
                if (teacherErr) {
                    console.error('Error inserting into teacher table:', teacherErr);
                    res.json({ success: false, message: 'Failed to insert into teacher table.' });
                } else {
                    console.log("Values inserted into teacher table successfully!");
                    res.json({ success: true, message: 'Values inserted into teacher table successfully!' });
                }
            });
        }
    });
});
//insertion in menuitems
app.post('/submitMenuItem', (req, res) => {
    const { studentid, itemname } = req.body;

    // Insert the menu item into the database
    const sql = "INSERT INTO menuitem (id, itemname, votes) VALUES (?, ?, NULL)";
    const values = [studentid, itemname];

    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.json({ success: false, message: 'Failed to insert menu item.' });
        } else {
            console.log("Menu item inserted successfully!");
            res.json({ success: true, message: 'Menu item inserted successfully!' });
        }
    });
});
app.listen(port, function(){
    console.log(`Listening on port ${port}...`);   
});
app.post('/submitdietarypreferences', (req, res) => {
    const { studentid, itemname } = req.body;

    // Insert the menu item into the database
    const sql = "UPDATE student SET dietarypreferences = ? WHERE studentuniid = ?";
    const values = [itemname, studentid];

    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.json({ success: false, message: 'Failed to insert menu item.' });
        } else {
            console.log("Menu item inserted successfully!");
            res.json({ success: true, message: 'Menu item inserted successfully!' });
        }
    });
});
app.post('/assignTask', (req, res) => {
    const { team, task } = req.body;

    const sql = `INSERT INTO Task (teamname, staatus, desscription) VALUES (?, 'incomplete', ?)`;
    connection.query(sql, [team, task], (err, result) => {

        if (err) {
            console.error('Error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.json({ message: 'Task assigned successfully!' });
        }
    });
});

app.get('/getprogresstracking/complete', (req, res) => {
    const sql = "SELECT * FROM task WHERE staatus='complete'";
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.json({ tasks: results });
        }
    });
});
// Assuming this is your GET endpoint for incomplete tasks
app.get('/getprogresstracking/incomplete', (req, res) => {
    const sql = "SELECT * FROM task WHERE staatus='incomplete'";
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.json({ tasks: results });
        }
    });
});
// Assuming this is your GET endpoint for performances
app.get('/getprogresstracking/performances', (req, res) => {
    const sql = "SELECT * FROM performance";
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.json({ performances: results });
        }
    });
});
// Assuming this is your server-side code
app.post('/performActionOnPerformance', (req, res) => {
    const { action, performanceId, allocatedTime, venueSlot } = req.body;

    // Update the performance allocation 
    let status;
    switch (action) {
        case 'accept':
            status = 'Accepted';
            break;
        case 'reject':
            status = 'Rejected';
            break;
        case 'allocate':
            status = 'Accepted'; // Assuming allocation also sets the status to accepted
            break;
        default:
            status = 'pending'; // Or any other default status
            break;
    }

    // Insert or update the performance allocation record in the database
    const insertOrUpdateSql = `
        INSERT INTO performanceallocation (performanceid, status, allocated_time, venue_slot)
        VALUES (?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE status = VALUES(status), allocated_time = VALUES(allocated_time), venue_slot = VALUES(venue_slot)
    `;

    connection.query(insertOrUpdateSql, [performanceId, status, allocatedTime, venueSlot], (err, result) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.json({ message: 'Action performed successfully!' });
        }
    });
});


// Sample endpoint to call the performActionOnPerformance function
app.post('/performActionOnPerformance', (req, res) => {
    const { action, performanceId, allocatedTime, venueSlot } = req.body;

    performActionOnPerformance(action, performanceId, allocatedTime, venueSlot);

    res.json({ message: 'Action performed successfully!' });
});


app.post('/reschedulePerformance', (req, res) => {
    const { performanceId, newTimeSlot, newDate } = req.body;

    if (!performanceId || !newTimeSlot || !newDate) {
        res.status(400).json({ success: false, message: 'Invalid input data' });
        return;
    }

    // Update the PerformanceAllocation table 
    const updateSql = `
        INSERT INTO PerformanceAllocation (performanceid, reharsal_daate, status, reharsal_allocated_time, venue_slot)
        VALUES (?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE reharsal_daate = VALUES(reharsal_daate), reharsal_allocated_time = VALUES(reharsal_allocated_time), venue_slot = VALUES(venue_slot)
    `;

    connection.query(updateSql, [performanceId, newDate, 'Rescheduled', newTimeSlot, ''], (err, result) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
        } else {
            res.json({ success: true, message: 'Performance rescheduled successfully!' });
        }
    });
});
app.get('/getbudgetoverview', (req, res) => {
    const sql = "SELECT category, amount, daate FROM Expense";

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.json({ budgetOverview: results });
        }
    });
});

// Add this route to handle recording expenses
app.get('/recordexpense', (req, res) => {
    const { category, amount } = req.query;

    
    const sql =` INSERT INTO Expense (category, amount, daate) VALUES ('${category}', ${amount}, NOW())`;

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.json({ message: 'Expense recorded successfully' });
        }
    });
});


// Add this route to handle fetching budget categories
app.get('/getbudgetcategories', (req, res) => {
    const sql = "SELECT DISTINCT category FROM Expense";

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            const budgetCategories = results.map(result => result.category);
            res.json({ budgetCategories });
        }
    });
});

// Modify the route to handle making budget adjustments
app.get('/makebudgetadjustment', (req, res) => {
    const { category, amount } = req.query;

    
    const sql = `UPDATE Expense SET amount = amount + ? WHERE category = ?`;

    connection.query(sql, [amount, category], (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.json({ message: 'Budget adjustment made successfully' });
        }
    });
});


app.get('/getexpenselist', (req, res) => {
    const sql = `SELECT category, amount FROM Expense`;

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.json({ expenseList: results });
        }
    });
});
app.post('/submitdecoration', (req, res) => {
    const { decorationtype, decorationplace, teamid } = req.body;

    if (!decorationtype || !decorationplace || !teamid) {
        res.status(400).json({ success: false, message: 'Missing required parameters' });
        return;
    }

    // Insert the decoration details
    const sql = "INSERT INTO decoration (decorationtype, decorationplace, teamid) VALUES (?, ?, ?)";
    const values = [decorationtype, decorationplace, teamid];
    console.log('Received data:', { decorationtype, decorationplace, teamid });


    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
        } else {
            res.json({ success: true, message: 'Decoration details submitted successfully!' });
        }
    });
});
app.get('/storeinvitation', (req, res) => {
    const { teacherName, method } = req.query;

   
    const sql = `
        INSERT INTO Invitation(teachername, distributionmethod, invitationdate)
        VALUES ('${teacherName}', '${method}', NOW())`;

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.json({ message: 'Invitation details stored successfully' });
        }
    });
});
app.get('/getprogresstracking/menu', (req, res) => {
    const sql = "SELECT itemname FROM menuitem";
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.json({ performances: results });
        }
    });
});


app.post('/performActionOnItem', (req, res) => {
    const { action, itemName } = req.body;

    switch (action) {
        case 'reject':
            removeFromMenu(itemName, res);
            break;
        case 'addToMenu':
            addToFinalMenu(itemName, res);
            break;
        default:
            res.status(400).json({ success: false, message: 'Invalid action' });
    }
});

function removeFromMenu(itemName, res) {
    const sql = "DELETE FROM menuitem WHERE itemname = ?";
    connection.query(sql, [itemName], (err, result) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
        } else {
            res.json({ success: true, message: 'Item removed successfully!' });
        }
    });
}

function addToFinalMenu(itemName, res) {
    const sql = "INSERT INTO finalmenu (itemname) VALUES (?)";
    connection.query(sql, [itemName], (err, result) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
        } else {
            res.json({ success: true, message: 'Item added to FinalMenu successfully!' });
        }
    });
}
//entering data into performance table
app.get("/insertPerformance", (req, res) => {
    const { studentid, performanceType, duration, specialrequirements } = req.query;


    const sql = "INSERT INTO performance (duration, tyype, studentuniid, studentid, specialrequirements) VALUES (?, ?, ?, NULL, ?)";
    const values = [duration, performanceType, studentid, specialrequirements];

    // Assuming 'connection' is an established connection to your database
    connection.query(sql, values, function(err, results) {
        if (err) {
            console.error('Error:', err);
            res.json({ success: false, message: 'Failed to insert values into performance table.' });
        } else {
            console.log("Values inserted into performance table successfully!");
            res.json({ success: true, message: 'Values inserted into performance table successfully!' });
        }
    });
});


app.post('/submitAttendance', (req, res) => {
    const { studentId, attendance } = req.body;

    const sql = 'INSERT INTO attendance (ID, Coming) VALUES (?, ?)';
    const values = [studentId, attendance];

    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ success: false, message: 'Failed to insert values into attendance table.' });
        } else {
            console.log('Values inserted into attendance table successfully!');
            res.status(200).json({ success: true, message: 'Values inserted into attendance table successfully!' });
        }
    });
});
app.post('/submitMenuVote', (req, res) => {
    const { selectedDinnerItem } = req.body;  

    if (!selectedDinnerItem) {
        res.status(400).json({ success: false, message: 'Invalid input data' });
        return;
    }

    // Check if the item already exists in the voting table
    const checkExistenceSql = "SELECT * FROM voting WHERE itemname = ?";
    const checkExistenceValues = [selectedDinnerItem];

    connection.query(checkExistenceSql, checkExistenceValues, (checkErr, checkResult) => {
        if (checkErr) {
            console.error('Error checking existence:', checkErr);
            res.status(500).json({ success: false, message: 'Internal server error' });
        } else {
            if (checkResult.length > 0) {
                // Item already exists, update the vote count
                const updateSql = "UPDATE voting SET votes = votes + 1 WHERE itemname = ?";
                const updateValues = [selectedDinnerItem];

                connection.query(updateSql, updateValues, (updateErr, updateResult) => {
                    if (updateErr) {
                        console.error('Error updating vote count:', updateErr);
                        res.status(500).json({ success: false, message: 'Internal server error' });
                    } else {
                        console.log('Vote count updated successfully!');
                        res.status(200).json({ success: true, message: 'Vote count updated successfully!' });
                    }
                });
            } else {
                // Item doesn't exist, insert a new record
                const insertSql = "INSERT INTO voting (itemname, votes) VALUES (?, 1)";
                const insertValues = [selectedDinnerItem];

                connection.query(insertSql, insertValues, (insertErr, insertResult) => {
                    if (insertErr) {
                        console.error('Error inserting vote:', insertErr);
                        res.status(500).json({ success: false, message: 'Internal server error' });
                    } else {
                        console.log('Vote inserted successfully!');
                        res.status(200).json({ success: true, message: 'Vote inserted successfully!' });
                    }
                });
            }
        }
    });
});
app.post('/submitPerformanceVote', (req, res) => {
    const { performanceId, performanceType } = req.body;

    if (!performanceId || !performanceType) {
        res.status(400).json({ success: false, message: 'Invalid input data' });
        return;
    }

    // Checking if the item already exists in the voting table
    const checkExistenceSql = "SELECT * FROM performancevoting WHERE itemname = ?";
    const checkExistenceValues = [performanceId];

    connection.query(checkExistenceSql, checkExistenceValues, (checkErr, checkResult) => {
        if (checkErr) {
            console.error('Error checking existence:', checkErr);
            res.status(500).json({ success: false, message: 'Internal server error' });
        } else {
            if (checkResult.length > 0) {
                // Item already exists, update the vote count
                const updateSql = "UPDATE performancevoting SET votes = votes + 1 WHERE itemname = ?";
                const updateValues = [performanceId ];

                connection.query(updateSql, updateValues, (updateErr, updateResult) => {
                    if (updateErr) {
                        console.error('Error updating vote count:', updateErr);
                        res.status(500).json({ success: false, message: 'Internal server error' });
                    } else {
                        console.log('Vote count updated successfully!');
                        res.status(200).json({ success: true, message: 'Vote count updated successfully!' });
                    }
                });
            } else {
                // Item doesn't exist, insert a new record
                const insertSql = "INSERT INTO performancevoting (itemname, votes) VALUES (?, 1)";
                const insertValues = [performanceId];

                connection.query(insertSql, insertValues, (insertErr, insertResult) => {
                    if (insertErr) {
                        console.error('Error inserting vote:', insertErr);
                        res.status(500).json({ success: false, message: 'Internal server error' });
                    } else {
                        console.log('Vote inserted successfully!');
                        res.status(200).json({ success: true, message: 'Vote inserted successfully!' });
                    }
                });
            }
        }
    });
});

app.post('/storeannouncement', (req, res) => {
    const { message, team } = req.body;

    const sql = `
        INSERT INTO TeamAnnouncments (message, teamname)
        VALUES (?, ?)
    `;

    // Assuming you are using a database library like 'mysql2'
    connection.query(sql, [message, team], (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ success: false, message: 'Failed to insert values into TeamAnnouncement table.' });
        } else {
            console.log('Values inserted into TeamAnnouncement table successfully!');
            res.status(200).json({ success: true, message: 'Values inserted into TeamAnnouncement table successfully!' });
        }
    });
});

app.get('/getannouncements/:team', (req, res) => {
    const team = req.params.team;

    const sql = `
        SELECT * FROM TeamAnnouncments WHERE teamname = ? 
    `;

    connection.query(sql, [team], (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ success: false, message: 'Failed to retrieve announcements.' });
        } else {
            res.status(200).json({ success: true, announcements: results });
        }
    });
});


app.get('/getAttendanceData', (req, res) => {
    const selectDataQuery = 'SELECT ID FROM attendance';
  
    connection.query(selectDataQuery, (err, results) => {
      if (err) {
        console.error('Error fetching attendance data:', err);
        res.status(500).json({ success: false, message: 'Internal server error' });
        return;
      }
  
      const attendanceData = results.map((result) => ({
        ID: result.ID,
        date: result.date, 
        status: result.status, 
      }));
      res.json({ success: true, attendanceData });
    });
  });


  app.get('/getprogresstracking/voting', (req, res) => {
    // Assuming you have a function to fetch voting items from the database
    // Modify the SQL query according to your database schema
    const query = 'SELECT itemname, votes FROM voting';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching voting items:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ votes: results });
        }
    });
});