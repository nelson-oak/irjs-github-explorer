interface IRepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
};

export function RepositoryItem(props: IRepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url} target="_blank">Acessar o repositório</a>
    </li>
  );
}