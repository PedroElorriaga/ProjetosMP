const fetchDados = async () => {
    const apiTasks = await fetch('http://localhost:3000/tarefas/get-tasks');
    const tasksJson = await apiTasks.json();
    
    return tasksJson;
}

const dadosTasks = fetchDados();

console.log(dadosTasks);
