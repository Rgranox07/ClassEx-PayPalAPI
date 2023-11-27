//Question-A: Replace the comment with the code to import the 'express' module.

const bodyParser = require('body-parser');
const paypal = require('paypal-rest-sdk');

//Question-B: Fill in the code to import the 'path' module.

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/scripts', express.static(path.join(__dirname, 'public', 'scripts')));

paypal.configure({
  mode: 'sandbox', 

  //Question-C: Fill in the Client ID and Client Secret below

  client_id: 'Your_ClientID',
  client_secret: 'Your_ClientSecret',
});


app.get('/', (req, res) => {
    res.render('index');
  });
  
  app.post('/pay', (req, res) => {
    const amount = req.body.amount;
  
    const create_payment_json = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      redirect_urls: {
        return_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                //Question-D: Type the name of the product below
                name: 'Product Name Here',
                sku: '001',
                price: amount,
                currency: 'USD',
                quantity: 1,
              },
            ],
          },
          amount: {
            currency: 'USD',
            total: amount,
          },
          description: 'MEAN Stack Course Description',
        },
      ],
    };
  
    paypal.payment.create(create_payment_json, (error, payment) => {
      if (error) {
        console.error('Error creating payment:', error);

        //Question-E: Replace the comment with the code that would redirect to the route where users are notified about the cancellation
        
      } else {
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === 'approval_url') {
            res.redirect(payment.links[i].href);
          }
        }
      }
    });
  });
  
  app.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    
    //Question-F: Uncomment the constant below and write code to extract the 'paymentId' from the request's query parameters;

    //const paymentId;
  
    const execute_payment_json = {
      payer_id: payerId,
    };
  
    paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
      if (error) {
        console.error('Error executing payment:', error.response);
        res.redirect('/cancel');
      } else {
        console.log('Payment details:', JSON.stringify(payment));

        //Question-G: Fill in the code to redirect users to a designated route when a payment is successfully executed. 
      }
    });
  });
  
  app.get('/cancel', (req, res) => {
    console.log('Payment cancelled');
    res.render('cancel');
  });
  
  app.post('/pay/success', (req, res) => {
    
    console.log('Transaction details:', req.body);
  
    
    res.sendStatus(200);
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  