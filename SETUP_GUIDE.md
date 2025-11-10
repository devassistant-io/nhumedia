# 🚀 Nhu Media Studio Website - Setup Guide

## ✅ Website is Live!

Your website is now running at: **http://localhost:3000**

## 🎯 Quick Customization Checklist

### 1. **Google Reviews** (IMPORTANT)
📍 **File**: `components/GoogleReviews.tsx`

Currently showing 3 placeholder reviews. To add REAL Google reviews:

**Option A - Manual Entry:**
- Replace the `reviews` array with your actual Google reviews
- Copy text, names, and dates from your Google Business profile

**Option B - Google Reviews API (Advanced):**
- Use Google Places API to fetch reviews automatically
- Requires API key and some development work

**Update the review link:**
- Line 130: Replace `YOUR_GOOGLE_BUSINESS_ID` with your actual Google Business ID
- Example: `https://g.page/r/CXXXXXxxxxXXX/review`

### 2. **Calendly Integration** (REQUIRED)
📍 **File**: `components/CalendlySection.tsx`

Current placeholder: `https://calendly.com/nhumediastudio/30min`

**To connect:**
1. Go to [Calendly.com](https://calendly.com) and create a 30-min event
2. Copy your scheduling link
3. Replace line 72 in `CalendlySection.tsx`

**For embedded widget (optional):**
- Uncomment lines 75-80 for full Calendly embed
- Add Calendly script to `app/layout.tsx`

### 3. **Form Submission** (CRITICAL)
📍 **File**: `components/MultiStepForm.tsx`

Currently, the form just logs to console. You need to connect it to:

**Recommended Option - Email Service:**
```bash
npm install resend
```

Then create `app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  await resend.emails.send({
    from: 'nhumediastudio@gmail.com',
    to: 'your-email@example.com',
    subject: 'New Lead from Website',
    html: `<h2>New Contact Form Submission</h2>
           <p><strong>Name:</strong> ${data.name}</p>
           <p><strong>Business:</strong> ${data.businessName}</p>
           <p><strong>Email:</strong> ${data.email}</p>
           <p><strong>Website:</strong> ${data.website}</p>
           <p><strong>Budget:</strong> ${data.budget}</p>
           <p><strong>Services:</strong> ${data.services.join(', ')}</p>
           <p><strong>Message:</strong> ${data.message}</p>`
  });
  
  return Response.json({ success: true });
}
```

Update `MultiStepForm.tsx` line 47:
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

### 4. **Contact Information**
📍 **File**: `components/Footer.tsx`

Update:
- Email: Line 87 - `nhumediastudio@gmail.com`
- Phone: Line 96 - `+1 (234) 567-890` (replace with real number)
- Social media links: Lines 26-44

### 5. **Logo** (Optional but Recommended)
📍 **File**: `components/Navigation.tsx`

Current: Text-only logo "NHU MEDIA STUDIO"

To add image logo:
1. Add logo file to `public/logo.png`
2. Update line 33 in Navigation.tsx:
```tsx
<Image src="/logo.png" alt="Nhu Media Studio" width={200} height={50} />
```

### 6. **Analytics** (Recommended)
Add Google Analytics for tracking:

Create `components/Analytics.tsx`:
```tsx
import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_GA_ID');
        `}
      </Script>
    </>
  );
}
```

Import in `app/layout.tsx`

## 📱 Testing Checklist

- [x] Desktop view (1920px, 1440px, 1024px)
- [x] Tablet view (768px)
- [x] Mobile view (375px, 414px)
- [ ] Test form submission
- [ ] Test all navigation links
- [ ] Test mobile menu
- [ ] Verify Calendly booking works
- [ ] Check Google Reviews display correctly
- [ ] Test FAQ accordion
- [ ] Verify all CTAs work

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended - FREE)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial website build"
git push origin main
```

2. **Deploy:**
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your GitHub repo
- Click "Deploy"
- Done! Your site will be live in 2 minutes

3. **Add Environment Variables:**
In Vercel dashboard → Settings → Environment Variables:
```
RESEND_API_KEY=your_key_here
NEXT_PUBLIC_CALENDLY_URL=your_calendly_url
```

4. **Connect Custom Domain:**
- Go to Settings → Domains
- Add `nhumediastudio.com`
- Update DNS records as instructed

### Alternative: Netlify
```bash
npm run build
```
- Connect repo on Netlify
- Build command: `npm run build`
- Publish directory: `.next`

## 🎨 Color Customization

Your brand color (#709BA3) is defined in `app/globals.css`:

```css
--color-primary: #709BA3;
--color-secondary: #5A8089;
```

To change colors globally, update these variables.

## 📝 Content Updates

### Blog Posts
📍 **File**: `app/blog/page.tsx`

Add your own blog posts to the `blogPosts` array (line 9).


## 🛠️ Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

## 🐛 Troubleshooting

### Server won't start
```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

### Changes not showing
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Clear browser cache

### Form not submitting
- Check browser console for errors
- Verify API route exists
- Check network tab in DevTools

## 📞 Support

If you need help:
1. Check the main `README.md` for detailed documentation
2. Review Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
3. Contact your developer (Jerry)

## 🎉 Next Steps

1. [ ] Customize content (see checklist above)
2. [ ] Test thoroughly on all devices
3. [ ] Set up form submission
4. [ ] Connect Calendly
5. [ ] Add Google Analytics
6. [ ] Deploy to Vercel
7. [ ] Connect custom domain
8. [ ] Launch! 🚀

---

**Built with ❤️ for Nhu Media Studio**
**November 2025**


