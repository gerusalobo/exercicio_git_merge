use fiscalizacao

db.createCollection("inspecoes2") 

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

db.inspecoes2.countDocuments()

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

db.inspecoes2.insertMany(registro)

