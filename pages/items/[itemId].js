 import { useRouter } from "next/router";


export default function Post({product}){
    const router = useRouter()
    if(router.isFallback){
        return(<div>Loading...</div>)
    }    
    return(
    <><h2>{product.id} {product.title} {product.price}</h2>
    <p>{product.description}</p>
    </>)
}

export async function getStaticPaths(){
    const response = await fetch(`http://localhost:4000/items`);
    const data = await response.json()

    const paths = data.map(post=>{
        return{
            params:{
                postId:`${post.id}`
            }
        }
    })
    return{
        paths:[
            {
                params:{itemId:'1'}
            },
            {
                params:{itemId:'2'}
            },
            {
                params:{itemId:'3'}
            }

        ],
        // paths,
        fallback:true 
       }
}
export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`http://localhost:4000/items/${params.itemId}`)
    const data = await response.json()

    if(!data.id){
        return {
            notFound:true
        }
    }
    return{
        props:{
            product:data
        },
        revalidate:10,  
    }
}

