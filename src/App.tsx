//JSX =JavaScript + XML (HTML)
import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';



const posts: PostType[] = [
  {
         id: 1,
         author:{
         avatarUrl:'https://github.com/LeticiabarrosProjeto.png',
         name: 'Leticia Barros',
         role:'Web Junior Developer', 
  },
         content: [
    { type: 'paragraph', content: 'Fala Galera 👋🏻',}, 
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que desenvolvi'},
    { type: 'paragraph', content:  'no curso da Rocketseat!'},
    { type: 'link', content:'github.com/LeticiabarrosProjeto'}
  ],
         publishedAt: new Date('2023-05-24 16:00:00'),
 },
  {
    id: 2,
      author:{
      avatarUrl:'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role:'CTO @Rocketseat', 
  },
  content: [
    { type: 'paragraph', content: 'Fala Galera 👋🏻',}, 
    { type: 'paragraph', content: 'Acabei de subor mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da'},
    { type: 'paragraph', content:  'Rocketseat. O nome do projeto é DoctorCare.'},
    { type: 'link', content:'ane.design/doctorcare'},
  ],
  publishedAt: new Date('2023-05-23 18:00:00'),
 },
];
 
export function App() {
  return (
    <div> 
      <Header />
      
      <div className={styles.wrapper}>

      <Sidebar />
        <main>
        {posts.map(post => {
          return (
           <Post 
           key={post.id}
           post={post}
           />
          )
        })}
        </main>
      </div>  
    </div>
  )
}
