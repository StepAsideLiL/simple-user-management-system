# Simple User Management System App

### [Live Link](https://simple-user-management-system.netlify.app/)

#### [Client Side Repo](https://github.com/StepAsideLiL/simple-user-management-system) | [Server Side Repo](https://github.com/StepAsideLiL/simple-user-management-system-server)

## Run The Website on Local Machine

### Setup Server Side

1. Clone the repository

```bash
git clone https://github.com/StepAsideLiL/simple-user-management-system-server.git
```

2. `cd` into the simple-user-management-system-server folder

```bash
cd simple-user-management-system-server
```

3. Create a `.env` file for environment variables
4. Set two variable `PORT` and `DB_URI` variables, such as.

```env
PORT=5000
DB_URI=mongodb://127.0.0.1:27017/userManagementDB
```

> **Note**
> You need to have mongodb client installed on your system.

5. Not install the dependencies.

```bash
npm install
```

6. Run the server

```bash
npm run dev
```

### Setup Client Side

1. Clone the repository

```bash
git clone https://github.com/StepAsideLiL/simple-user-management-system.git
```

2. `cd` into the simple-user-management-system folder

```bash
cd simple-user-management-system
```

3. Create a `.env.local` file for environment variables
4. Set a `VITE_API_URL` variable for api base URL

```env
VITE_API_URL=http://localhost:5000/api/v1
```

5. Not install the dependencies.

```bash
npm install
```

6. Run the server

```bash
npm run dev
```
