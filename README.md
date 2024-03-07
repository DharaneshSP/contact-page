<!--<h3 align="left" >
  INTERNSHIP ASSIGNMENT
</h3>
-->

### Internship Assignment

 A simple contact form page project to collect the user's contact information and to store in google spreadsheet


<div align="left">
</div>



#### Local Setup and Run Instructions

- Clone Repository
  ```bash
    git clone https://github.com/DharaneshSP/contact-page.git
  
- Navigate to Project
  ```bash
    cd contact-page

- Google Sheet Integration
  
  - Create a Google Spreadsheet, open it, click "Share" in the upper right corner, change `restricted` to `Anyone with the link` under general access, change `viewer` to `editor` under role conversion, and then copy your sheet's link.

  - Login to `sheetdb.io` with your google account and use the option `Create the free API` and paste your sheet's link and then copy the `endpoint url` (This is your sheet's sheetdb url).

  - Create .env file on the project in your local machine and as in the .env.example file , create variable `SHEETDB_URL` and map with your previously copied sheetdb endpoint.

  
- Install Dependencies
  ```bash
    npm i
  ```
  (or)
  
  ```bash
    yarn
  
- Run Application
  ```bash
    npm run dev
  ```
  (or)
  
  ```bash
    yarn dev
  ```
  
-  Open http://localhost:3000 at your Web Browser


  

