export default function Form()
{
    return (
        <form onSubmit={handleSubmit} >
            <input placeholder="write something" />
            <button >
submit
            </button>
        </form>
    );
    
}


function handleSubmit(event){
    event.preventDefault();

    console.log("form was submitted");

}