const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=urYE3ZBD#F4z50cKZ0uMyzwsSJa43f6pf5dfyRjoOdkbsEujGF3w",
MONGODB: process.env.MONGODB || "mongodb+srv://bosethwanapura:<db_password>@cluster0.3iulz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",//enter mongo db url
};
