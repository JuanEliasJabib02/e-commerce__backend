const path = require("path");
const dotenv = require("dotenv");
dotenv.config( {path:"./config.env"})


const swaggerSettings = {
  definition : {
      openapi: "3.0.0",
      info:{
          title:"E-commerce RestAPI Documentation By: juaneliasjabib02@gmail.com ",
          version:"1.0.0"
      },
      servers:[
        {
         url:"https://e-commerce-808.herokuapp.com"
        }
      ],
      components: {
        securitySchemes:{
          bearerAuth:{
            type: "http",
            scheme: "bearer",
          }
        }
      }

  },
  apis:[
      `${path.join(__dirname, "../routes/*.js")}`,
  ]
}



module.exports = {swaggerSettings}