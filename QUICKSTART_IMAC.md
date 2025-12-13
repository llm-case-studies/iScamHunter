# 🍎 iMac Quick Start Guide

**Mission:** Purchase Validation Test

1.  **Pull Latest Code**
    ```bash
    cd /media/alex/LargeStorage/Projects/iScamHunter
    git checkout main
    git pull origin main
    # Verify: 'cf-capture' folder should be GONE
    ```

2.  **Dependencies & Database**
    ```bash
    cd web
    npm install
    npx prisma migrate dev  # Creates local SQLite dev.db
    npx prisma db seed      # Adds 'Alien Story' & Hoodies
    ```

3.  **Launch**
    ```bash
    npm run dev
    # Open http://localhost:3000
    ```

4.  **Execute**
    - Go to `/checkout`.
    - Buy a Hoodie.
    - Check Stripe Dashboard for success.

*Generated: 2025-12-13 | 15:50 EST*
