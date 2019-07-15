const Transaction = require ('../models/transactions');

module.exports.createTransaction = (req, res)=> {
  var transaction = new Transaction(
    //need to add an email here 
      req.body
     
    );
  
  
    transaction.save(function(err, resp) {
    if (err) {
      console.log(err);
      res.send({
      message: 'something went wrong'
      });
    } else {
      res.send({
      status: true,
      message: 'the transaction has been saved'
      });
    }
  
    });
  }

module.exports.listTransactions=(req, res)=> {
        Transaction.find({})
          .then(Transactions => res.json(Transactions))
          .catch(err => res.send(err));
      }
    
    module.exports.getTransaction=(req, res)=> {
        Transaction.findById(req.params.id)
          .then(Transaction => res.json(Transaction))
          .catch(err => res.send(err));
      }

    module.exports.getLatestTransaction = (req, res) => {
        Transaction.findOne().sort({created_at: -1})
             .exec((err, transaction) => {
               if (err)
               res.send(err);
               res.status(201).json(transaction);
          })
      }
    
    module.exports.getApprovedTransactions=(req, res)=> {
        Transaction.find({ user_id: req.body.user_id })
          .then(approvedApps => res.json(approvedApps))
          .catch(err => res.send(err));
      }
    
    module.exports.updateTransaction=(req, res)=> {
        const { id } = req.params;
        Transaction.findByIdAndUpdate(id, req.body, { new: true })
          .then(updatedRecord => res.json(updatedRecord))
          .catch(err => res.send(err))
      }
    
    module.exports.approveTransaction=(req, res)=> {
        const { id } = req.params;
        Transaction.findByIdAndUpdate(id, { status: 'approved' }, { new: true })
          .then(response => res.json(response))
          .catch(err => res.send(err))
      }
    
    module.exports.deleteTransaction=(req, res)=> {
      
        const id  = req.params.id;
        console.log(id);
        Transaction.deleteOne({'id': id })
          .then(response =>{
            console.log('mm',id);
            if (response){
              res.status(200)
                .json({
                  status:true,message:"success"
                })
            }
            else{
              res.status(201)
                .json({
                  status:false,message:"failed"
                })
            }
          })
          
      }

      module.exports.checkidexist = (req, res) => {
       Transaction.findOne({ "user_id": req.params.user_id })
       .then(Transaction => res.json(Transaction))
       .catch(err => res.send(err));
   }