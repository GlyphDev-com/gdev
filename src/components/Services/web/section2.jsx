import style from "./section2.module.css";
import im1 from "../../../assets/Designer 1.jpeg"
import im2 from "../../../assets/Designer 2.jpeg"
import im3 from "../../../assets/webdev.jpeg"
import { ElongatedCardView } from "../../public/card";

export default function Section2(){
    return <section id={style.section2}>

    <ElongatedCardView
        height="600px"
        width="400px"
        Title="internsCam"
        Description="Bienvenue sur internsCam
Votre destination unique pour la recherche d'emploi et l'offre de recrutement. Que vous soyez à la recherche de votre prochaine opportunité de carrière ou que vous cherchiez à recruter les meilleurs talents, nternsCam simplifie le processus avec des outils avancés, des conseils d'experts et une vaste base de données d'annonces. Trouvez l'emploi qui vous correspond ou le candidat idéal en quelques clics."
        imageSource={im1}
        imageRadius="10px"
        imageHeight="200px" 
        imageShadowColor = "blue"
        
           />

<ElongatedCardView
        height="600px"
        width="400px"
        Title="GdevExams"
        Description="Votre compagnon d'étude en ligne! GdevExams aide les étudiants à se préparer avec des épreuves et corrections d'examens passés, à suivre leurs requêtes, consulter leurs notes, et revoir leurs copies d'examen. Facilitez votre parcours académique avec GdevExams, votre guide vers la réussite."
        imageSource={im2}
        imageShadowColor = "blue"
        imageRadius="10px"
        imageHeight="200px"    />

<ElongatedCardView
        height="600px"
        width="400px"
        Title="GdevMall"
        Description="votre centre commercial en ligne, regroupe une multitude de boutiques et de marques renommées.Besoin de quelque chose de précis ? Faites-en la demande ,notre vaste catalogue  de fournisseurs vous trouvererons le produit idéal."
        imageSource={im3}
        imageRadius="10px"
        imageShadowColor = "blue"
        imageHeight="200px"    />
     </section>
}