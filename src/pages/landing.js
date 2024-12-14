import Button from 'react-bootstrap/Button';
import image1 from './../assets/images/image1.jpg'
import image2 from './../assets/images/image2.jpg'
import image3 from './../assets/images/image3.jpg'
import { TbWorld } from "react-icons/tb";
import { MdArrowForwardIos } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Link } from "react-router-dom";






function Landing() {
    return (
        <>
            <div class="landing-page  " >
                <div class="section-1 position-relative" >
                    <div class="overlay" >
                        <div class="nav container d-flex justify-content-end" >
                            <Link to="/SignUp">
                                <Button class="mt-3" >
                                    Se conecter
                                </Button>
                            </Link>

                            <Link to="/login" >
                                <Button class="mt-3">
                                    S'inscrire
                                </Button>
                            </Link>

                        </div>
                        <div class="title">
                            NovaDrive
                        </div>
                    </div>
                </div>
                <div class="section-2 position-relative row w-100 container m-auto" >
                    <div class="d-flex align-items-center col-md-7 text-align-center w-100 " >
                        <div class="texts d-flex align-items-center justify-content-center flex-column w-100">
                            <h2 class="title mb-5">About NovaDrive :</h2>
                            <p class=" text-center" > NovaDrive symbolise notre engagement envers l'innovation constante. Inspirés par l'éclat d'une nova, nous cherchons à créer des pièces de voitures qui brillent par leur performance, leur efficacité énergétique et leur design avant-gardiste. Nous croyons en un avenir où la conduite ne se limite pas simplement à se rendre d'un point A à un point B, mais où chaque trajet est une expérience unique.</p>
                            <Button>Découvrer plus <MdArrowForwardIos /> </Button>
                        </div>
                        <div class="image col-md-5 ">
                            <img src={image1} class="w-100" />
                        </div>
                    </div>
                </div>
                <div class="section-3 m-5" >
                    <h2 class="text-center" >nouveautés</h2>
                    <h3 class="text-center" >L'innovation, notre passion</h3>
                </div>
                <div class="section-4 container mb-5" >
                    <div class="d-flex align-items-center justify-content-center w-100 row" >
                        <div class="col-md-6 p-3 mr-2" >
                            <div>
                                <img src={image2} class="w-100" />
                            </div>
                            <div class="text-center" >
                                <h2>La sécurité par NovaDrive</h2>
                                <p> Votre sécurité est notre priorité. C'est pourquoi, nous vous proposons le meilleur des équipements de sécurité Renault pour vous protéger</p>
                                <Button>Découvrer  <MdArrowForwardIos /></Button>
                            </div>
                        </div>
                        <div class="col-md-6 container" >
                            <div class="text-center" >
                                <h2>Innovation au Cœur de Nos Pneumatiques</h2>
                                <p >  Chez Novadrive, nos pneus combinent technologie avancée, sécurité et durabilité. Conçus pour s’adapter à tous les terrains, ils assurent performance et respect de l’environnement.</p>
                                <Button>En savoir plus   <MdArrowForwardIos /></Button>
                            </div>
                            <div>
                                <img src={image3} class="w-75" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer container" >
                    <div class="desc row d-flex align-items-center justify-content-between " >
                        <div class="col-md-6" >
                            <div class="w-75 mb-4" >
                                <TbWorld />
                                <h3>À propos de nous</h3>
                                <p>Fournisseur leader en pièces automobiles, nous mettons à disposition une large gamme de produits de qualité pour tous types de véhicules.</p>
                            </div>
                            <div class="w-75 mb-4" >
                                <CiLock />
                                <h3>Garantie et sécurité</h3>
                                <p>Toutes nos pièces sont certifiées et accompagnées d’une garantie fabricant. Votre satisfaction et la sécurité de vos véhicules sont au cœur de nos priorités</p>
                            </div>
                        </div>
                        <div class="col-md-6" >
                            <div class="w-75 mb-4" >
                                <CgProfile />
                                <h3>Nos recommandations </h3>
                                <p>Faites confiance à notre expertise pour choisir les meilleures pièces adaptées à votre voiture. Notre équipe est là pour vous guider avec des conseils personnalisés.</p>
                            </div>
                            <div class="w-75 mb-4" >
                                <MdOutlineCalendarMonth />
                                <h3>Disponibilité </h3>
                                <p>Profitez d’un stock toujours disponible et d’une livraison rapide pour que vos réparations ne prennent aucun retard</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="intern-footer row d-flex align-items-center justify-content-between">
                        <div class="col-md-6" >
                            <p class="mb-5 logo" >NovaDrive</p>
                            <div class="w-25 d-flex align-items-center justify-content-between" >
                                <FaFacebook />
                                <FaLinkedin />
                                <FaYoutube />
                                <FaInstagram />
                            </div>
                        </div>
                        <div class="col-md-6 d-flex" >
                            <div class="col-md-6" >
                                <h5>Services</h5>
                                <ul>
                                    <li>Resaux</li>
                                    <li>Entretien</li>
                                    <li>NovaDrive Service</li>
                                </ul>
                            </div>
                            <div class="col-md-6" >
                                <h5>À PROPOS</h5>
                                <ul>
                                    <li>Rendez-vous</li>
                                    <li>Nous contacter</li>
                                    <li>Carrières</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
