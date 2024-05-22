import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    "Accept": "application/vnd.github+json",
    // "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
  }
})

export default {
  getUser(name) {
    return api.get(`/users/${name}`);
  },
  getRepos(name) {
    return api.get(`/users/${name}/repos`);
  },
  getRepo(name, repo) {
    return api.get(`/repos/${name}/${repo}`);
  },
};