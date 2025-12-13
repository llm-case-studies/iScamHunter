# 🍎 iMac Quick Start Guide

**Mission:** Purchase Validation Test

1.  **Pull Latest Code**
    ```bash
    cd /media/alex/LargeStorage/Projects/iScamHunter
    git checkout main
    git pull origin main
    # Verify: 'cf-capture' folder should be GONE
    ```

2.  **Environment Setup**
    Create `web/.env.local` with your Stripe keys:
    ```env
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
    STRIPE_SECRET_KEY=sk_test_...
    DATABASE_URL="file:./dev.db"
    ```

3.  **Dependencies & Database**
    ```bash
    cd web
    npm install
    npx prisma migrate dev  # Creates local SQLite dev.db
    npx prisma db seed      # Adds 'Alien Story' & Hoodies
    ```

4.  **Launch**
    ```bash
    npm run dev
    # Open http://localhost:3000
    ```

5.  **Execute**
    - Go to `/checkout`.
    - Buy a Hoodie.
    - **Use Test Card:**
      - Number: `4242 4242 4242 4242`
      - Exp: `12/34`
      - CVC: `123`
    - Check Stripe Dashboard for success.

*Generated: 2025-12-13 | 15:50 EST*
