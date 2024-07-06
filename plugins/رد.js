let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^تست$/i.test(m.text)) { 
     responses = [ 
 '*شغال يسطا*'  
     ]; 
} else if (/^مارو$/i.test(m.text)) { 
     responses = [ 
       '*شغال يسطا*',  
     ]; 
   }else if (/^بحبك$/i.test(m.text)) { 
     responses = [ 
'*شكرا*'
     ]; 
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
