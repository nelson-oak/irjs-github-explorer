import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

const repository = {
  name: 'nc-shiny-counter-backend',
  description: 'Shiny counter for pokémon games',
  link: 'https://github.com/nelson-oak/nc-shiny-counter-backend',
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}