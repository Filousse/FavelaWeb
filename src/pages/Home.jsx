import React from 'react';
import Navigation from '../components/Navigation';

import { Button, ListGroup, Badge, Accordion } from 'react-bootstrap'; 
import Carroussel from "../components/Carroussel";

const Home = () => {
    return (
        <>
            <Navigation/>
            <div className="page">

                {/* HOME SESSION */}

                <h1 className="text-center blueText mt-2">L'intégration Web &amp; Humain Franco Brésilien</h1> 
                <div className="row">
                    <div className="col">
                        <br></br>
                        <p className="text-justify display-6" >Développez <strong className="greenText underlined">sereinement </strong>votre entreprise en externalisant l'intégration web à partir de vos PSD.</p> 
                        <br></br>
                        <h5 className="greenText">La qualité, facile, rapide et solidaire</h5> 
                        <br></br>                 
                        <Button className="btn btn-success m-2">GET STARTED</Button>   
                        <Button>Favela Web School</Button> 
                    </div>
                    <div className="col">
                        <img src="./img/home/homePage1.png" className="imgHomePage1" alt="HomePage1" />
                    </div>
                </div>
                <br></br>
                <br></br>

                {/* ADAPTATION SESSION */}

                <h1 className="text-center blueText mt-4">Parfaitement <strong className="greenText underlined">adapté</strong> à votre entreprise</h1>
                <h5 className="text-center pb-4 mb-4 ">
                <strong >Travailler avec nous est facile et sans problème.</strong></h5>
                <div className="col-sm">
                    <div className="row">
                            <div className="col-sm-6">
                                <div className="card mb-2">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <img width="80" height="80" src="./img/home/006-transparency.png" alt="transparency"/>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="mt-3">
                                                <h5  className="blueText underlined">TRANSPARENT </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                        <div className="col-sm-12 text-center">
                                            item.name Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus repellat enim obcaecati esse, fugiat exercitationem provident. Obcaecati, earum nostrum quo sapiente ex aspernatur qui exercitationem ab non consectetur nemo aut!
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card mb-2">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <img width="80" height="80" src="./img/home/003-contact.png" alt="transparency"/>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="mt-3">
                                                <h5 className="blueText underlined">TOUJOURS JOINGNABLE </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                        <div className="col-sm-12 text-center">
                                            item.name Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus repellat enim obcaecati esse, fugiat exercitationem provident. Obcaecati, earum nostrum quo sapiente ex aspernatur qui exercitationem ab non consectetur nemo aut!
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card mb-2">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <img width="80" height="80" src="./img/home/001-handshake.png" alt="transparency"/>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="mt-3">
                                                <h5 className="blueText underlined">GAGNANT-GAGNANT </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                        <div className="col-sm-12 text-center">
                                            item.name Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus repellat enim obcaecati esse, fugiat exercitationem provident. Obcaecati, earum nostrum quo sapiente ex aspernatur qui exercitationem ab non consectetur nemo aut!
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card mb-2">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <img width="80" height="80" src="./img/home/004-bandwidth.png" alt="transparency"/>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="mt-3">
                                                <h5 className="blueText underlined">RESPECT DES DÉLAIS</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                        <div className="col-sm-12 text-center">
                                            item.name Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus repellat enim obcaecati esse, fugiat exercitationem provident. Obcaecati, earum nostrum quo sapiente ex aspernatur qui exercitationem ab non consectetur nemo aut!
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card mb-2">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <img width="80" height="80" src="./img/home/002-language.png" alt="transparency"/>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="mt-3">
                                                <h5 className="blueText underlined">NORMES FRANÇAISES</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                        <div className="col-sm-12 text-center">
                                            item.name Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus repellat enim obcaecati esse, fugiat exercitationem provident. Obcaecati, earum nostrum quo sapiente ex aspernatur qui exercitationem ab non consectetur nemo aut!
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card mb-2">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <img width="80" height="80" src="./img/home/005-confidential.png" alt="transparency"/>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="mt-3">
                                                <h5 className="blueText underlined">SÉCURISER</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-12 text-center">
                                                item.name Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus repellat enim obcaecati esse, fugiat exercitationem provident. Obcaecati, earum nostrum quo sapiente ex aspernatur qui exercitationem ab non consectetur nemo aut!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                {/* SERVICES SESSION */}

                <div class="contenant">
                <img className="bgjungle" src="../img/home/jungleBG.png" alt="jungle"/>
                    <div class="texte_centrer">
                        <h1 >Trois étapes <strong className="blueText underlined">simples</strong> à compléter pour un projet réussi avec nous</h1>
                        <ListGroup  className="pt-2" numbered>
                            <ListGroup.Item                             
                                className="d-flex justify-content-between align-items-start"
                            >
                                <Badge bg="primary" pill>
                                1
                                </Badge>
                                <div className="ms-2 me-auto">
                                <div className="fw-bold">Questions posées, réponses données.</div>
                                Discutez votre "Product Owner" responsable de l'engagement de vos besoins, de votre calendrier et de vos préférences en matière de communication.
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item                             
                                className="d-flex justify-content-between align-items-start"
                            >
                                <Badge bg="primary" pill>
                                2
                                </Badge>
                                <div className="ms-2 me-auto">
                                <div className="fw-bold">Nos codeurs commencent à faire leur magie.</div>
                                Vous pouvez contacter le "Product Owner" à tout moment pour poser des questions, proposer des suggestions ou simplement savoir comment les choses se passent.                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item                             
                                className="d-flex justify-content-between align-items-start"
                            >
                                <Badge bg="primary" pill>
                                3
                                </Badge>
                                <div className="ms-2 me-auto">
                                <div className="fw-bold">Nous livrons votre projet à temps.</div>
                                Vous nous faites part de vos commentaires. Tout va bien ? On en profite pour vous montrer les projets de la Favela Web School dont vous avez contribués.</div>
                            </ListGroup.Item>
                        </ListGroup>
                        <br></br>
                        <Button className="btn btn-lg btn-warning" >Prendre rendez-vous</Button>
                    </div>
                </div>
                <div className="bgDark pt-4">
                        <h1 className="text-light pt-4 text-center underlinedSmall" >Nos services</h1>
                    <div className="row p-4">
                        <div className="col">
                            <img width="400px" className="p-4 ml-4" src="../img/home/manOfSkills.png" alt="manOfSkills"/>
                        </div>
                        <div className="col m-4">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item  eventKey="0">
                                <Accordion.Header>
                                    WordPress Developpement
                                </Accordion.Header>
                                <Accordion.Body>
                                    Nous créons des thèmes WordPress personnalisés dotés de fonctionnalités utiles pour répondre à toutes les exigences commerciales. Vous préférez les constructeurs de pages comme WPBakery et Elementor ? Nous avons ce qu'il vous faut.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    E-Commerce Developpement
                                </Accordion.Header>
                                <Accordion.Body>
                                    Notre équipe est composée de développeurs Shopify de classe mondiale qui ont créé des milliers de boutiques en ligne. Vous voulez utiliser WooCommerce pour les ventes sur Internet ? Magento ? Dites-nous simplement.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Développement Front-End
                                </Accordion.Header>
                                <Accordion.Body> 
                                    Conversion de conception en HTML et CSS, développement JavaScript natif, frameworks JS (Angular, React, Vue), modèles d'e-mails et bannières HTML5, etc.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    Développement au plus vite
                                </Accordion.Header>
                                <Accordion.Body>
                                    Pressé par le temps ? Vous avez une tâche urgente à accomplir ? Commandez notre service de développement ASAP et respirez à nouveau librement.
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Button className="btn btn-primary m-4">Plus d'info</Button> 
                        </div>
                    </div>

                {/* TEAM SESSION */}

                <Carroussel />
                </div>  

                  {/* FAVELA WEB SCHOOL */}
                    <div class="contenantSchool">
                    <img className="bgFavela" src="../img/home/bgFavela.png" alt="jungle"/>                      
                </div>
                <div className="row contentFws">
                     
                            <div className="col m-4">
                                <br></br>
                                <h1 className="text-center mt-4 FWSTitle "><strong className="underlined">Favela Web School</strong></h1>
                                <br></br>
                                <p className="text-justify display-7" >Le Formation Web <strong className="blueText underlined">gratuite</strong> enseignée par les développeur de la <span className="greenText underlined">"Favela Web"</span> en partenariat avec l'ong Carioca "Instituto Tocando em Você".</p>     
                                <img src="./img/home/logoITV.png" width="100px" alt="ITV"/>
                                <br></br><br></br>
                                <Button className="m-2" >Visiter</Button>
                                <Button>Faire un don de matériel</Button>
                            </div>
                            <div className="col">
                                <img src="./img/home/homeSchool.png" alt="homeSchool" />       
                            </div>
    
        {/* Contact */}

                    <div className="row">
                        <h1 className="text-center m-4 pb-4 "><strong className="blueText underlined">Contact</strong></h1>
                    </div>
                    <div className="row cardContact">
                        <div className="col">
                        <div className="contact-infos">
                            <div className="address">
                                <div className="m-4 ">
                                <h5 >Téléphone : (What's App)</h5>
                                <h5 className="greenText" >+33 6 63 36 46 90</h5>
                                <h5>Email :</h5>
                                <h5 className="blueText" >brasseur.blz@gmail.com</h5>
                                </div>
                            </div>
                            {/* <SocialNetwork /> */}
                        </div>
                    </div>
                        <div className="col">
                            <h5>Adresse :  (France)</h5>
                            <h5 className="blueText">1 rue de la louisiane (Apt D105)<br></br> 31200 Toulouse (France)</h5>
                            <h5>Adresse : (Brésil)</h5>
                            <h5 className="greenText">R. Gen. Roca, 362 - Tijuca, Rio de Janeiro <br></br> RJ, 20521-070, Brésil</h5>
                        </div>
                  
                    </div>
                    
                </div>
                





        </>
    );
};

export default Home;