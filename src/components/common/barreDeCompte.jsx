import style from "./barreDeCompte.module.css"
import Cellule from "./barre/cellule";

export default function Barre(){
    return(
        <section className={style.barre}>
            <Cellule 
                number="200+"
                description="Trainer"
            />

             <Cellule 
                number="150+"
                description="Course Lessons"
            />

             <Cellule 
                number="100+"
                description="Web Projects"
            />
        </section>
    );
}