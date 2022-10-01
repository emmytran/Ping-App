CREATE TABLE IF NOT EXISTS Contacts(
    id INTEGER PRIMARY KEY AUTOINCREMENT,          
    person_name TEXT,
    phone_num INTEGER
);
INSERT or IGNORE INTO Contacts(id, person_name, phone_num) VALUE(1, 'John Doe', 5591234567);
INSERT or IGNORE INTO Contacts(id, person_name, phone_num) VALUE(2, 'Jane Andrew', 5596781234);
INSERT or IGNORE INTO Contacts(id, person_name, phone_num) VALUE(3, 'Bart Smith', 5595671236);
INSERT or IGNORE INTO Contacts(id, person_name, phone_num) VALUE(4, 'Jane Brady', 5597891467);
INSERT or IGNORE INTO Contacts(id, person_name, phone_num) VALUE(5, 'Tom Johnson', 5593457891;