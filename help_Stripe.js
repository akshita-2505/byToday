/*
For Database

const express=require('express');
const app=express();
const db=require('./config/database');

const usersRoute = require('./routes/users.routes');
const newsRoute = require('./routes/news.routes');
const attendanceRoute = require('./routes/attendance.route');
const notesRoute = require('./routes/notes.route');
const complaintsRoute = require('./routes/complaint.route');

const bodyparser = require('body-parser');
const path=require('path');

const stripe = require('stripe')('sk_test_u9n53cXsWAB4a2cv0AeKZQqV00kmbih2yO');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/users',usersRoute);
app.use('/news',newsRoute);
app.use('/notes', notesRoute)
app.use('/attendance',attendanceRoute);
app.use('/complaint',complaintsRoute);

    app.get('/test',function(req,res){
    res.json("dfsdf111111")
});

// app.set('port',process.env.PORT || 3300);
app.set('host', process.env.HOST || '157.119.207.186');

app.use(express.static(path.join(__dirname,'profilepic')));

app.post('/doPayment', (req, res) => {
    debugger
    // make payment
    return stripe.charges.create({
            amount: req.body.amount, // Unit: cents
            currency: 'USD',
            source: req.body.tokenId,
            description: 'Test payment',
        })
        .then(result => res.status(200).json(result));

// // create new customers
//     return stripe.customers.create({
//         email: 'akshita@gmail.com',
//         source: req.body.tokenId
//     })
//         .then(customer => {
//             stripe.charges.create({
//                 amount: req.body.amount, // Unit: cents
//                 currency: 'eur',
//                 customer: 'cus_EwZd2zSPm7PSoS',
//                 source: customer.default_source.id,
//                 description: 'Test payment',
//             })
//         })
//         .then(result => res.status(200).json(result))

    // let databaseUser = null
    // return getDbUser(req.accessToken) // Some method to get a user from the database
    //     .then(dbUser => {
    //         databaseUser = dbUser
    //         return stripe.customers
    //             .createSource(databaseUser.stripeCustomerId, { source: req.body.tokenId })
    //     }) // This Stripe service returns a source object
    //     .then(newSource => {
    //         return stripe.customers
    //             .update(databaseUser.stripeCustomerId, { default_source: newSource.id })
    //     }) // This Stripe service returns a customer object
    //     .then(stripeCustomer => {
    //         return stripe.charges.create({
    //             amount: req.body.amount, // Unit: cents
    //             currency: 'eur',
    //             customer: stripeCustomer.id,
    //             source: stripeCustomer.default_source.id,
    //             description: 'Test payment',
    //         })
    //     })
    //     .then(result => res.status(200).json(result))

});


app.listen(3000, (err)=> {
    if(err){
        console.log(err);
    }
    console.log("server connected");
});



 */