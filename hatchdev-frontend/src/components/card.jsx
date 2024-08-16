export const Card = () =>{
    const products = [
        { 
          title: 'Cabbage', 
          id: 1 , 
          price :"$30", 
          discount:"-10%",
          img: "vite.svg"
        },
        { 
          title: 'Carrot', 
          id: 2 , 
          price :"$3", 
          discount:"-10%",
          img: "vite.svg"
        },
        { 
          title: 'Ferrari', 
          id: 3 , 
          price :"$30000", 
          discount:"-20%",
          img: "vite.svg"
        },
        { 
          title: 'Iphone 12', 
          id: 4 , 
          price :"$300", 
          discount:"-15%",
          img: "vite.svg"
        },
    ];

    return (
        <div>
            {products.map((item) => (
                <div key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <p>{item.price}</p>
                    <p>{item.discount}</p>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
}