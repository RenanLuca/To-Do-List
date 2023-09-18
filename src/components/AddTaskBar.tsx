import { PlusCircle } from 'phosphor-react'
import styles from './AddTaskBar.module.css'
import { ChangeEvent} from 'react'

interface addTaskBarProps {
    onSetNewTaskText: (text: string) => void;
    newTaskText: string;
    onCreateNewTask: () => void;
}
export function AddTaskBar({onSetNewTaskText, newTaskText, onCreateNewTask}: addTaskBarProps) {
    
    function handleNewTextTaskChange(event: ChangeEvent<HTMLInputElement>) {
        onSetNewTaskText(event.target.value)
    }
    
    const isNewTaskEmpty = newTaskText.length === 0;
    return(
        <div className={styles.addTask}>
            <input
                className={styles.addTaskInput}
                type="text"
                placeholder='Adicione uma nova tarefa'
                value={newTaskText}
                onChange={handleNewTextTaskChange}
                required
            />
            <button
                className={styles.buttonAddTask}
                onClick={onCreateNewTask}
                disabled={isNewTaskEmpty}
            >
                <span>Criar</span>
                <PlusCircle size={18} />
            </button>
        </div>
        
    ) 
    
}