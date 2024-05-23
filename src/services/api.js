import axios from 'axios';
console.log(import.meta.env);
const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    "Accept": "application/vnd.github+json",
    "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
  }
})

export default {
  getUser(name) {
    return api.get(`/users/${name}`);
  },
  getRepos(name, options = {}) {
    return api.get(`/users/${name}/repos`, {
      params: {
        sort: 'updated',
        direction: 'desc',
        per_page: 10,
        ...options
      }
    });
  },
  getRepo(name, repo) {
    return api.get(`/repos/${name}/${repo}`);
  },
};