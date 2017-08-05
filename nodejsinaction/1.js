const ejs=require('ejs');
var items = ['arsenal'];
ejs.renderFile('./view.ejs', {items:items}, function (err, data){
  console.log(data);
});
