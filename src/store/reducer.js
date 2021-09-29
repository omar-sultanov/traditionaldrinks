const initialState={

    
        syrup:[
            {
                "id": 1,
                "name": "Cherry syrup",
                "overview": "Cherries - 400 g, sugar - 200 g, lemon juice - 4 tsp, water -400 ml",
                "imageURL": require("./Images/albalişərbəti.jpg").default 
            },
     
            {
                "id": 2,
                "name": "Rose-pomegranate syrup",
                "overview": "Sugar - 80 g, rose - 40 g, pomegranate juice - 400 ml, water - 500 ml, ice - 80 g.",
                "imageURL": require("./Images/gülnarpng.png").default 
            },
    
            {
                "id": 3,
                "name": "Saffron syrup",
                "overview": "Sugar - 120 g, saffron - 0, 6 q, basil or mint seeds - 0.4 g, water - 800 ml, ice - 80 g.",
                "imageURL": require("./Images/zeferan.jpg").default 
            },
            {   "id": 4,
                "name": "Apricot syrup",
                "overview": "Sugar - 60 g, dry apricot - 500 g, water - 800 g, ice - 100 g.",
                "imageURL": require("./Images/ərikşərbəti.jpg").default 
                
              },
              {
                "id": 5,  
                "name": "Lemon syrup",
                "imageURL": require("./Images/limon.jpg").default,
                "overview": "Sugar - 200 g, medium-sized lemon - 1 d d, saffron - 0.4 g, basil or coriander seeds - 0.4 g, water - 600 ml, ice - 200 g.",
                
              },
              {
                "id": 6,
                "name": "Quince syrup",
                "overview": "Sugar - 150 g, quince - 500 g, cinnamon - 1 g, saffron - 1 g, water- 1 liter.",
                "imageURL": require("./Images/heyva.jpg").default
              },
              {
                "id": 7,
                "name": "Basil syrup",
                "overview": "Sugar - 120 g, basil - 1 small bunch, water - 1 liter, citric acid- because of the taste",
                "imageURL": require("./Images/reyhan.jpg").default
              },
              {
                "id": 8,  
                "name": "Rose syrup",
                "overview": "Sugar - 120 g, basil or mint seeds - 8 g, roses oil - 0.25 g, water - 800 ml, ice - 200 g.",
                "imageURL": require("./Images/gulserbeti.jpg").default
                
              }
        ],
        tea:[
            {
                "id": 1,
                "name": "Black tea",
                "overview": "1-2 tsp tea leaves, 2-3 minutes, 95° C,In a glass, earthenware bowl",
                "imageURL": require("./Images/blacktea.jpg").default,
                "nameOf":"teas"
            },
     
            {
                "id": 2,
                "name": "Green tea",
                "overview": "1-2 tsp tea leaves, 3 minutes, 100° C,In a glass, earthenware bowl",
                "imageURL": require("./Images/greentea.jpg").default 
            },
    
            {
                "id": 3,
                "name": "Herbal tea",
                "overview": "1-2 tsp tea leaves, 1-2 minutes, 70° - 80° C,In a glass, earthenware bowl",
                "imageURL": require("./Images/bitkicayi.jpg").default 
            }
        ],

        nameOfCards:["Syrups","Teas"]
    }

const reducer=(state=initialState,action)=>{
        
    return state
}
export default reducer