import PostsRepository from './postsRepository';

const repositories = {
    posts: PostsRepository,
    //other repositories
};

export const RepositoryFactory  = {
    get: name => repositories[name]
};