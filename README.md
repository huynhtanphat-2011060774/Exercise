# Prologue

We extend our deepest gratitude to Mr. Le Hoang Viet Tuan, whose dedication in teaching and guiding us through the Open Source course has been invaluable.

*Mr. Le Hoang Viet Tuan* is not only an exceptional teacher but also a committed mentor. Leveraging his extensive knowledge and experience, he has facilitated a deeper understanding of the essence and significance of open-source software. Under his guidance, we have delved into real-world projects, translating theory into practice.

His unwavering dedication and encouragement have cultivated a positive learning environment, propelling us to overcome challenges. Through thought-provoking lectures and stimulating inquiries, he has not only enriched our knowledge but also honed our practical skills and fostered creative thinking.

Lastly, we express our profound gratitude and appreciation to *Mr. Le Hoang Viet Tuan* for his invaluable contribution to our growth. The Open Source course has been more than just a learning experience; it has been a journey of discovery, and *Mr. Le Hoang Viet Tuan* guidance has made this journey meaningful and memorable.

Once again, we extend our heartfelt thanks and respect to *Mr. Le Hoang Viet Tuan*

Sincerely,

Group 1


# CHAPTER 1: INTRODUCTION

## 1. Introduction to the Topic

In modern times, the intersection between human resources management and advances in information technology has opened up new opportunities in the business community. Our team is proud to introduce a web platform for human resources management, a project that we have developed to meet the diverse needs of organizations. With our website, users experience the convenience of easily tracking and managing human resources, from managing personal information to crucial business activities.

Our human resources management system not only optimizes human resources processes but also integrates intelligent features such as automatic notification of critical activities, data statistics to support decision-making, and ensure compliance with labor regulations. This increases the efficiency of the business and facilitates the intensive development of employees.

## 2. Reasons for Choosing the Topic

Building a human resources management website is a strategic decision that brings many significant benefits in today's context of the human resources and information technology sector. Our team is committed to implementing this project for the following main reasons:

- **Streamlined Registration**: The site will provide an easy and convenient registration experience for new employees. The registration process will be optimized to save time and effort for both employees and HR managers. By automating this process, we aim to enhance the onboarding experience and accelerate the integration of new hires into the organization.

- **Secure Login System**: The login system will be designed to ensure confidentiality and convenience. Employees can access the system quickly and securely, using authentication methods that safeguard sensitive information. This robust login system is essential for protecting employee data and maintaining trust within the organization.

- **Efficient Search Functionality**: The search feature will allow employees to easily access information about colleagues, staff policies, or training courses within the organization. By implementing advanced search algorithms, we aim to provide users with quick and accurate results, enabling them to find the information they need with minimal effort.

- **Comprehensive View of Details**: Employees can view and update their personal information in detail, including work history, training programs attended, and other relevant data. This comprehensive view empowers employees to take ownership of their professional development and ensures that HR records are accurate and up-to-date.

- **Effective Management Tools**: The system will provide HR managers with effective tools to manage information about employees, HR policies, and related activities. From tracking employee performance to administering benefits and rewards, these management tools will streamline HR processes and promote organizational efficiency.

Developing an HR website is not only an important step in organizational management but also an opportunity to create a valuable application, optimize human resources operations, and foster a collaborative and positive working environment. This aligns with our commitment to leveraging technology to enhance performance, promote collaboration, and drive overall business success.


# CHAPTER 2: Project Implementation Instructions

## Project: Human Resources Management

### Framework: LARAVEL
### Language: PHP
### Integrated Development Environment (IDE): VS Code
### Database: MySQL
### MODEL: MVC

---------------------------------------------------------------------------------------------------

1. **Clone Project from Repository:**
   - Open a terminal or command prompt on your computer.
   - Move to the directory where you want to store the project using the `cd directory_path` command.
   - Use the following command to clone the project from the GitHub repository:

2. **Install XAMPP and Setup Database:**
   - Download and install XAMPP on your computer.
   - Start Apache and MySQL on XAMPP Control Panel.
   - Access phpMyAdmin (http://localhost/phpmyadmin) to create a new database for the project.

3. **Environment Configuration:**
   - Open the `.env.example` file in the project folder and save it with the name `.env`.
   - Open the `.env` file and configure database connection parameters such as database name, username, and password.
    **Open the `.env.example` File:**
   - Navigate to the project folder.
   - Locate the `.env.example` file.
   - Open it with a text editor.

   **Save as `.env` File:**
   - Once opened, go to the "File" menu.
   - Choose "Save As" option.
   - Save the file with the name `.env` in the same directory.

   **Configure Database Connection Parameters:**
   - Open the newly created `.env` file with a text editor.
   - Update the following database connection parameters:
      ```plaintext
      DB_CONNECTION=mysql
      DB_HOST=127.0.0.1
      DB_PORT=3306
      DB_DATABASE=hr_sm_db
      DB_USERNAME=root
      DB_PASSWORD=
      ```
   - Fill in the `DB_PASSWORD` field with your MySQL password.
    
     **MAIL configuration**
     **Open the `.env` File:**
   - Navigate to your Laravel project folder.
   - Locate the `.env` file and open it with a text editor.

    **Configure Mail Settings:**
   - Update the following mail configuration parameters:
      ```plaintext
      MAIL_MAILER=smtp
      MAIL_HOST=smtp.gmail.com
      MAIL_PORT=587
      MAIL_USERNAME=your_email@gmail.com
      MAIL_PASSWORD=your_email_password
      MAIL_ENCRYPTION=tls
      MAIL_FROM_ADDRESS=your_email@example.com
      MAIL_FROM_NAME="${APP_NAME}"
      ```
   - Replace `your_email@gmail.com` with your Gmail address from which you want to send emails.
   - Replace `your_email_password` with the password for the specified Gmail account.
   - Ensure `MAIL_ENCRYPTION` is set to `tls` for Gmail.
   - Set `MAIL_FROM_ADDRESS` to your desired email address.
   - `${APP_NAME}` will automatically use your Laravel application's name as the `MAIL_FROM_NAME`.
   
     **Save Changes:**
   - After updating the mail configuration parameters, save the `.env` file.

4. **Save Changes:**
   - After updating the database connection parameters, save the `.env` file.

5. **Install Composer and Project Dependencies:**
   - Open terminal or command prompt and navigate to the project folder.
   - Run the `composer install` command to install Laravel libraries and dependencies.

6. **Create Application Key and Run Migration:**
   - Run the `php artisan key:generate` command to generate a new application key for the Laravel application.
   - Run the `php artisan migrate` command to perform migrations and create tables in the database.

7. **Run the Application:**
   - Run `php artisan server`
   - Open a web browser and visit `http://localhost/project_path/public` to see the home page of your Laravel application.
   - If there is a route error, you need to check Apache's VirtualHost configuration to make sure it is pointing to the public directory of the Laravel project.

8. **Start Using the Project:**
   - Log in to the system with the default account or create a new account if necessary.
   - Explore User, Employee, and Employee Salary management functions.
   - Test the CRUD (Create, Read, Update, Delete) features of each function and ensure they work as expected.

9.  **Optimize and Maintain Source Code:**
   - Test and optimize source code to ensure application performance and speed.
   - Regularly maintain the source code to fix minor bugs and improve features.

10. **Integrated Statistics and Reporting Features:**
   - Develop statistics and reporting features to display data about employees, salaries, and other management activities.
   - Use supporting libraries and tools to create and display statistical charts and graphs visually.
------------------------------------------------------------------------------------------------------------------
###  MVC Model

The MVC architectural pattern divides an application into three components: Model, View, and Controller. Each component handles specific aspects of development: 

- **Model:** Manages the data and business logic. Tasks include querying, adding, updating, or deleting data.

- **View:** Handles the presentation of data to users. Views request data from the model to display output and allow user interaction.

- **Controller:** Manages user input and interactions. It interprets user input, interacts with both the model and view, and sends commands to update data or change display.

###  The MVC pattern consists of three main components:

- **Model:** Contains data and related logic. It handles tasks like querying, adding, updating, or deleting data.

- **View:** Represents data presentation to users. Views request data from the model to display output and allow user interaction.

- **Controller:** Manages user interaction. It interprets user input, interacts with both the model and view, and sends commands to update data or change display.
  

------------------------------------------------------------------------------------------------------------------
##  Laravel

Laravel is open-source software that helps programmers build diverse software, web applications, and websites using the MVC architectural pattern. It was first released in 2011 and has since evolved with numerous features, making application development easier and more efficient.

###  Laravel has the following features:

- Hierarchical routing mechanism
- Concise and expressive query builder
- Error handling mechanism
- Rapid object-oriented access
- High-level security features


  ### SCREEN SHOT
  # LOGIN
  ![alt text](image-1.png "Login")
   # REGISTER
  ![alt text](image-2.png "Register")
  # FORGOT PASSWORD
  ![alt text](image-3.png)
  # RESET PASSWORD
  ![alt text](image-4.png)
  # DASHBOARD ADMIN
  ![alt text](image.png)
  # USER MANAGEMENT
  ![alt text](image-5.png)
  # EMPLOYEE MANAGEMENT
  ![alt text](image-6.png)
  # EMPLOYEE SALARY
  ![alt text](image-7.png)
  # VERIFY EMAIL
  ![alt text](image-8.png)

 ## Installation

### Server Requirements (Version 8)

- PHP >= 7.3
- BCMath PHP Extension
- Ctype PHP Extension
- Fileinfo PHP Extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
 
# THANk YOU NOTE

We would like to extend our sincere gratitude to everyone who contributed to this project. The success of this project would not have been possible without the support and contributions of all individuals involved.

In particular, we would like to express our special thanks to:

- **[Name of the person who created the project](https://www.facebook.com/soengsouy.com.kh)**: The individual who dedicated considerable effort and time to develop this project. Their contribution is invaluable and has greatly contributed to the success of the project.

Thank you to everyone who participated in and utilized our project!

---


