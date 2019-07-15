const Payment = require ('../models/payments');

module.exports.createPayments = (req, res)=> {
  var payment = new Payment( 
      req.body
    );
  
    payment.save(function(err, resp) {
    if (err) {
      console.log(err);
      res.send({
      message: 'something went wrong'
      });
    } else {
      res.send({
      message: 'the Payment has been saved'
      });
    }
  
    });
  }

module.exports.listPayments=(req, res)=> {
        Payment.find({})
          .then(Payments => res.json(Payments))
          .catch(err => res.send(err));
      }
    
module.exports.getPayment=(req, res)=> {
        Payment.findById(req.params.id)
          .then(Payment => res.json(Payment))
          .catch(err => res.send(err));
      }
module.exports.getApprovedPayments=(req, res)=> {
        Payment.find({ status: 'approved' })
          .then(approvedApps => res.json(approvedApps))
          .catch(err => res.send(err));
      }
    
module.exports.updatePayment=(req, res)=> {
        const { id } = req.params;
        Payment.findByIdAndUpdate(id, req.body, { new: true })
          .then(updatedRecord => res.json(updatedRecord))
          .catch(err => res.send(err))
      }
    
module.exports.approvePayment=(req, res)=> {
        const { id } = req.params;
        Payment.findByIdAndUpdate(id, { status: 'approved' }, { new: true })
          .then(response => res.json(response))
          .catch(err => res.send(err))
      }
    
module.exports.deletePayment=(req, res)=> {
        const { id } = req.params;
        Payment.deleteOne({ id })
          .then(response => res.json(response))
          .catch(err => res.send(err));
      }

    