
import './Product.css'
import Price from './Price';
function Product({title,idx}){ 
    // console.log(options);
    let oldprice=["12,495","11.90","599","1,566"];
    let newprice=["8,999","9,199","899","256"];
    let Description=[["8,000 DPI","5 Programable Buttons"],["Intutive surface","Designed for  iPad pro"],["Wireless","Intutive surface"],["Designed for  iPad pro","DPI 800"]];
    
   
        return (
            <div className="Product" >
                <h3>{title}</h3>
                <p>{Description[idx][0]}</p>
                <p>{Description[idx][1]}</p>
                <Price  oldPrice={oldprice[idx]} newPrice={newprice[idx] } ></Price>


       
        </div>
        )

}
export default Product;