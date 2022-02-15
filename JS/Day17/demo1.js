
//Array of Object
let arrobj=[
  {
    fname:"Sumit",
    id:9,
    lname:'Raokhande',
    country:{
      cid:1,
      cname:'India'
    },
    month:["Jan",'Feb','March']
  },
  {
    fname:"Spruha",
    id:3,
    lname:'Raokhande',
    country:{
      cid:2,
      cname:'US'
    },
    month:["April",'Feb','may']
  },
  {
    fname:"Kiran",
    id:6,
    lname:'Raokhande',
    country:{
      cid:3,
      cname:'Japan'
    },
    month:["Aug",'Nov','Dec']
  }
];

for (let i = 0; i < arrobj.length; i++) {
  
  console.log(`
  First name :: ${arrobj[i].fname}
  Last name  :: ${arrobj[i].lname}
  Id         :: ${arrobj[i].id}
  Country Name:: ${arrobj[i].country.cname}
  Month       :: ${arrobj[i].month.join('  ')}
  `)

}