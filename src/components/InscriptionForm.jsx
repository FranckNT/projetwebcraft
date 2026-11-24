import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch.jsx';
import { validationInscription } from '../utils/validation.js';

// import des composants 

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function InscriptionPage() {

    // on charge la liste des formation depuis l'API
    const location = useLocation();
    const { data, isLoading } = useFetch(
        'https://webcraft-api.vercel.app/data/courses.json',
);

    // destructuration de valeurs utilisant useState puis j'ai cree un objet qui contient des champs
   const [values, setValues] = useState({
    fullName; '', 
    email: '',
    phone:'',
    course: location.state?.course || '', 
    message: '',
    acceptTerms: false,
    });

    // erreurs dde validation et si l'inscription a été validé  
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    // remonter de manière automatique le haut de la page
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, []);

    // met a jour la valeur qui corrrespond au champ qui a été modifié
    function handleChange(event) {
        const {
            name,
            value,
            checked,
            type
        } = event.target;

        setValues((current) => ({...current, [name]: type === 'checkbox' ?checked : value ?}));
    }
// cava tcheck le formulaire juste avant l'envoi 
    function handleSubmit(event) {
       event.preventDefault();

       const validationErrors = validationInscription(values);
       setErrors(validationErrors);

       // si aucune erreur n'est constaté le formulaire est valide
       if (!Object.keys(validationErrors).length) {
        setSuccess(true);

        // cava reintialiser l'ensemble des champs après validation
        setValues({ 
            fullName: '',
             email: '', 
             phone: '', 
             course: '', 
             message: '', 
             acceptTerms: false});
       }
    }


}