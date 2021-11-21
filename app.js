 console.log('test')

 const yargs = require('yargs')
 const student = require('./student')
 
 yargs.command({
     command:'add',
     describe:'Add Student',
     builder:{
         id:{
             describe:'This is a unique Id For student ',
             type:'number',
             demandOption:true
         },
         name:{
             describe:'This is student`s name  to be added',
             type:'string',
             demandOption:true
         },
         subject:{
             describe:'This is student`s subject to be added',
             type:'string',
             demandOption:true
         },
         grade:{
             describe:'This is student`s grade to be added',
             type:'number',
             demandOption:true
         },
         comment:{
             describe:'This is student`s subject to be added',
             type:'string',
             demandOption:false
         }
     },
     handler:(argv)=>
     {
         if(argv.comment)
         {
             student.addStudent(
                argv.id,
                argv.name,
                argv.subject,
                argv.grade,
                argv.comment
             )
         }
         else
         {
             student.addStudent(
                 argv.id,
                 argv.name,
                 argv.subject,
                 argv.grade
                )
 
         }
     }
 
 })
 
 yargs.command({
     command:'delete',
     describe:'Delete Student',
     builder:
     {
         id:
         {
             describe:'This is  student  Id  to be added',
             type:'number',
             demandOption:true
         }
     },
     handler:(argv)=>
     {
         
         student.removeStudent(argv.id)
     }
 })
 
 yargs.command(
     {
     command:'list',
     describe:'List Student',
     handler:()=>
     {
         student.listStudent()
     }
 })
 
 yargs.command({
     command:'read',
     describe:'Read Student with specific Id',
     builder:{
         id:{
             describe:'This is student`s Id of  to be added',
             type:'number',
             demandOption:true
         }
     },
     handler:(argv)=>
     {
         student.readStudent(argv.id)
     }
 })
 
 yargs.parse()
