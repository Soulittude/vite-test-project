
function ListGroup() {
    let items = ['New York', "San Francisco", "Tokyo", "London", "Paris"];
    //items = [];


    const getMessage = () => {
        return items.length === 0 ?
            <p>No item found</p>
            :
            <ul className="list-group">
                {items.map(item => <li key={item}>{item}</li>)}
            </ul>
    }

    return (
        <>
            <h1>List</h1>
            {getMessage()}

        </>
    );
}
export default ListGroup;
