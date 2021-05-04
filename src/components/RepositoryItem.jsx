export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name || 'nc-no-name'}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.link} target="_blank">Acessar o repositório</a>
    </li>
  );
}