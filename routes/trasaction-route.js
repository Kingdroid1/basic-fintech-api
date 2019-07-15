const express = require('express');
const app = express();
const router = express.Router();

const transactionController = require ('../controllers/transaction');


  
    router.get('/transactions', transactionController.listTransactions);

    router.get('/latesttransact', transactionController.getLatestTransaction);
  
    router.get('/approved/userid', transactionController.getApprovedTransactions);
  
    router.get('/transactions/:id', transactionController.getTransaction);

    router.get('/transact/:userid', transactionController.checkidexist);
  
    router.post('/transactions', transactionController.createTransaction);
  
    router.put('/transactions/:id/approve', transactionController.approveTransaction);
  
    router.put('/transactions/:id', transactionController.updateTransaction);
  
    router.delete('/transactions/:id', transactionController.deleteTransaction);

  
    router.get('/health', (req, res) => {
      res.send('OK');
    });
    module.exports = router;
  