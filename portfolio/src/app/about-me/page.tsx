import { Bio } from "../components/bio/bio"
import styles from "./page.module.css"
export default function AboutMe(){
    return(
        <div className={styles.aboutMe}>
            <Bio/>
        </div>
    )
}