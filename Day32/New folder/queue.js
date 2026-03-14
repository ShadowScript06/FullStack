class Queue {
    constructor (){
        this.jobs=[];
    }

    add(job){
        this.jobs.push(job);
    }

    process(worker){
        setInterval (()=>{
            if(this.jobs.length >0){
                const job=this.jobs.shift();
                worker(job);
            }
        },1000);
    }
}


const queue=new Queue();

module .exports =queue;