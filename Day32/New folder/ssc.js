const { json } = require("express");

class NotificationService{
    constructor(){
        if(NotificationService.instance){
            return NotificationService.instance;
        }

        this.clients=[];

        NotificationService.instance=this;
    }

     addClient(res){
            this.clients.push(res);
            
        }

        notifyAll(message){
            this.clients.forEach((client)=>{
                client.write(`data : ${JSON.stringify(message)}\n\n`);
            });
        }
}

const notificationSevrice =new NotificationService();

module .exports =notificationSevrice;