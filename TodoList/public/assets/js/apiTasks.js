const tbody = document.querySelector('tbody');

const apiTasks = async () => {
    const resposta = await fetch('http://localhost:3000/tarefas/get-tasks');
    const tasks = await resposta.json();
    return await tasks;
}

const buscarTasks = async () => {
    const tarefas = await apiTasks();

    // for (let i = 0;i < tarefas.length;i++) {
    //     console.log(tarefas[i]);
    // }

    return tarefas;
}

const atualizarTask = async (informacoesUpdate) => {
    const { _id, prioridade } = informacoesUpdate;
    await fetch(`http://localhost:3000/tarefas/update/${_id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prioridade }),
    });
}

const deletarTask = async (id) => {
    await fetch(`http://localhost:3000/tarefas/deletar/${id}`, { method: 'delete' });

    criarLinha(buscarTasks());
}

const criarLinha = async (tasks) => {
    const tasksPromise = await tasks;
    tbody.innerHTML = '';

    for (let i = 0; i < tasksPromise.length; i++) {
        const { _id, titulo, prioridade, created_at } = tasksPromise[i];

        const tr = criarElemento('tr');
        const tdTitulo = criarElemento('td', titulo);
        const tdData = criarElemento('td', created_at.split('T')[0]);

        const tdPrioridade = criarElemento('td', prioridade);
        tdPrioridade.addEventListener('change', ({ target }) => { atualizarTask({ _id, prioridade: target.value }) });

        const tdAcaoDelete = document.createElement('td');
        tdAcaoDelete.innerHTML = '<button class="btn-action delete"><i class="fa-solid fa-trash"></i></button>';

        tdAcaoDelete.addEventListener('click', () => { deletarTask(_id) });

        tr.appendChild(tdTitulo); // Adiciona um filho dentro do elemento tr
        tr.appendChild(tdData);
        tr.appendChild(tdPrioridade);
        tr.appendChild(tdAcaoDelete);
        tbody.appendChild(tr); // Adiciona um filho dentro do elemento tbody
    }
}

const criarElemento = (tag, texto = '') => {
    if (texto === 'Baixa' || texto === 'Média' || texto === 'Alta') {
        const elementoHtml = document.createElement(tag);
        switch (texto) {
            case 'Baixa':
                elementoHtml.innerHTML = `<select>
                    <option value="${texto}">${texto}</option>
                    <option value="Média">Média</option>
                    <option value="Alta">Alta</option>
                    </select>`;
                break;

            case 'Média':
                elementoHtml.innerHTML = `<select>
                    <option value="${texto}">${texto}</option>
                    <option value="Alta">Alta</option>
                    <option value="Baixa">Baixa</option>
                    </select>`;
                break;

            case 'Alta':
                elementoHtml.innerHTML = `<select>
                    <option value="${texto}">${texto}</option>
                    <option value="Baixa">Baixa</option>
                    <option value="Média">Média</option>
                    </select>`;
                break;
        }

        return elementoHtml;
    }

    const elemento = document.createElement(tag);
    elemento.innerText = texto;

    return elemento;
}

criarLinha(buscarTasks());