# Todo App Setup

Deze structuur bevat een losse backend (PHP + MySQL + phpMyAdmin via Docker) en ruimte voor een frontend (Vite).

## Backend draaien
1. Ga naar de backend map: `cd backend`
2. Start de containers: `docker compose up --build`
3. Open PHP: http://localhost:8080  
   Open API test: http://localhost:8080/api/todos.php  
   Open phpMyAdmin: http://localhost:8081 (root/rootpassword)

## Database aanmaken en vullen
- In phpMyAdmin: maak de database `todo_app` (als die niet bestaat).
- Maak een table `todos` met kolommen `id` (INT AI PK), `text` (VARCHAR), `status` (VARCHAR) en `created_at` (TIMESTAMP DEFAULT CURRENT_TIMESTAMP).
- Voeg enkele rijen toe (seed) zodat de API later echte data kan teruggeven.

## Frontend starten (Vite)
1. Vanaf de projectroot (`todo-app/`): `npm create vite@latest frontend -- --template vanilla`
2. Volg de prompt en installeer dependencies: `cd frontend && npm install`
3. Start dev server: `npm run dev` (zorg voor CORS naar http://localhost:8080).

## Volgende stappen
- Vervang de statiche array in `php/api/todos.php` door een DB-query met mysqli/pdo_mysql.
- Voeg CORS headers toe in de API zodra de frontend requests verstuurt.
- Voeg auth-mechanismen toe zodra de basis werkt.
