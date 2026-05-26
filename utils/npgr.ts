// const SHEET_NAME = "Sheet1";
// const LOGO_FILE_ID = "1mEBj3q7ONLskWZvDWm1Y9G6TrIt7fTme";

// function doPost(e) {
//   try {
//     const data = JSON.parse(e.postData.contents);
//     const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

//     if (isEmailAlreadyRegistered(sheet, data.email)) {
//       return ContentService.createTextOutput(JSON.stringify({ 
//         status: "duplicate", 
//         message: "You have already submitted a media registration with this email." 
//       })).setMimeType(ContentService.MimeType.JSON);
//     }

//     sheet.appendRow([
//       new Date(),
//       data.firstName || "",
//       data.otherNames || "",
//       data.email,
//       data.phoneNumber || "",
//       data.organisation || "",
//       data.designation || "",
//       data.sector || "",
//       data.additionalNotes || "",
//     ]);


//     sendConfirmationEmail(data.email, data.firstName, data.otherNames);

//     return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
//       .setMimeType(ContentService.MimeType.JSON);

//   } catch (error) {
//     return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
//       .setMimeType(ContentService.MimeType.JSON);
//   }
// }

// function isEmailAlreadyRegistered(sheet, email) {
//   if (!email) return false;
  
//   const data = sheet.getDataRange().getValues();
//   const emailColumnIndex = 3;

//   for (let i = 0; i < data.length; i++) {
//     if (data[i][emailColumnIndex] && 
//         data[i][emailColumnIndex].toString().trim().toLowerCase() === email.trim().toLowerCase()) {
//       return true;
//     }
//   }
//   return false;
// }

// function doOptions(e) {
//   return ContentService.createTextOutput("")
//     .setMimeType(ContentService.MimeType.TEXT)
//     .setHeaders({
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'POST, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type'
//     });
// }

// function sendConfirmationEmail(email, firstName, otherNames) {
//   const fullName = `${firstName || ''} ${otherNames || ''}`.trim() || "Participant";
//   const logoBlob = DriveApp.getFileById(LOGO_FILE_ID).getBlob();

//   const subject = "✅ Registration Confirmed - NATIONAL GOVTECH POLICY ROUNDTABLE 2026";

//   const htmlBody = `
//     <div style="font-family: Arial, sans-serif; line-height: 1.6;">
//       <h2>Thank you, ${fullName}!</h2>
//       <p>Your registration for the <strong>NATIONAL GOVTECH POLICY ROUNDTABLE 2026</strong> has been successfully received.</p>
//       <p><strong>Join the live stream: </strong></p>
//       <p>
//         <a href="https://www.youtube.com/live/5x9uvLg8KUk?si=U_FTd5YTcNTMXdE5" 
//            style="font-size: 18px; color: #006cbf; text-decoration: none;">
//           Watch Live on YouTube
//         </a>
//       </p>
      
//       <img src="cid:logo" alt="Govtech Africa" style="width: 300px; height: 300px; margin-bottom: 20px;" />

//       <p>— Govtech Africa Team</p>
//     </div>
//   `;

//   GmailApp.sendEmail(email, subject, "", {
//     name: "Govtech Africa",
//     from: "info@govtechafrica.com",
//     htmlBody: htmlBody,
//     inlineImages: { logo: logoBlob }
//   });
// }
