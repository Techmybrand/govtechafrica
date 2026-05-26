// const SHEET_NAME = "Sheet1";
// const DRIVE_FOLDER_ID = "1Sw8uDeB8HQ6KcmePzWwbHxUHT5VdMzYf";
// const LOGO_FILE_ID = "1mEBj3q7ONLskWZvDWm1Y9G6TrIt7fTme";

// function doPost(e) {
//   try {
//     const data = JSON.parse(e.postData.contents);
//     let fileUrl = "";

//     const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
//     if (isEmailAlreadyRegistered(sheet, data.email)) {
//       return ContentService.createTextOutput(JSON.stringify({ 
//         status: "duplicate", 
//         message: "You have already submitted a media registration with this email." 
//       })).setMimeType(ContentService.MimeType.JSON);
//     }

//     if (data.idCardBase64 && data.idCardName) {
//       const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
//       const decoded = Utilities.base64Decode(data.idCardBase64);
//       const blob = Utilities.newBlob(decoded, getMimeType(data.idCardName), data.idCardName);
//       const file = folder.createFile(blob);
//       fileUrl = file.getUrl();
//     }
    

//     sheet.appendRow([
//       new Date(),
//       data.firstName || "",
//       data.otherNames || "",
//       data.email,
//       data.phoneNumber || "",
//       data.organisation || "",
//       data.designation || "",
//       fileUrl,
//       "pending"
//     ]);
    

//     sendConfirmationEmail(data.email, data.firstName, data.otherNames);

//     return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
//       .setMimeType(ContentService.MimeType.JSON);

//   } catch (error) {
//     console.error(error);
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

// function sendConfirmationEmail(email, firstName, otherNames) {
//   const fullName = `${firstName || ''} ${otherNames || ''}`.trim() || "Media Professional";

//   const logoBlob = DriveApp.getFileById(LOGO_FILE_ID).getBlob();

//   const htmlBody = `
//     <div style="font-family: Arial, sans-serif; max-width: 600px; line-height: 1.6;">
//       <h2>Thank you, ${fullName}!</h2>
//       <p>Your media accreditation request for the <strong>National Govtech Policy Roundtable 2026</strong> has been received.</p>
//       <p>We will review your submission and get back to you shortly with accreditation status.</p>
//       <img src="cid:logo" alt="GovTech Africa" style="width: 300px; height: 300px; margin-bottom: 20px;" />

//       <p>Best regards,<br><strong>Govtech Africa Team</strong></p>
//     </div>
//   `;

//   GmailApp.sendEmail(email, "✅ Media Registration Received - Govtech Policy Roundtable", "", {
//     name: "Govtech Africa",
//     from: "info@govtechafrica.com",
//     htmlBody: htmlBody,
//     inlineImages: { logo: logoBlob }
//   });
// }

// function onEdit(e) {
//   const range = e.range;
//   const sheet = range.getSheet();
  
//   if (sheet.getName() !== SHEET_NAME) return;
  
//   const row = range.getRow();
//   const col = range.getColumn();
  
//   if (col !== 9) return;

//   const status = range.getValue().toString().trim().toLowerCase();
//   const email = sheet.getRange(row, 4).getValue();
//   const fullName = `${sheet.getRange(row, 2).getValue()} ${sheet.getRange(row, 3).getValue()}`.trim();

//   if (!email) return;

//   if (status === "approved") {
//     sendApprovalEmail(email, fullName);
//   } else if (status === "rejected") {
//     sendRejectionEmail(email, fullName);
//   }
// }

// function sendApprovalEmail(email, fullName) {
//   const logoBlob = DriveApp.getFileById(LOGO_FILE_ID).getBlob();

//   const htmlBody = `
//     <div style="font-family: Arial, sans-serif; max-width: 600px;">
//       <h2>Congratulations, ${fullName}!</h2>
//       <p>Your media accreditation for the <strong>National Govtech Policy Roundtable 2026</strong> has been <strong>APPROVED</strong>.</p>
//       <p>You are now officially accredited to cover the event.</p>
//       <p>We look forward to your coverage.</p>
//       <img src="cid:logo" alt="GovTech Africa" style="width: 300px; height: 300px; margin-bottom: 25px;" />
//       <p>Best regards,<br><strong>GovTech Africa Team</strong></p>
//     </div>
//   `;

//   GmailApp.sendEmail(email, "✅ Media Accreditation Approved - Govtech Policy Roundtable", "", {
//     name: "Govtech Africa",
//     from: "info@govtechafrica.com",
//     htmlBody: htmlBody,
//     inlineImages: { logo: logoBlob }
//   });
// }

// function sendRejectionEmail(email, fullName) {
//   const logoBlob = DriveApp.getFileById(LOGO_FILE_ID).getBlob();

//   const htmlBody = `
//     <div style="font-family: Arial, sans-serif; max-width: 600px;">
//       <h2>Update on Your Media Accreditation</h2>
//       <p>Dear ${fullName},</p>
//       <p>After careful review, we regret to inform you that your media accreditation request for the National Govtech Policy Roundtable 2026 has been <strong>NOT APPROVED</strong> at this time.</p>
//       <p>Thank you for your interest. We hope to collaborate with you on future opportunities.</p>
//       <img src="cid:logo" alt="GovTech Africa" style="width: 300px; height: 300px margin-bottom: 25px;" />
//       <p>Best regards,<br><strong>GovTech Africa Team</strong></p>
//     </div>
//   `;

//   GmailApp.sendEmail(email, "Media Accreditation Update - Govtech Policy Roundtable", "", {
//     name: "Govtech Africa",
//     from: "info@govtechafrica.com",
//     htmlBody: htmlBody,
//     inlineImages: { logo: logoBlob }
//   });
// }

// function getMimeType(filename) {
//   const ext = filename.split('.').pop().toLowerCase();
//   if (ext === 'pdf') return 'application/pdf';
//   if (ext === 'jpg' || ext === 'jpeg') return 'image/jpeg';
//   if (ext === 'png') return 'image/png';
//   return 'application/octet-stream';
// }