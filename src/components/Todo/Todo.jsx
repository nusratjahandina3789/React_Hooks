import './todo.css'
export default function Todo(props) {
    const { userId, id, title, completed } = props.details
    return (
        <div className="todo">
            <h1>UserId: {userId}</h1>
            <h1>Id: {id}</h1>
            <h1>Title: {title}</h1>
            <h1>Completed: {completed}</h1>
        </div>
    )
}