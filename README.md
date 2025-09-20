🎓 Student Registration System

A Java Full Stack Web Application for managing student registrations.
This project demonstrates how to build a Spring Boot backend, a React frontend, and connect them with a MySQL database.

🚀 Features

Register new students with details (name, email, username, etc.)

View all students in a list/table format

Update student information

Delete student records

RESTful API integration between frontend & backend

Responsive frontend design

🛠️ Tech Stack

Frontend: React / JavaScript / HTML / CSS
Backend: Java, Spring Boot (REST APIs)
Database: MySQL
Tools: Maven, Git, Postman
📂 Project Structure
student-registration-system/
├── backend/           # Spring Boot application
│   ├── src/main/java  # Controllers, Services, Models, Repositories
│   └── src/main/resources/application.properties
│
├── frontend/          # React application
│   ├── public/
│   └── src/
│
└── README.md

⚡ Getting Started
Prerequisites

Java 17+

Node.js & npm

MySQL

Setup Steps

Clone the repository

git clone (https://github.com/Saikiranvalsa/Student-Registration-Java-Full-stack-.git)
cd student-registration-system


Backend setup

Navigate to backend/

Update application.properties with your MySQL username & password:

spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update


Run Spring Boot app:

mvn spring-boot:run


Frontend setup

Navigate to frontend/

Install dependencies:

npm install


Start development server:

npm start

Screen shots
Home screen 
<img width="1920" height="1080" alt="Screenshot (305)" src="https://github.com/user-attachments/assets/4882d239-0c0a-49e8-93fe-79e52eb6cf6f" />
Registration
<img width="1920" height="1080" alt="Screenshot (305)" src="https://github.com/user-attachments/assets/625f67c9-35e6-4e1a-9f35-d512746626c4" />
after Registration 
<img width="1920" height="1080" alt="Screenshot (302)" src="https://github.com/user-attachments/assets/d112d499-e178-42d0-b529-3e3075ca21a6" />
edit user details 
<img width="1920" height="1080" alt="Screenshot (304)" src="https://github.com/user-attachments/assets/61d175f1-188f-451a-a2a3-82c7ddf1c7c6" />
delete user
<img width="1920" height="1080" alt="Screenshot (305)" src="https://github.com/user-attachments/assets/52bfe096-abfd-4c26-95a2-45ccdfda1e82" />
view user
<img width="1920" height="1080" alt="Screenshot (303)" src="https://github.com/user-attachments/assets/f53bc8ca-f095-46fd-8ed8-c8248e196d12" />





