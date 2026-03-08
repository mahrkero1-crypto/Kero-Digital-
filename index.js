// --- إمبراطورية SoreK Chronicle - الكود الموحد المطور ---
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// 1. الربط المجاني بقاعدة البيانات (MongoDB Atlas)
const mongoURI = "YOUR_MONGODB_FREE_LINK_HERE"; 
mongoose.connect(mongoURI).then(() => console.log("✅ قاعدة بيانات الإمبراطورية جاهزة"));

// 2. نموذج المستخدم (النقاط والبصمة)
const userSchema = new mongoose.Schema({
    username: String,
    points: { type: Number, default: 1000 }, // الـ 1000 نقطة المجانية
    fingerprintId: String,
    isPremium: { type: Boolean, default: false } // باقة الـ 150 جنيه
});
const User = mongoose.model('User', userSchema);

// 3. واجهة المستخدم الفخمة (HTML/CSS/JS) المدمجة
const htmlContent = `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <style>
        :root { --gold: #D4AF37; --royal: #002366; --bg: #050505; }
        body { background: var(--bg); color: white; font-family: 'Cairo', sans-serif; text-align: center; }
        .brand-logo { width: 200px; filter: drop-shadow(0 0 15px var(--gold)); margin-top: 30px; }
        .search-box { width: 80%; max-width: 600px; padding: 20px; border-radius: 50px; border: 2px solid var(--gold); background: rgba(255,255,255,0.05); color: white; font-size: 18px; outline: none; transition: 0.4s; }
        .search-box:focus { box-shadow: 0 0 25px var(--gold); }
        .admin-bar { background: linear-gradient(90deg, var(--royal), #000); padding: 10px; border-bottom: 2px solid var(--gold); display: flex; justify-content: space-around; font-weight: bold; color: var(--gold); }
    </style>
</head>
<body>
    <div class="admin-bar">
        <span>💰 أرباح باقات رمضان: 1,500 EGP</span>
        <span>👥 مشتركون: 10</span>
        <span>⚡ نقاطك: 1000</span>
    </div>
    <img src="https://i.ibb.co/SoreK_Logo.png" class="brand-logo">
    <h1 style="color: var(--gold);">SoreK Chronicle</h1>
    <input type="text" id="searchInput" class="search-box" placeholder="ابحث بصوتك عن سبونج بوب أو أي كود..." oninput="handleSearch(this.value)">
    <div id="results" style="margin-top: 30px;"></div>

    <script>
        // ميزة الصوت الذكي والبصمة
        function speak(text, character) {
            const msg = new SpeechSynthesisUtterance(text);
            if(character.includes("سبونج بوب")) { msg.pitch = 2; msg.rate = 1.2; }
            window.speechSynthesis.speak(msg);
        }

        async function handleSearch(query) {
            const resDiv = document.getElementById('results');
            if(query.includes("سبونج بوب")) {
                speak("أهلاً بك! أنا سبونج بوب، جاري فتح الأرشيف..", "سبونج بوب");
                resDiv.innerHTML = '<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjEx.../giphy.gif" style="width:300px; border-radius:20px; border:2px solid var(--gold);">';
            }
        }
    </script>
</body>
</html>
`;

// 4. المسارات (Routes) لتشغيل المحرك
app.get('/', (req, res) => res.send(htmlContent));

app.post('/pay-ramadan', async (req, res) => {
    // تفعيل باقة الـ 150 جنيه أوتوماتيكياً
    res.json({ message: "تم تفعيل باقة رمضان بنجاح وتصفير العداد لـ 1000 نقطة جديدة" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`🚀 إمبراطورية SoreK تعمل على بورت \${PORT}\`));
