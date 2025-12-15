# SkillForge-LMS Deployment Guide

This guide explains how to deploy the SkillForge-LMS frontend to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup)
- A [Clerk account](https://dashboard.clerk.com) with an application configured
- Your backend API deployed and accessible (if applicable)

## Deployment Steps

### 1. Push to GitHub

Ensure your code is pushed to a GitHub repository:

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Import Project to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Select the `frontend` folder as the **Root Directory**

### 3. Configure Environment Variables

In Vercel Dashboard, go to **Settings** → **Environment Variables** and add:

| Variable                                          | Required | Description                                                   |
| ------------------------------------------------- | -------- | ------------------------------------------------------------- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`               | ✅       | Your Clerk publishable key (starts with `pk_`)                |
| `CLERK_SECRET_KEY`                                | ✅       | Your Clerk secret key (starts with `sk_`)                     |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`                   | ✅       | `/sign-in`                                                    |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL`                   | ✅       | `/sign-up`                                                    |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`             | ✅       | `/`                                                           |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`             | ✅       | `/`                                                           |
| `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL` | ✅       | `/`                                                           |
| `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL` | ✅       | `/`                                                           |
| `NEXT_PUBLIC_API_URL`                             | ✅       | Your backend API URL (e.g., `https://api.skillforge.com/api`) |

> [!IMPORTANT]
> Use your **production** Clerk keys for the production environment, not test keys.

### 4. Deploy

Click **"Deploy"** and Vercel will:

- Install dependencies (`npm install`)
- Build the project (`npm run build`)
- Deploy to a global CDN

## Updating Clerk Configuration

After deployment, update your Clerk application settings:

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Navigate to your application → **Settings** → **Domains**
3. Add your Vercel deployment URL (e.g., `skillforge-lms.vercel.app`)

## Troubleshooting

### Build Fails with Environment Variable Errors

- Ensure all required environment variables are set in Vercel
- Check that variable names match exactly (they are case-sensitive)
- Redeploy after adding missing variables

### Authentication Not Working

- Verify Clerk keys are correct and for the right environment (test vs production)
- Add your Vercel domain to Clerk's allowed domains
- Check browser console for specific error messages

### API Requests Failing

- Ensure `NEXT_PUBLIC_API_URL` points to your deployed backend
- Check CORS settings on your backend allow requests from your Vercel domain
- Verify backend is running and accessible

## Local Development

For local development, copy the example environment file:

```bash
cp env.example .env.local
```

Then update `.env.local` with your development keys.

## Automatic Deployments

Vercel automatically deploys:

- **Production**: When you push to `main` branch
- **Preview**: For every pull request

## Custom Domain (Optional)

To add a custom domain:

1. Go to Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Add your domain
3. Configure DNS records as instructed by Vercel
4. Update Clerk's allowed domains to include your custom domain
