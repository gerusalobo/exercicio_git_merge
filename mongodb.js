//selecionar o banco
use fiscalizacao

//criar a tabela
db.createCollection("inspecoes3") 

//criar um registro
db.inspecoes3.insertOne({
   nome_posto:'Posto ABC',
   cnpj:'12345',
   preco_combustiveis: {
       gasolina: 5.00,
       gasolina_aditivada: 6.00,
       diesel: 3.00,
       alcool: 4.50,
       gnv: 2.00
   },
   comentario: 'blablabla',
   foto: 'xyz.png'
})

//registro
var registro = [
{
   nome_posto:'Posto CDE',
   cnpj:'12346',
   preco_combustiveis: {
       gasolina: 5.00,
       gasolina_aditivada: 6.50,
       diesel: 3.00,
       alcool: 4.00,
       gnv: 2.50
   },
   comentario: 'blablabla',
   foto: 'xyz.png'
},
{
   nome_posto:'Posto XYZ',
   cnpj:'12347',
   preco_combustiveis: {
       gasolina: 5.50,
       gasolina_aditivada: 6.50,
       diesel: 3.00,
       alcool: 4.50,
       gnv: 2.50
   },
   comentario: 'blablabla',
   foto: 'xyz.png'
},
{
   nome_posto:'Posto XX',
   cnpj:'123',
   preco_combustiveis: {
       gasolina: 5.00,
       gasolina_aditivada: 5.00,
       diesel: 3.00,
       alcool: 4.00,
       gnv: 2.50
   },
   comentario: 'blablabla',
   foto: 'xyz.png'
}
]

//inserir registro
db.inspecoes3.insertMany(registro)

// update
db.inspecoes3.updateOne(
{  'nome_posto':'Posto ABC'},    
{$set:{'preco_combustiveis.gasolina':6.00}})

//delete
db.inspecoes3.deleteOne({'nome_posto':'Posto XX'})

//select count(*)
db.inspecoes3.countDocuments()

//selects

db.getCollection('inspecoes3').find({})

db.inspecoes3.find({})

db.inspecoes3.find({'cnpj':'12345'})

db.inspecoes3.find({
    $and: [
        {'preco_combustiveis.gasolina_aditivada':6.50},
        {'preco_combustiveis.alcool':4.00}
        ]
    })

// $gt >=  $lt <=

db.inspecoes3.find({
    $and:[
        {'preco_combustiveis.gasolina_aditivada':{$gt: 6.2}},
        {'preco_combustiveis.gasolina_aditivada':{$lt: 7.0}}
        ]
    })

//media
db.inspecoes3.aggregate([
    {
        $group:
        {
            _id: null,
            mediagasolina: { $avg: "$preco_combustiveis.gasolina"}
            mediagasolinaadit: { $avg: "$preco_combustiveis.gasolina_aditivada"}
            mediadiesel: { $avg: "$preco_combustiveis.diesel"}
            mediaalcool: { $avg: "$preco_combustiveis.alcool"}
            mediaggnv: { $avg: "$preco_combustiveis.gnv"}
        }
    }
])


//
//criar um novo campo double de um de texto
//
db.inspecoes2.aggregate([
    {
        $addFields: {
            "preco_comustiveis.gasolina_double": { $toDouble: "$preco_comustiveis.gasolina" }
        }
    },
    {
        $merge: {
            into: "inspecoes2",
            whenMatched: "merge",
            whenNotMatched: "insert"
        }
    }
])


