# Portfolio Laravel REST API Backend

This is the standalone Laravel 11/12 REST API backend for your portfolio.

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   composer install
   ```

2. **Copy Environment & Generate App Key:**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. **Database Setup & Migrations:**
   Choose your database in `.env` (SQLite or Supabase Postgres recommended for permanent free hosting).
   ```bash
   php artisan migrate --seed --seeder=PortfolioSeeder
   ```

4. **Start the Laravel Development Server:**
   ```bash
   php artisan serve
   ```
   API runs at `http://127.0.0.1:8000/api`.
