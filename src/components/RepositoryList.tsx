import { useEffect, useState } from 'react';
import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';

type Repository = {
  id: string,
  name: string,
  description: string,
  html_url: string,
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/jotaEmeCortat/repos')
      .then((response) => response.json())
      .then((json) => setRepositories(json));
  }, []);

  return (
    <section className="repository-list">
      <h1>List of repositories</h1>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
