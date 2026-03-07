function practice(){
    const username:string="rahul";
    const age:number=25;
    const isAdmin:boolean=false;

    console.log(username,age,isAdmin);



    // Problem2
    function add(a:number,b:number):number{
        return a+b;
    }

    console.log(add(3,5));

    // Problem 3

    function greet(name:string):string{
        return `Hello ${name}`;
    }

    console.log(greet("Prajwal"));

    // Problem 4
    const arr:number[]=[1,2,3,4,5];

    function sumOfArr(arr:number[]):number{
            return arr.reduce((acc,num)=>acc+num,0)
    }

    console.log(sumOfArr(arr));

    // Problem 5

    type User ={
        id:number,
        name:string,
        email:string,
        role?:userRole
    }

    const user1:User={
        id:1,
        name:"Prajwal",
        email:"prajwal@gmail.com"
    }

    console.log(user1);

    // Problem 6
    function printName(obj:User):void{
        console.log(obj.name);
    }
    printName(user1);


    // Problem 7
    type status="success"|"pending"|"loading";

    let orderStatus:status="success";

    console.log(orderStatus);

    // Problem 8
    function returnType(arg:number|string):void{
        if(typeof(arg)==="number"){
            console.log("Its a number");
        }else{
            console.log("Its a string")
        }
    }

    returnType(3);
    returnType("ard");

    // Problem 9
    const userArr:User[]=[
        {id:1,name:"Prajwal",email:"prajwal@gmail.com"}
    ]

    console.log(userArr);


    // Problem 10
    function  findUser(id:number):User|null{
        for(let i=0; i<userArr.length; i++){
            if(id===userArr[i].id){
                return userArr[i];
            }
        }

        return null;
    }

    console.log(findUser(1),findUser(2));


    // Problem 11
    type Post={
        id:number,
        title:string,
        content:string,
        authorId:number,
        published?:boolean
    }

    const post1:Post={
        id:1,
        title:"Advantages of technology",
        content:"Lorembdsfvyivayusvdcs",
        authorId:3
    }
     const post2:Post={
        id:2,
        title:"Advantages of DFaddfbh",
        content:"Lorembdsfvyivayusvdcs",
        authorId:2
    }
     const post3:Post={
        id:3,
        title:"Advantages of sdsfjasddsfy",
        content:"Lorembdsfvyivayusvdcs",
        authorId:2,
        published:true
    }

    const posts:Post[]=[];

    posts.push(post1);
    posts.push(post2);
    posts.push(post3);

     // Problem 12
    function getPostsByAuthor(authorId:number):Post[]{
        return posts.filter((post)=>post.authorId===authorId)
    }

    console.log(getPostsByAuthor(2));

   
    // Problem 14
    type ApiResponse={
        success:boolean,
        data:Post[]
    }

    enum userRole{
        ADMIN="ADMIN",
        USER="USER",
        GUEST="GUEST"
    }

    const user2={
        id:2,
        name:"raj",
        email:"raj@gmail.com",
        role:userRole.ADMIN
    }

    console.log(user2);


    // Problem 17
    function checkAdmin(user:User):boolean{
        if(!user.role || user.role!=="ADMIN"){
            return false;
        }else{
            return true
        }
        
    }

    console.log(checkAdmin(user2));

    // Problem 18
    function wrapInArray<T>(value:T):T[]{
        return [value];
    }

    console.log(wrapInArray(2));
    console.log(wrapInArray(false));
    console.log(wrapInArray("43"));


    // Problem 19 
    type ApiResponse1<T>={
        success:boolean,
        data:T
    }

    const userRes:ApiResponse1<User>={
        success:true,
        data:{
            id:4,
            name:"deep",
            email:"deep@hule.com"
        }
    }

    const postRes:ApiResponse1<Post>={
        success:true,
        data:{
            id:8,
            title:"Prajwal",
            content:"sdsjcbvfyiawidescug",
            authorId:89,
            published:false
        }
    }

    console.log(userRes,postRes);


    // Problem 20
    function getFirstElement<T>(arr:T[]):T{
        return arr[0];
    }

    console.log(getFirstElement([1,2,3,4]));
    console.log(getFirstElement(["t",2,3,4]));
    console.log(getFirstElement([true,2,3,4]));

}

module.exports={practice,};


