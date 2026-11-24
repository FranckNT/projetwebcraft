

export default function Header() { 
    return ( 
      <header className="header">
        <Link className="brand" to="/">WebCraft</Link>
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/">Projets</NavLink>
            <NavLink to="/">Formations</NavLink>
            <NavLink to="/">Inscription</NavLink>
        </nav>
      </header>
    );
}
