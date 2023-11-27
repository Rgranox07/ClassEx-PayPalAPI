# ClassEx-PayPalAPI
# PayPal REST API Exercise - Mean Stack Development Course Checkout

This Node.js application is designed to demonstrate the integration of the PayPal REST API for a web development course checkout. The application is built using Node.js, Express as the server framework, EJS as the view engine, and leverages the PayPal REST API for processing payments.

## Prerequisites

Before running the application, ensure that you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- Visual Studio Code with the Prettier extension for code formatting.

## Getting Started

1. **PayPal Developer Account:**
   - Create an account on the PayPal Developer platform [here](https://developer.paypal.com/).
   - Obtain your Client ID and Client Secret from the developer portal.

2. **Clone the Repository:**
   - Clone this repository to your local machine.

3. **Configure PayPal Credentials:**
   - Open the `app.js` file and locate the placeholder for PayPal credentials.
   - Replace `YOUR_CLIENT_ID` and `YOUR_CLIENT_SECRET` with the credentials obtained from the PayPal Developer portal.

4. **Install Dependencies:**
   - Open a terminal and navigate to the project directory.
   - Run the following command to install project dependencies:
     ```bash
     npm install
     ```

5. **Run the Application:**
   - In the terminal, run the following command to start the application:
     ```bash
     node app.js
     ```

6. **Access the Checkout Page:**
   - Open your browser and go to `http://localhost:3000/` to access the web development course checkout page.

7. **Complete the Purchase:**
   - Click on the PayPal payment option.
   - Log in with the PayPal credentials obtained from the personal account on the PayPal Developer website.
   - After completing the transaction, check the Visual Studio Code terminal for the order ID and payer ID.

## Additional Information

- **VSCode Extension:**
  - The project uses the "Prettier - Code Formatter" extension for consistent code formatting in Visual Studio Code.

Happy coding!


 
