CREATE DATABASE dbproject;
use dbproject;
CREATE TABLE Family (
    familyid INT PRIMARY KEY AUTO_INCREMENT,
    familyname VARCHAR(255)
    
);
CREATE TABLE Student (
    yourname VARCHAR(255),
    yourpassword VARCHAR(255),
    phone varchar(255),
    cnic VARCHAR(255),
    age int,
    email VARCHAR(255),
	username VARCHAR(255) UNIQUE,
    studentid INT PRIMARY KEY AUTO_INCREMENT,
    studentuniid varchar(255),
    dietarypreferences VARCHAR(255)
);
CREATE TABLE Team (
    teamid INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255),
    paassword VARCHAR(255),
    yourname VARCHAR(255),
    phone INT,
    cnic INT,
    age int,
    email VARCHAR(255)
);
CREATE TABLE Teacher (
    teacherid INT PRIMARY KEY AUTO_INCREMENT,
    yourname VARCHAR(255),
    phone VARCHAR(255),
    cnic VARCHAR(255),
    age INT,
    email VARCHAR(255),
    familymembers VARCHAR(255),
    paassword VARCHAR(255),
    username VARCHAR(255) UNIQUE,
    familyid INT,
    FOREIGN KEY (familyid) REFERENCES Family(familyid)
);
CREATE TABLE Budget (
    budgetid INT PRIMARY KEY AUTO_INCREMENT,
    staatus VARCHAR(255),
    amount DECIMAL(10, 2),
    category VARCHAR(255)
);
CREATE TABLE MenuItem (
    suggestionid INT PRIMARY KEY AUTO_INCREMENT,
    id VARCHAR(255),
    itemname VARCHAR(255),
    votes INT
);
ALTER TABLE MenuItem
ADD CONSTRAINT fk_studentid
FOREIGN KEY (studentid) REFERENCES Student(studentid);
CREATE TABLE Announcement (
    announcementid INT PRIMARY KEY AUTO_INCREMENT,
    message VARCHAR(255)
);
CREATE TABLE Performance (
    performanceid INT PRIMARY KEY AUTO_INCREMENT,
    duration VARCHAR(255),
    votes INT,
    tyype VARCHAR(255),
    studentuniid varchar(225),
    studentid int,
    specialrequirements VARCHAR(255)
);
ALTER TABLE Performance
ADD CONSTRAINT fk_studentid_performance
FOREIGN KEY (studentid) REFERENCES Student(studentid);
CREATE TABLE Attendance (
    attendanceid INT PRIMARY KEY AUTO_INCREMENT,
    teacherid INT,
    studentid INT,
    familymembers VARCHAR(255),
    familyids VARCHAR(255),
    menuitemids VARCHAR(255),
    performanceids VARCHAR(255),
    budgetids VARCHAR(255),
    FOREIGN KEY (teacherid) REFERENCES Teacher(teacherid),
    FOREIGN KEY (studentid) REFERENCES Student(studentid)
);
CREATE TABLE Task (
    taskid INT PRIMARY KEY AUTO_INCREMENT,
    teamid INT,
    staatus VARCHAR(255),
    teamname VARCHAR(255),
    desscription VARCHAR(255),
    studentids VARCHAR(255),
    FOREIGN KEY (teamid) REFERENCES Team(teamid)
);
CREATE TABLE PerformanceAllocation (
    allocationid INT PRIMARY KEY AUTO_INCREMENT,
    performanceid INT,
    reharsal_daate varchar(255),
    status VARCHAR(255),
    reharsal_allocated_time varchar(255),
    venue_slot VARCHAR(255),
    FOREIGN KEY (performanceid) REFERENCES Performance(performanceid)
);
CREATE TABLE Expense (
    expenseid INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(255),
    teamid INT,
    amount DECIMAL(10, 2),
    daate DATE
);
CREATE TABLE Decoration (
    decorationid INT PRIMARY KEY AUTO_INCREMENT,
    decorationtype VARCHAR(255),
    decorationplace VARCHAR(255),
    teamid INT,
    FOREIGN KEY (teamid) REFERENCES Team(teamid)
);
CREATE TABLE Invitation (
    invitationid INT PRIMARY KEY AUTO_INCREMENT,
    teachername VARCHAR(255),
    invitationdate VARCHAR(255),
    distributionmethod VARCHAR(255)
);
CREATE TABLE FinalMenu (
    itemid INT PRIMARY KEY AUTO_INCREMENT,
    itemname varchar(255)
);
CREATE TABLE Attendance (
    ID varchar(255) PRIMARY KEY,
    Coming varchar(255)
);
CREATE TABLE voting (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    itemname varchar(255),
    votes int 
);
CREATE TABLE TeamAnnouncments (
    announcementid INT PRIMARY KEY AUTO_INCREMENT,
    message VARCHAR(255),
    teamname VARCHAR(255)
    
);
CREATE TABLE performancevoting (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    itemname varchar(255),
    votes int 
);