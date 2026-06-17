# BusinessBrain AI — Learning OS v2.1

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
   ├── tasks.html
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

## ✨ নতুন ফিচারসমূহ (v2.1)

| ফিচার | বিবরণ |
|-------|-------|
| **📅 ডেইলি টাস্ক প্ল্যান** | কোন দিন কতক্ষণ ধরে কী শিখবে তা প্ল্যান করো — প্র্যাকটিস চেকলিস্ট, পার-টাস্ক টাইমার, রোডম্যাপ-লিংকড কুইক-অ্যাড |
| **⏰ Auto Due/Missed + এক্সট্রা সময়** | সময়মতো শেষ না হলে স্বয়ংক্রিয়ভাবে Due হয়ে যায়, বাকি অংশ এক্সট্রা সময়-বাফার সহ পরের দিনের প্ল্যানে কপি হয় (এক্সট্রা % কাস্টমাইজযোগ্য) |
| **🔥 Streak ও সাপ্তাহিক চার্ট** | প্রতিদিন প্ল্যান সম্পন্ন করার ধারাবাহিকতা ট্র্যাক করো, পরিকল্পিত বনাম সম্পন্ন সময়ের সাপ্তাহিক বার চার্ট দেখো |
| **📝 পার্সোনাল নোট** | প্রতিটি Phase-এর জন্য নোট লেখো — auto-save সহ |
| **🌱 Git/GitHub Phase** | নতুন Phase 00 — ১৩টি Git/GitHub দক্ষতা + CI pipeline |
| **🟩 Supabase** | ঐচ্ছিক learning path — Phase 04 (Database)-এর সাথে যুক্ত |
| **🎯 Practice Q&A** | প্রতিটি Phase-এ ৫টি প্র্যাকটিস প্রশ্ন + ২টি মিনি-প্রজেক্ট |
| **🐙 GitHub Storage** | Progress + Notes + Tasks GitHub Gist-এ সেভ — যেকোনো ডিভাইসে |
| **🔗 Share Link** | Read-only link — Progress শেয়ার করো, reset হবে না |

## 📁 File Structure
```
index.html      — হোম পেজ
roadmap.html    — মেইন রোডম্যাপ (notes, practice Q&A, GitHub setup)
project.html    — BusinessBrain AI project preview
tracking.html   — Progress tracking dashboard
tasks.html      — ডেইলি টাস্ক প্ল্যান (সময়-পরিকল্পনা, Due/Missed ম্যানেজমেন্ট, স্ট্রিক)
assets/
  data.js       — সব ডেটা + GitHub storage engine + Daily Task ইঞ্জিন
  style.css     — সম্পূর্ণ styling
```
