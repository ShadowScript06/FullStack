class Pubsub{
    constructor(){
        if(Pubsub.instance){
            return Pubsub.instance
        }

        this. subscribers ={};

        Pubsub.instance=this;
    }

    subscribe(topic,callback){
        if(!this.subscribers[topic]){
            this.subscribers[topic]=[];
        }

        this.subscribers[topic].push(callback);
    }


    publish (topic,data){
        const subs=this.subscribers[topic] || [];

        subs.forEach(cb=> cb(data));
    }
}

const pubsub=new Pubsub();

module.exports=pubsub;