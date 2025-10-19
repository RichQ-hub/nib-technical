# Nib Technical Challenge

## Contents

- [Project Setup](#project-setup)
  - [Method 1: Docker (Recommended)](#method-1-docker-recommended)
  - [Method 2: Traditional Method](#method-2-traditional-method)

## Project Setup

### Method 1: Docker (Recommended)

#### Step 1: Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

1. Install Docker Desktop.
2. Run Docker Desktop.

#### Step 2: Clone the project

```bash
git clone https://github.com/RichQ-hub/nib-technical.git
# or
git clone git@github.com:RichQ-hub/nib-technical.git
```

Then switch to the root project folder.

```bash
cd nib-technical
```

#### Step 3: Run the server with the `startup.sh` script

The `startup.sh` script will handle building and tearing down the docker containers.

**On Linux (Tested on WSL Ubuntu):**

```bash
./startup.sh
```

**On Windows:**
```bash
bash startup.sh
```

> [!IMPORTANT]
> You must have docker desktop running!

> [!IMPORTANT]
> **Make sure the file is executable**
>
> Run `chmod +x startup.sh` to provide executable permissions for the file.

> [!NOTE]
> If your terminal complains with the error `Error: cannot execute: required file not
> found`, startup.sh could have CRLF line endings. To fix this, ensure LF line endings are
> used instead.

The frontend server will be running on `http://localhost:3333`.

The first time the script is ran will take 5-10 minutes. Subsequent executions will be much
faster due to docker's layering caches.

**Ready Indication**

Make sure frontend container is running the terminal. You know it's ready when it displays something similar to the following.

```bash
frontend-1  |   ▲ Next.js 14.2.14
frontend-1  |   - Local:        http://4dce54a37d7a:3000
frontend-1  |   - Network:      http://172.18.0.4:3000
frontend-1  | 
frontend-1  |  ✓ Starting...
frontend-1  |  ✓ Ready in 248ms
```

#### Step 4: (Optional) Alternative startup

If running `startup.sh` refuses to work, simply run:

```bash
docker compose up
```

Once you're done with the application, press `Ctrl+C` in the terminal and then run:

```bash
docker compose down
```

Again, the frontend server will be running on `http://localhost:3333`.

#### Step 5: Stopping the server

When you want to stop the server, and subsequently all the docker containers, simply press
`Ctrl+C` in the terminal.

### Method 2: Traditional Method

#### Prerequisites

As per the Nextjs docs, make sure your system meets the following requirements:

- [Node.js 18.18](https://nodejs.org/en) or later.
- macOS, Windows (including WSL), or Linux.
- `yarn` package manager installed.

#### Step 1: Clone the project

```bash
git clone https://github.com/RichQ-hub/nib-technical.git
# or
git clone git@github.com:RichQ-hub/nib-technical.git
```

#### Step 2: Install frontend dependencies

```bash
cd nib-technical/frontend
yarn install --frozen-lockfile
```

#### Step 3: Run the development server (while in the frontend directory)

```bash
yarn dev
```

The frontend server will be running on `http://localhost:3000`.
