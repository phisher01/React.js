export default function Button(){
    return (
        <div>
            <button  onDoubleClick={handleDblClick}>
                Click me!
            </button>
            <p onMouseOver={Bye}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa, sapiente a repudiandae voluptatem, consectetur itaque aspernatur praesentium deserunt doloribus voluptas id voluptate sint commodi excepturi. Quaerat consequatur quidem iure! </p>
        </div>
    );
}

function Bye(){
    console.log("   Bye!");
}

function handleDblClick(event){
console.log(event);
    console.log("   you are double clicked!");

}