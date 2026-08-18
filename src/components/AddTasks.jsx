function AddTasks(){
    return (
        <div className="space-y-4 bg-slate-200 p-6 rounded-md shadow flex flex-col">
            <input type="text" placeholder="Digite o título da tarefa"/>
            <input type="text" placeholder="Digite o descrição da tarefa"/>
            <button>Adicionar</button>
        </div>
    )
}

export default AddTasks