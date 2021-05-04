const repositoryName = 'shiny-counter';

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Shiny counter for pokémon games</p>

          <a href="#">Link para o repositório</a>
        </li>

        <li>
          <strong>nc-shiny-counter</strong>
          <p>Shiny counter for pokémon games</p>

          <a href="#">Link para o repositório</a>
        </li>

        <li>
          <strong>nc-shiny-counter</strong>
          <p>Shiny counter for pokémon games</p>

          <a href="#">Link para o repositório</a>
        </li>

        <li>
          <strong>nc-shiny-counter</strong>
          <p>Shiny counter for pokémon games</p>

          <a href="#">Link para o repositório</a>
        </li>
      </ul>
    </section>
  );
}