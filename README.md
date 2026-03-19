# React Food Order App

A small full-stack food ordering application built with React 19, Vite, and Express. The project demonstrates practical frontend state management, reusable UI composition, asynchronous data fetching, form handling, and client-server integration in a focused real-world flow.

This app was built as a portfolio project to showcase how I approach:

- component-based UI development
- shared state with React Context and reducers
- client-side cart logic with derived totals
- modal-driven user flows
- REST API integration with `fetch`
- traditional form submission and error handling
- simple backend persistence without a database

## What The App Does

Users can:

- load a list of available meals from the backend
- add meals to a cart
- increase or decrease quantities inside the cart
- see a live cart item count in the header
- open a checkout form from the cart modal
- submit an order to the backend
- receive a success confirmation after a completed submission

## Tech Stack

- Frontend: React 19, Vite
- Backend: Node.js, Express
- Styling: plain CSS
- Data storage: JSON files used as a lightweight mock database

## Architecture Overview

### Frontend

The frontend is organized around small reusable components:

- `Meals` fetches meal data from the backend
- `MealItem` renders each meal card and dispatches cart actions
- `Header` displays the current cart count
- `Cart` shows selected items, quantity controls, and the total price
- `Form` handles checkout input and order submission
- `ConfirmationModal` provides post-submit feedback
- `Modal` and `ModalButtons` encapsulate reusable dialog behavior

### State Management

The application uses a shared context and reducer in `src/components/ModalContext.jsx` to manage:

- modal visibility
- cart items
- item quantity updates
- derived cart totals

I chose Context + `useReducer` because it keeps cart logic centralized and predictable without introducing extra libraries. This makes the state flow easy to reason about and scales better than passing cart data through multiple levels of props.

### Backend

The Express backend exposes two core routes:

- `GET /meals` returns the available meal list from `backend/data/available-meals.json`
- `POST /orders` validates incoming order data and persists completed orders into `backend/data/orders.json`

This setup simulates a real API + persistence layer while keeping the project lightweight and easy to run locally.

## Key Implementation Decisions

### 1. Cart State Lives On The Frontend

The cart is managed in React rather than being fetched from the backend on every change. This was a deliberate choice because cart interactions should feel instant and responsive. The backend is only used when the user submits a completed order.

### 2. Orders Are Persisted Separately

`orders.json` is not used to power the live cart. Instead, it acts as backend storage for submitted orders. This separation reflects how production systems typically distinguish between temporary UI state and persisted business data.

### 3. Traditional Form Handling First

The checkout form uses local component state and a standard async submit flow instead of newer React form actions. For this project, that choice makes the logic easier to understand, easier to debug, and more appropriate for a simple Express API backend.

### 4. Reusable Modal Flow

The modal system was structured so cart, checkout, and confirmation screens can all reuse the same modal wrapper while still having different close and confirm behavior.

## API Flow

1. The frontend loads meals with `fetch("http://localhost:3000/meals")`
2. Users build their cart locally through reducer actions
3. On checkout submission, the frontend sends a `POST` request to `http://localhost:3000/orders`
4. The backend validates the payload
5. Successful orders are appended to `orders.json`
6. The frontend clears the cart and opens a confirmation modal

## Project Structure

```text
Food_Order_App/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Cart.jsx
│   │   ├── ConfirmationModal.jsx
│   │   ├── Form.jsx
│   │   ├── Header.jsx
│   │   ├── MealItem.jsx
│   │   ├── Meals.jsx
│   │   ├── Modal.jsx
│   │   ├── ModalButtons.jsx
│   │   ├── ModalContext.jsx
│   │   └── TextButton.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── backend/
│   ├── data/
│   │   ├── available-meals.json
│   │   └── orders.json
│   ├── public/images/
│   ├── app.js
│   └── package.json
└── package.json
```

## Running The Project Locally

### 1. Install frontend dependencies

```bash
npm install
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Start the backend

From the `backend` folder:

```bash
npm start
```

The backend runs on `http://localhost:3000`.

### 4. Start the frontend

From the project root:

```bash
npm run dev
```

The frontend runs through Vite and consumes the backend API locally.

## What This Project Demonstrates

From an engineering perspective, this project demonstrates:

- understanding of React component design and data flow
- practical reducer-based state management
- use of Context for shared application state
- real client-server communication using REST endpoints
- controlled form inputs and async submission handling
- error and loading state management
- separation between UI state and persisted backend data
- ability to build and connect both frontend and backend pieces of a feature

## Future Improvements

If this project were extended further, the next improvements I would consider are:

- client-side field validation before submission
- disabling actions while requests are in flight
- environment-based API configuration instead of hardcoded localhost URLs
- tests for reducer logic and critical UI flows
- improved accessibility and keyboard handling for modal interactions
- replacing JSON persistence with a proper database-backed API

## Why This Project Matters

This project is intentionally small enough to understand quickly, but complete enough to demonstrate meaningful software engineering decisions. It shows not only that I can build UI, but that I understand data flow, application state, backend integration, and how to structure a feature from menu data all the way through order submission.
