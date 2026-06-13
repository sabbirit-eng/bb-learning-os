# BusinessBrain AI — Learning OS v2.0

## 🚀 GitHub Pages-এ Live করার পদ্ধতি

### ধাপ ১: Repository তৈরি করো
1. GitHub-এ নতুন public repository তৈরি করো (যেমন: `bb-learning-os`)
2. এই সব ফাইলগুলো সেই repo-তে push করো:
   ```
   bb-os/
   ├── index.html
   ├── roadmap.html
   ├── project.html
   ├── tracking.html
   └── assets/
       ├── data.js
       └── style.css
   ```

### ধাপ ২: GitHub Pages Enable করো
1. Repository → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / folder: **/ (root)**
4. Save করো — কিছুক্ষণ পরে live link পাবে:
   `https://YOUR_USERNAME.github.io/bb-learning-os/`

### ধাপ ৩: GitHub Storage Setup (roadmap.html খোলার পর)
1. **roadmap.html** open করো
2. Top-right এ **⚙ GitHub** button click করো
3. Modal-এ দেওয়া link-এ গিয়ে **Personal Access Token** তৈরি করো
   - Scope: শুধু `gist` সিলেক্ট করো
4. Token paste করে **Connect** করো
5. একটি public Gist তৈরি হবে — তোমার সব progress ও notes সেখানে সেভ হবে

### ধাপ ৪: Share Link
- **⚙ GitHub** modal-এ share link পাবে
- বা **🔗 শেয়ার** button click করো
- ওই link যে কেউ খুলতে পারবে — শুধু দেখতে পারবে, পরিবর্তন করতে পারবে না

## ✨ নতুন ফিচারসমূহ (v2.0)

| ফিচার | বিবরণ |
|-------|-------|
| **📝 পার্সোনাল নোট** | প্রতিটি Phase-এর জন্য নোট লেখো — auto-save সহ |
| **🌱 Git/GitHub Phase** | নতুন Phase 00 — ১৩টি Git/GitHub দক্ষতা + CI pipeline |
| **🟩 Supabase** | ঐচ্ছিক learning path — Phase 04 (Database)-এর সাথে যুক্ত |
| **🎯 Practice Q&A** | প্রতিটি Phase-এ ৫টি প্র্যাকটিস প্রশ্ন + ২টি মিনি-প্রজেক্ট |
| **🐙 GitHub Storage** | Progress + Notes GitHub Gist-এ সেভ — যেকোনো ডিভাইসে |
| **🔗 Share Link** | Read-only link — Progress শেয়ার করো, reset হবে না |

## 📁 File Structure
```
index.html      — হোম পেজ
roadmap.html    — মেইন রোডম্যাপ (notes, practice Q&A, GitHub setup)
project.html    — BusinessBrain AI project preview
tracking.html   — Progress tracking dashboard
assets/
  data.js       — সব ডেটা + GitHub storage engine
  style.css     — সম্পূর্ণ styling
```
