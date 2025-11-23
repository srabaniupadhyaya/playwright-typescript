# 🚀 Project Name

This project contains end-to-end tests using Playwright, packaged with Docker Compose for easy setup.

---

## 📦 Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed
- Node.js (optional, if you want to run Playwright locally)

---

## ▶️ Running the Project

To start the project using Docker Compose, run:

```bash
docker-compose up

## 🐳 Running with Docker (without Compose)

If you prefer to run the tests using plain Docker commands instead of Docker Compose:

### Build the image from your Dockerfile
```bash
docker build -t playwright-tests .

## 📊 Viewing and Refreshing Test Reports

Playwright can generate an HTML report of your test runs.  
After running tests with the `--reporter=html` option, you can open the report using:

```bash
npx playwright show-report outputs/report-html

###🧹 Clearing Old Report
rm -rf outputs/report-html