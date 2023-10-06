const tbody = document.querySelector('tbody');

const apiTasks = async () => {
    const resposta = await fetch('http://localhost:3000/tarefas/get-tasks');
    const tasks = await resposta.json()
    return await tasks;
}

const testeTask = async () => {
    const tarefas = await apiTasks();

    // for (let i = 0;i < tarefas.length;i++) {
    //     console.log(tarefas[i]);
    // }

    return tarefas;
}

const criarLinha = async (tasks) => {
    const tasksPromise = await tasks;

    for (let i = 0;i < tasksPromise.length; i++) {
        console.log(tasksPromise)
        const { titulo, prioridade, created_at } = tasksPromise[i];
    
        const tr = criarElemento('tr');
        const tdTitulo = criarElemento('td', titulo);
        const tdData = criarElemento('td', created_at.split('T')[0]);
    
        tr.appendChild(tdTitulo); // Adiciona um filho dentro do elemento tr
        tr.appendChild(tdData); 
        tbody.appendChild(tr); // Adiciona um filho dentro do elemento tbody
    }
}

const criarElemento = (tag, texto = '') => {
    const elemento = document.createElement(tag);
    elemento.innerText = texto;

    return elemento;
}

criarLinha(testeTask());