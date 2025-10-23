#include <iostream>
#include <fstream>
#include <vector>
#include <string>
using namespace std;

// Class to store student details
class Student {
    int rollNumber;
    string name;
    float marks;

public:
    // Function to input student data
    void enterData() {
        cout << "Enter Roll Number: ";
        cin >> rollNumber;
        cin.ignore(); // Ignore leftover newline
        cout << "Enter Name: ";
        getline(cin, name);
        cout << "Enter Marks: ";
        cin >> marks;
    }

    // Display student details
    void showData() const {
        cout << "Roll No: " << rollNumber << "\tName: " << name
             << "\tMarks: " << marks << endl;
    }

    int getRollNumber() const { return rollNumber; }
    void setName(const string& newName) { name = newName; }
    void setMarks(float newMarks) { marks = newMarks; }

    string getName() const { return name; }
    float getMarks() const { return marks; }
};

// Read all students from file into a vector
vector<Student> loadStudents() {
    vector<Student> students;
    ifstream fin("students.txt");
    if (!fin) return students;

    int roll;
    string name;
    float marks;
    while (fin >> roll) {
        fin.ignore();
        getline(fin, name);
        fin >> marks;

        Student s;
        s.enterData(); // dummy call to initialize object
        s.setName(name);
        s.setMarks(marks);
        students.push_back(s);
    }
    fin.close();
    return students;
}

// Save vector of students back to file
void saveStudents(const vector<Student>& students) {
    ofstream fout("students.txt");
    for (auto s : students) {
        fout << s.getRollNumber() << endl
             << s.getName() << endl
             << s.getMarks() << endl;
    }
    fout.close();
}

// Add a new student
void addStudent() {
    Student s;
    s.enterData();
    ofstream fout("students.txt", ios::app);
    fout << s.getRollNumber() << endl
         << s.getName() << endl
         << s.getMarks() << endl;
    fout.close();
    cout << "Student added successfully!" << endl;
}

// Display all students
void displayAll() {
    ifstream fin("students.txt");
    if (!fin) {
        cout << "No students found." << endl;
        return;
    }

    cout << "\n--- Student List ---" << endl;
    int roll;
    string name;
    float marks;

    while (fin >> roll) {
        fin.ignore();
        getline(fin, name);
        fin >> marks;

        cout << "Roll No: " << roll
             << "\tName: " << name
             << "\tMarks: " << marks << endl;
    }
    fin.close();
}

// Search a student by roll number
void searchStudent() {
    int roll;
    cout << "Enter Roll Number to search: ";
    cin >> roll;

    vector<Student> students = loadStudents();
    bool found = false;
    for (auto s : students) {
        if (s.getRollNumber() == roll) {
            cout << "Student Found:" << endl;
            s.showData();
            found = true;
            break;
        }
    }
    if (!found) cout << "Student not found!" << endl;
}

// Update a student record
void updateStudent() {
    int roll;
    cout << "Enter Roll Number to update: ";
    cin >> roll;

    vector<Student> students = loadStudents();
    bool found = false;

    for (auto &s : students) {
        if (s.getRollNumber() == roll) {
            cin.ignore();
            string newName;
            float newMarks;
            cout << "Enter new Name: ";
            getline(cin, newName);
            cout << "Enter new Marks: ";
            cin >> newMarks;
            s.setName(newName);
            s.setMarks(newMarks);
            found = true;
            break;
        }
    }

    if (found) {
        saveStudents(students);
        cout << "Record updated successfully!" << endl;
    } else {
        cout << "Student not found!" << endl;
    }
}

// Delete a student record
void deleteStudent() {
    int roll;
    cout << "Enter Roll Number to delete: ";
    cin >> roll;

    vector<Student> students = loadStudents();
    vector<Student> updatedList;
    bool found = false;

    for (auto s : students) {
        if (s.getRollNumber() == roll) {
            found = true; // skip this student
            continue;
        }
        updatedList.push_back(s);
    }

    if (found) {
        saveStudents(updatedList);
        cout << "Student deleted successfully!" << endl;
    } else {
        cout << "Student not found!" << endl;
    }
}

// Main menu for the program
void menu() {
    int choice;
    do {
        cout << "\n--- Student Management System ---" << endl;
        cout << "1. Add Student" << endl;
        cout << "2. Display All Students" << endl;
        cout << "3. Search Student" << endl;
        cout << "4. Update Student" << endl;
        cout << "5. Delete Student" << endl;
        cout << "6. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;

        switch(choice) {
            case 1: addStudent(); break;
            case 2: displayAll(); break;
            case 3: searchStudent(); break;
            case 4: updateStudent(); break;
            case 5: deleteStudent(); break;
            case 6: cout << "Exiting program. Goodbye!" << endl; break;
            default: cout << "Invalid choice! Try again." << endl;
        }
    } while(choice != 6);
}

int main() {
    menu();
    return 0;
}
