import { useEffect, useState } from 'react';
import { ConfettiFx } from '../../fx/confetti-fx/confetti-fx';
import { Task03 as Task } from '../../tasks/03/task-03';
import { Pupil } from '../pupil/pupil';
import styles from './lesson-03.module.scss';


export const Lesson03 = () => {
    const [lessonSolved, setLessonSolved] = useState(false);

    useEffect(() => {
        setLessonSolved(isSolved());
    }, []);

    return (
        <div className={styles.root}>
            <Task />
            <div className={styles.playground}>
                <div id="top" className={`${styles.eye} ${styles.top}`}>
                    <Pupil />
                </div>
                <div id="bottom" className={`${styles.eye} ${styles.bottom}`}>
                    <Pupil color={'hotRed'} /></div>
                <ConfettiFx
                    maxParticles={400}
                    dissolve={315}
                    show={lessonSolved}
                    style={{ display: lessonSolved ? 'block' : 'none' }}
                />
            </div>
        </div>
    );
};

function isSolved(): boolean {
    return isPupil('top') && isPupil('bottom');
}

function isPupil(id: string): boolean {
    const elem = document.getElementById(id);
    return elem?.firstElementChild !== null
        ? !!elem?.firstElementChild.getAttribute('data-pupil')
        : false;
}
