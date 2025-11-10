# 📧 Resend Email Setup Guide

## ✅ What's Already Done

The contact form is fully integrated with Resend API! When visitors submit the form:
1. Data is sent to `/api/contact`
2. API validates and formats the data
3. Resend sends a professional email to the client
4. User sees success message

---

## 🔧 Setup Required (5 minutes)

### Step 1: Get Resend API Key

1. Go to [Resend.com](https://resend.com)
2. Sign up with client's business email
3. Click **"API Keys"** in sidebar
4. Click **"Create API Key"**
5. Name it: `Nhu Media Production`
6. Copy the key (starts with `re_...`)

### Step 2: Add Environment Variables

Create a `.env.local` file in the project root:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=nhumediastudio@gmail.com
```

**Replace with:**
- `RESEND_API_KEY`: The key from Step 1
- `CONTACT_EMAIL`: Where emails should be sent (client's Gmail)

### Step 3: Restart Dev Server

```bash
npm run dev
```

That's it! Forms will now send emails.

---

## 📨 What Emails Look Like

When someone submits the form, the client receives a nicely formatted email with:

✅ **Contact Info**
- Name
- Business Name
- Email (clickable)
- Website
- Budget (highlighted)

✅ **Services Interested In**
- Bullet list of selected services

✅ **Message**
- Customer's full message

✅ **Quick Actions**
- Direct reply-to link

---

## 🚀 For Production Deployment

### Option 1: Keep Using `onboarding@resend.dev` (Free)
- Works immediately
- Good for testing
- Shows "via resend.dev" in Gmail

### Option 2: Use Custom Domain (Recommended)
After deploying to production:

1. Go to Resend → **Domains**
2. Click **"Add Domain"**
3. Enter: `nhumediastudio.com`
4. Add DNS records (Resend provides exact records)
5. Wait for verification (~5-10 minutes)
6. Update API route:

```typescript
from: 'Nhu Media Studio <nhumediastudio@gmail.com>'
```

**Benefits:**
- Professional sender address
- Better deliverability
- No "via resend.dev" tag

---

## 💰 Pricing

**Free Tier:**
- 100 emails/day
- 3,000 emails/month
- Perfect for contact forms

**Paid Plans:**
- Only needed if getting 100+ leads per day
- $20/month for 50,000 emails

---

## 🧪 Testing

### Test the Form:

1. Fill out contact form on website
2. Check client's email inbox
3. Should receive formatted email within seconds

### If Email Doesn't Arrive:

1. **Check spam folder** first!
2. Check console for errors: `npm run dev` terminal
3. Verify `.env.local` file exists and has correct values
4. Make sure dev server was restarted after adding .env

---

## 🔍 Troubleshooting

### "Email service not configured"
❌ `.env.local` file missing or has wrong variable names
✅ Create file with exact variable names above

### "Failed to send email"
❌ Invalid API key
✅ Get new key from Resend dashboard

### Emails going to spam
❌ Using default sender address
✅ Setup custom domain (Option 2 above)

### Not receiving ANY emails
❌ Check `CONTACT_EMAIL` is correct
❌ Check spam folder
✅ Try different email address for testing

---

## 📋 Deployment Checklist

When deploying to Vercel/Netlify:

- [ ] Add `RESEND_API_KEY` to environment variables
- [ ] Add `CONTACT_EMAIL` to environment variables
- [ ] Test form after deployment
- [ ] (Optional) Setup custom domain on Resend
- [ ] Update `from` address in API route if using custom domain

---

## 🆘 Support

If you encounter issues:

1. Check Resend Dashboard → **Logs** to see if emails are sending
2. Check browser console for JavaScript errors
3. Check server logs for API errors
4. Email Resend support (they're very responsive!)

---

## 📧 Example Email Preview

```
From: Nhu Media Studio <onboarding@resend.dev>
To: nhumediastudio@gmail.com
Subject: New Lead: Acme Corp - $2,500 - $5,000

────────────────────────────────
New Contact Form Submission
────────────────────────────────

Name: John Smith
Business: Acme Corp
Email: john@acme.com
Website: www.acme.com
Budget: $2,500 - $5,000

Services Interested In:
• Google Ads
• Meta Ad Campaigns (Facebook/Instagram)
• Website Search Engine Optimization

Message:
We're looking to scale our Google Ads campaigns
and need an expert to help optimize our spend...

────────────────────────────────
Quick Actions:
Reply to: john@acme.com
────────────────────────────────
```

---

**✨ Setup is complete! Forms are ready to collect and email leads!**

