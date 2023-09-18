import { Trash } from 'phosphor-react'
import styles from './Task.module.css'
import { ButtonHTMLAttributes, ChangeEvent, InputHTMLAttributes, MouseEvent, useState } from 'react'


interface TaskProps {
    content: string;
    onDeleteTask: (task:string) => void;
    onHandleDoneTask: (content: string) => void;
    onCheckDoneTask: (task: string) => void
}
export function Task({content, onDeleteTask, onHandleDoneTask, onCheckDoneTask}: TaskProps) {
    const [doneTask, setDoneTask] = useState(false)

 
    function handleDeleteTask(event: any) {
        onDeleteTask(content)
        onCheckDoneTask(event.currentTarget.value)
    }

    function handleDoneTask(event: any) {
        setDoneTask(true);
        const doneTaskContent: string = event.target.value
        onHandleDoneTask(doneTaskContent);
    }
    return (
        <div className={`${styles.taskWrapper} ${doneTask ? styles.doneTask : ''}`}>
            <label className={styles.radioButton}>
                <input type="radio" onClick={handleDoneTask} value={content} />
                <span className={styles.radio}></span>
            </label>
            <span className={styles.taskContent}>
                {content}
            </span>
            <button onClick={handleDeleteTask} value={content}>
                <Trash size={15}/>
            </button>
        </div>
    )
}