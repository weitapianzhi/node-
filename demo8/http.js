const mongoose = require('mongoose');

//连接mongodb数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

//在表中创建一个Cat   类型为String
const Cat = mongoose.model('Cat', { name: String });

//实例化一个Cat
const kitty = new Cat({ name: 'Zildjian' });
//持久化保存kitty实例
kitty.save().then(() => console.log('meow')).catch((e)=>console.log(e));