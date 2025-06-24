# React + TypeScript + Vite

# Project - NoSQL + RESTful API Backend for a bakery

## Table of Contents

- **[Getting Started](#getting-started)**<br>
- **[Installing](#installing)**<br>
- **[Used Dependencies](#dependencies)**<br>

### Getting Started
This Frontend app is built on React + Vite + Typescript. It connects to Unsplash API to download images in real time, and offers a stylized and functional e-commerce website

### Installing

Follow the guide beneath to set up the project:<br>

1. **Navigate (through the terminal) to the folder where you want to set up the project:**<br>

```
 PS C:\Users\[your username]> cd [your folder name]
```

2. **Now, when you have navigated to your desired folder, clone the repository:**<br>

```
 git clone https://github.com/werAnnOstrowska/projektReact.git
```

3. **Initialize a React application and install needed dependencies:**<br>
    -Still having your terminal open, install the dependencies. The list of needed dependencies can be found in `package.json` file under `dependencies`.

    ```
     npm create vite@latest folder_name -- --template react-ts
     npm i 
     npm run dev


 ```

4. **Create a .env file and connect your api**<br>

    ```
     touch .env
     nano .env
     {
        VITE_UNSPLASH_CLIENT_ID=your_client_id
     }
    ```
    *ctrl + o to save*, *enter*, *ctrl + x to exit*

5. **To run tests, navigate to your app folder .

    ```
     cd folder_name

    ```
    To run unit tests with Vitest, run:

    ```
     npm run test:u

    ```

    To run e2e tests with playwright, run: 

    ```
     npm run test:e2e

    ```

    
### Dependencies

1. React router
2. React Query
3. Playwright
4. Vitest
5. Material Ui
6. Radix Ui
7. React Spring
8. react-chartjs-2
9. Formik
10. Zustand
11. env