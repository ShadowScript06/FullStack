import Link from "next/link";

function page() {
    const posts=[1,2,3];
  return (
    <div>
        <h1>Blogs</h1>

        {posts.map((id)=>(
            <div key={id}>
                <Link href={`/blog/${id}`}>BLOG {id}</Link>
            </div>
        ))}
    </div>
  )
}

export default page