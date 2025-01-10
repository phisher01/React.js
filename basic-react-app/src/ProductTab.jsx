import Product from './Product.jsx'
import './ProductTab.css'

function ProductTab(){
        let style={display:"flex",
            flexWrap:"wrap",
        alignItems:"start",
    justifyContent:"center",
};



    return (
<div className="ProductTab" style={style} >
   
<Product title="Logitictech Mx Master" idx={0}/>
<Product title="Apple Pencil (2nd Gen)"  idx={1}/>
<Product title="Zebronics Zeb -Transformer" idx={2}/>
<Product title="Petronix Toad 23"  idx={3} />

</div>

    );
}
export default ProductTab;