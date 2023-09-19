import { useState } from 'react';
import { Task } from './Task'
import styles from './TaskList.module.css'
import { ClipboardText } from 'phosphor-react';

interface TaskListProps {
    tasks: string[];
    onDeleteTask: (task: string) => void;
}
export function TaskList({tasks, onDeleteTask}:TaskListProps) {
    const [doneTasks, setDoneTasks] = useState<string[]>([])
    function checkDoneTask(doneTaskToDelete: string) {
        const doneTasksWithoutDeletedOnde = doneTasks.filter(task =>{
            return task != doneTaskToDelete
        })

        setDoneTasks(doneTasksWithoutDeletedOnde);
    }

    function handleDoneTask(doneTaskContent: string) {
        setDoneTasks([...doneTasks, doneTaskContent])
    }
    return(
        <div className={styles.taskList}>
            <header className={styles.headerTaskList}>
                <div className={styles.createdTasks}>
                    <h2>Tarefas criadas</h2>
                    <span>{tasks.length}</span>
                </div>
                <div className={styles.completedTasks}>
                    <h2>Concluídas</h2>
                    <span>
                        {tasks.length ? `${doneTasks.length} de ${tasks.length}` : tasks.length }
                    </span>
                </div>
            </header>
            <section className={tasks.length ? styles.disabled : styles.emptyTasks }>
                <ClipboardText size={56} />
                <b>Você ainda não tem tarefas cadastradas!</b>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </section>
            <main className={styles.taskListed}>
                {tasks.map( task => {
                    return (<Task
                                content={task}
                                onDeleteTask={onDeleteTask}
                                onHandleDoneTask={handleDoneTask}
                                onCheckDoneTask={checkDoneTask}
                                key={task}
                            /> )
                })}
                
            </main>
        </div>
        )   
}