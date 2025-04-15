# Notify

It is a Calendly clone built with **Next.js, React, Prisma, PostgreSQL, Clerk authentication, and Shadcn UI**. It allows users to **schedule meetings, manage availability, and generate calendar events with ease**.

## Features

- **User Authentication** (Clerk)
- **Database Management** (Prisma + PostgreSQL)
- **Event Creation & Management**
- **User Availability Management**
- **Custom Booking Links**
- **Google Meet Link Generation**
- **Meeting Cancellation**
- **Shadcn UI Components**

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Shadcn UI
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: Clerk
- **State Management**: React Hook

## Technologies Used

- **Clerk** – Authentication and user management for Next.js apps, handling sign-in, sign-up, and user sessions effortlessly.
- **Zod** – TypeScript-first schema validation library, ensuring data safety and correctness.
- **NeonDB** – A serverless Postgres database with fast performance, designed for modern web applications.
- **Prisma** – An ORM (Object-Relational Mapper) that simplifies database access and management with an intuitive API.

## Design Patterns Used

1. **Factory Pattern** – Used to create reusable and modular UI components dynamically.
2. **Singleton Pattern** – Ensures database connections (via Prisma) are efficiently managed.
3. **Observer Pattern** – Used for event notifications and real-time updates in meeting scheduling.
4. **MVC (Model-View-Controller)** – Implemented through API routes (Controller), Prisma models (Model), and React components (View).
5. **Decorator Pattern** – Used in middleware functions for authentication and authorization.
6. **Strategy Pattern** – Applied for handling different authentication strategies (e.g., OAuth, Clerk).
7. **Command Pattern** – Used to encapsulate user actions like booking or canceling a meeting as commands.

## Installation

```sh
npm i
npx prisma migrate dev
npm run dev



## create the .env file
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

```
![Erd _diagram](<Screenshot 2025-04-01 at 2.01.24 PM.png>)
