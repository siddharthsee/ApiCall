const { Sequelize } = require('sequelize');
//const { toDefaultValue } = require('sequelize/types/utils');

const sequelize = new Sequelize('sequelize-video', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    define:{ freezeTableName:true

    }
  });

// async function my(){
//     await sequelize.authenticate()
//     console.log("connected")

// }
// my();
// console.log("another connection")
//************************************************************************************* */

const User=sequelize.define('user',{
    user_iddd:{
      type:Sequelize.DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true

    },
    username:{
        type:Sequelize.DataTypes.STRING,
        //defaultValue: 'John Doe',

    },
   
    password:{
        type:Sequelize.DataTypes.STRING

    },
    age:{
        type:Sequelize.DataTypes.INTEGER,
        //defaultValue:93
        
    },
    sid_rocks:{
      type:Sequelize.DataTypes.STRING,
      //defaultValue:'yes,he rocks!'

    }
    
    
   },

  {
    freezeTableName:true,
    timestamps:false

  });

//************************************************************************** */

User.sync({alter:true}).then((data)=>{
  console.log("->inserted")

}).catch((err)=>{
   console.log("error")
});
  //*************************M A I N ************************************************ */
// User.sync({alter:true}).then(()=>{
//   const user=User.build({username:'Siddharth',password:'123',age:23,sid_rocks:'Yes'})
//   user.password='4545451111';
//   //user.user_iddd=9090;
//   return user.save();

// }).then((data)=>{
//   console.log(data)
//   console.log("user added to Db..")
//   data.username='pizza'
//   return data.save();
// }).then((data)=>{
//     data.decrement({age:2})
//   // console.log('username changed');
// }).catch((err)=>{
//   console.log(err)
// });
//*************************************2nd  MAIN*************************************************** */

User.sync({alter:true}).then(()=>{
  return User.bulkCreate([{
    username:'Mohan',
    age:35,sid_rocks:'Nah'

  },
  {
    username:'Samuel',
    age:45,
    sid_rocks:'Yes'
  },
  {
    username: 'Max',
    age:80,
    sid_rocks:'Nil'
  }



]);
}).then((data)=>{
    data.forEach((no)=>{
      console.log(no.toJSON());
    });

}).catch((err)=>{
  console.log(err)
});

 //**********************2nd  M  A  I  N************************************************* */ 
  
User.sync({alter:true}).then(()=>{
    return User.findAll({attributes:[['username','myname']]})
}).then((data)=>{
    data.forEach((no)=>{
       console.log(no.toJSON());
    })
}).catch((err)=>{
    console.log(err);
})




async function myFunction(){
    await User.sync({alter:true})
    console.log("Inserted!!!!!!!!!!!!!!!")
}
myFunction();

console.log(sequelize.models.user)

