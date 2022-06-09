const express = require("express");
const app = express();
const mysql = require("mysql")
const bodyParser = require("body-parser")
const paypal = require("paypal-rest-sdk");
const engines = require("consolidate")
const db = mysql.createPool({
    host: 'localhost',
    user: "root",
    password: '',
    database: 'lib',
})
app.use(bodyParser.json({type:'application/json'}))
app.engine("ejs", engines.ejs)
app.set("views","./views")
app.set("view engine","ejs")

paypal.configure({
    mode: "sandbox", //sandbox or live
    client_id:
        "Abc7gl4hWKkt1GDlCq7Sy12GlqV3NXg6IuE-50qdqUgn5A42eXT0XIyaFtuoy0N3kWl0Mv1Sygma_y0d",
    client_secret:
        "EJEzFcpep5wkBnXlWDeFPv95v0RJro84hX35IU0J7LQI1HUySmyLpnGx1xAw3_WmCfS9a6_JctN9aqdw"
});
app.get("/paypal/:amt", (req, res) => {
    amt = req.params.amt 
    
    
    var create_payment_json = {
        intent: "sale",
        payer: {
            payment_method: "paypal"
        },
        redirect_urls: {
            return_url: "http://192.168.0.101:3001/success",
            cancel_url: "http://192.168.0.101:3001/cancel"
        },
        transactions: [
            {
                item_list: {
                    items: [
                        {
                            name: "item",
                            sku: "item",
                            price: amt,
                            currency: "USD",
                            quantity: 1
                        }
                    ]
                },
                amount: {
                    currency: "USD",
                    total: amt
                },
                description: "This is the payment description."
            }
        ]
    };

    paypal.payment.create(create_payment_json, function(error, payment) {
        if (error) {
            throw error;
        } else {
            res.redirect(payment.links[1].href);
        }
    });
});

app.get("/success", (req, res) => {
    // res.send("Success");
    var PayerID = req.query.PayerID;
    var paymentId = req.query.paymentId;
    var execute_payment_json = {
        payer_id: PayerID,
        transactions: [
            {
                amount: {
                    currency: "USD",
                    total:amt
                }
            }
        ]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function(
        error,
        payment
    ) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            res.render("success");
        }

    });
});

app.get("/cancel", (req, res) => {
    res.render("cancel");
});
app.get("/", (req, res) => {
    res.render("index")
});
app.use(bodyParser.urlencoded({extended:true}))
app.get("/data", (req, res) => {
    var sql = 'select * from book'
    db.query(sql, (err,result) => {
        if(err) throw err
        res.send(result)
    }) 
})
    

app.listen(3001,'192.168.0.101', () => {
    console.log("run on port 3001")
})