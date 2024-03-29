import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps){
   const [likeCount, setLikeCount] = useState(0);

   function handleDeleteComment(){
      onDeleteComment(content);
   }

   function handleLikeComment() {
    setLikeCount(likeCount + 1);
   }

   return (
    <div className={styles.comment}>
        <Avatar 
        hasBorder={false} 
        src="https://github.com/diego3g.png" 
        alt='' /> 

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
           <header>
            <div className={styles.authorAndTime}>
                <strong>Diego Fernandes</strong>
                <time title="23 de Maio às 13:11h" dateTime="2023-05-11 13:11:20">há 10 minutos</time>
            </div>

             <button onClick={handleDeleteComment} title='Deletar comentário'>
                 <Trash size={24}/>
             </button>
           </header>

           <p>{content}</p>
        </div>
         <footer>
           <button onClick={handleLikeComment}>
             <ThumbsUp />
             Aplaudir <span>{likeCount}</span>
           </button>
         </footer>
      </div>
    </div>
   )
}