# signup
signup
Description: This project is a simple web application using Node.js and Express that collects user data from an HTML and JS form and adds it to a MailChimp mailing list using the MailChimp API.

# Prerequisites
Before running the project, make sure you have the following installed:

Node.js and npm (Node Package Manager)

# Getting Started
Clone the repository: git clone https://github.com/DhyanBhandari/signup.git
Navigate to the project directory: cd signup
Install dependencies: npm install

# Configuration
In order to use the MailChimp API, you need to provide your MailChimp API key and audience ID. Replace the placeholders in the code with your actual API key and audience ID:


// Replace "your_api_key" with your actual MailChimp API key
const apiKey = "your_api_key";

// Replace "your_audience_id" with your actual MailChimp audience ID
const audienceId = "your_audience_id";

# Running the Application
To start the application, run the following command:
node app.js or npm start
This will start the server on port 3000, or on the port specified in the process.env.PORT environment variable if set.
you will see the output like this ![Screenshot (347)](https://github.com/DhyanBhandari/signup/assets/109520497/f59ba237-b008-4a7a-8bf7-2a9b9c43602f)

# Usage
Open your web browser and navigate to http://localhost:3000.
Fill out the form with your first name, last name, and email address.
Click the  button to add your data to the MailChimp mailing list.
If the subscription is successful, you will be redirected to a success page. Otherwise, you will be redirected to a failure page.
# Dependencies
The project uses the following dependencies:

express: Fast, unopinionated, minimalist web framework for Node.js
body-parser: Node.js body parsing middleware
request: Simplified HTTP client
https: Node.js https module
These dependencies are already included in the package.json file, so they will be installed automatically when you run npm install.



This project was inspired by MailChimp's API and documentation.
Feel free to customize this README file further according to your project's needs and any additional information you want to provide to users.





