import { googleImage } from '@bochilteam/scraper';

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `${lenguajeGB['smsAvisoMG']()}${mid.smsMalused7} *${usedPrefix + command} Gata*`; // إذا لم يتم تحديد نص البحث

    const prohibited = ['']; // قائمة الكلمات الممنوعة - حاليًا فارغة، قم بتخصيصها حسب الحاجة
    if (prohibited.some(word => m.text.toLowerCase().includes(word))) {
        return m.reply('⚠️😾'); // رد في حالة وجود كلمة ممنوعة في الاستعلام
    }

    try {
        const res = await googleImage(text); // البحث في صور جوجل
        let image = res.getRandom(); // الحصول على صورة عشوائية
        let link = image;

        // استبدال conn.sendButton بالطريقة المناسبة لإرسال زر
        conn.sendButton(
            m.chat,
            `💞 ${mid.buscador}: ${text}`, // استبدال ${mid.buscador} بنصك المحلي لـ "البحث"
            wm, // يفترض أن wm هو نص العلامة المائية الخاص بك أو متغيرها
            link,
            [['🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 | 𝙉𝙚𝙭𝙩', `/imagen ${text}`]], // زر للحصول على الصورة التالية
            null,
            null,
            m
        );

        // بدلاً من ذلك، يمكنك استخدام conn.sendFile لإرسال الصورة مباشرة
        // conn.sendFile(m.chat, link, 'error.jpg', `💞 ${mid.buscador}: ${text}`, m);

    } catch (e) {
        console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`); // تسجيل الخطأ إذا حدث أي شيء
        console.log(e);
        handler.money = false; // يفترض أن handler.money هو خاصية محددة لهذا المعالج
    }
};

handler.help = ['gimage <query>', 'imagen <query>']; // معلومات استخدام الأمر
handler.tags = ['internet', 'tools']; // الوسوم للتصنيف
handler.command = /^(gimage|image|imagen|jpg|صوره)$/i; // مشغلات الأوامر
handler.money = 50; // يفترض أن handler.money هو خاصية محددة لهذا المعالج

export default handler; // تصدير الدالة المعالجة
