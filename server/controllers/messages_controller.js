let messages = [];
let id = 0;

module.exports = {
    create: (req, res)=>{
        const {text, time} =req.body;
        let message = {
            id: id,
            text: text,
            time: time
        };
        messages.push(message);
        id++;
        res.status(200).send(messages);
    },
    read: (req, res)=>{
        res.status(200).send(messages);
    },
    update: ( req, res ) => {
        const { text , time} = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex( message => message.id == updateID );
        let message = messages[ messageIndex ];
    
        messages[ messageIndex ] = {
          id: message.id,
          text: text || message.text,
          time: time || message.time
        };
    
        res.status(200).send( messages );
    },
    delete: (req, res)=>{
        const deleteID = req.params.id;    
        const messageIndex = messages.findIndex( message => message.id == deleteID );
        if(messageIndex!=-1){
        messages.splice(messageIndex, 1);
        res.status(200).send( messages );
        }else{
            res.status(400).send("ID Does not exist");
        }
    }
};