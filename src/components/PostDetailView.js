import React, { Component } from 'react';
import Layout from './Layout';
import { UserConsumer } from '../contexts/UserContext';
 
 export default class PostDetailView extends Component {
   

   render() {
     const { postId, onPostEdit, userId, title, body} = this.props
     
     return (
       <Layout title="게시물 내용">
         <h1>게시글</h1>
         <UserConsumer>
           {({id}) => {
             if(userId === id){
               return  <button onClick={() => onPostEdit(postId)}>수정하기</button>
             }
           }}
         </UserConsumer>
         <h2>{title}</h2>
         <p>{body}</p>
       </Layout>
     )
   }
 }
 