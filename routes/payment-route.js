const express = require('express');
const app = express();
const router = express.Router();

const paymentController = require ('../controllers/payment');

  
    router.get('/payments', paymentController.listPayments);
  
    router.get('/payments/approved', paymentController.getApprovedPayments);
  
    router.get('/payments/:id', paymentController.getPayment);
  
    router.post('/payments', paymentController.createPayments);
  
    router.put('/payments/:id/approve', paymentController.approvePayment);
  
    router.put('/payments/:id', paymentController.updatePayment);
  
    router.delete('/payments/:id', paymentController.deletePayment);
  
    module.exports = router;
