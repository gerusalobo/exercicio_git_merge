//selecionar o banco
use fiscalizacao

//criar a tabela
db.createCollection("inspecoes2") 

//criar um registro
db.inspecoes2.insertOne({
   'nome_posto':'Posto ABC',
   'cnpj':'12345',
   'preco_comustiveis': {
       'gasolina': '5.00',
       'gasolina_aditivada': '6.00',
       'diesel': '3.00',
       'alcool': '4.50',
       'gnv': '2.00'
   },
   'comentario': 'blablabla',
   'foto': 'xyz.png'
})

//registro
var registro = [
{
   'nome_posto':'Posto CDE',
   'cnpj':'12346',
   'preco_comustiveis': {
       'gasolina': '5.00',
       'gasolina_aditivada': '6.50',
       'diesel': '3.00',
       'alcool': '4.00',
       'gnv': '2.50'
   },
   'comentario': 'blablabla',
   'foto': 'xyz.png'
},
{
   'nome_posto':'Posto XYZ',
   'cnpj':'12347',
   'preco_comustiveis': {
       'gasolina': '5.50',
       'gasolina_aditivada': '6.50',
       'diesel': '3.00',
       'alcool': '4.50',
       'gnv': '2.50'
   },
   'comentario': 'blablabla',
   'foto': 'xyz.png'
},
{
   'nome_posto':'Posto XX',
   'cnpj':'123',
   'preco_comustiveis': {
       'gasolina': '5.00',
       'gasolina_aditivada': '5.00',
       'diesel': '3.00',
       'alcool': '4.00',
       'gnv': '2.50'
   },
   'comentario': 'blablabla',
   'foto': 'xyz.png'
}
]

//inserir registro
db.inspecoes2.insertMany(registro)

// update
db.inspecoes2.updateOne(
{  'nome_posto':'Posto ABC'},    
{$set:{'preco_comustiveis.gasolina':'6.00'}})

//delete
db.inspecoes2.deleteOne({'nome_posto':'Posto XX'})

//select count(*)
db.inspecoes2.countDocuments()

//selects

db.getCollection('inspecoes2').find({})

db.inspecoes2.find({})

db.inspecoes2.find({'cnpj':'12345'})

db.inspecoes2.find({
    $and: [
        {'preco_comustiveis.gasolina_aditivada':'6.50'},
        {'preco_comustiveis.alcool':'4.00'}
        ]
    })

// $gt >=  $lt <=

db.inspecoes2.find({
    $and:[
        {'preco_comustiveis.gasolina_aditivada':{$gt: '6.2'}},
        {'preco_comustiveis.gasolina_aditivada':{$lt: '7.0'}}
        ]
    })



