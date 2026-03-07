
const sessionService=require("../services/session.service");

async function createSession(request,response,next){
    try {
        const data={
            title:request.body.title,
            plannedDuration:request.body.plannedDuration
        }
        const session=await sessionService.
        createSession(request.userId,data);

        response.status(201).json({
            status:true,
            data:session
        })
    } catch (error) {
        next(error);
    }
}

async function startSession(request,response,next){
    try {
        const userId=request.userId;
        const sessionId=request.params.id;

        const session=await sessionService.startSession(userId,sessionId);

        response.status(200).json({
            success:true,
            data:session
        })

    } catch (error) {
        next(error);
    }
}

async function pauseSession(request,response,next){
    try {
        const userId=request.userId;
        const sessionId=request.params.id;

        const session=await sessionService.pauseSession(userId,sessionId);

        response.status(200).json({
            success:true,
            data:session
        })
    } catch (error) {
        next(error);
    }
}
async function resumeSession(request,response,next){
    try {
       const userId=request.userId;
        const sessionId=request.params.id;

        const session=await sessionService.resumeSession(userId,sessionId);

        response.status(200).json({
            success:true,
            data:session
        }) 
    } catch (error) {
        next(error);
    }
}
async function completeSession(request,response,next){
    try {
       const userId=request.userId;
        const sessionId=request.params.id;

        const session=await sessionService.completeSession(userId,sessionId);

        response.status(200).json({
            success:true,
            data:session
        }) 
    } catch (error) {
        next(error);
    }
}


async function getSessions(req,res,next){
    try{

        const sessions = await sessionService.getSessions(
            req.userId,
            req.query
        );

        res.status(200).json({
            success:true,
            sessions
        });

    }catch(err){
        next(err);
    }
}

async function getSessionById(req,res,next){
    try{

        const session = await sessionService.getSessionById(
            req.userId,
            req.params.id
        );

        res.status(200).json({
            success:true,
            data:session
        });

    }catch(err){
        next(err);
    }
}


async function getSessionStats(req,res,next){
    try{

        const stats = await sessionService.getSessionStats(
            req.userId
        );

        res.status(200).json({
            success:true,
            data:stats
        });

    }catch(err){
        next(err);
    }
}
module.exports={
    createSession,
    pauseSession,
    startSession,
    resumeSession,
    completeSession,
    getSessions,
    getSessionById,
    getSessionStats
}