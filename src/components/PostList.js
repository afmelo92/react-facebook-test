import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://i.pravatar.cc/150?img=1'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            content:
              'A Rocketseat está sempre em busca de novos membros para o \
              time e, geralmente, ficamos de olhos em quem se destaca no Bootcamp,\
               inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, \
               se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no \
               Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Gabriel Lisboa Alcantara',
          avatar: 'https://i.pravatar.cc/150?img=8'
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza? \
        Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! \
        Alguém mais aí fazendo? Comenta na publicação para trocarmos uma ideia',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            content: 'Conteúdo do comentário'
          },
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            content: 'Conteúdo do comentário'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
