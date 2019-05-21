let blogPost = ({title,body,author,views,author,body}) =>{
    return{
        title,
        body,
        author,
        views,
        comments:{
            author,
            body
        }
    }
}

console.log(blogPost('a','c','v','v','d','d','d'));