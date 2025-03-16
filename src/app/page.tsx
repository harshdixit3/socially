import {currentUser} from "@clerk/nextjs/server";
import CreatePost from "@/components/CreatePost";
import WhoToFollow from "@/components/WhoToFollow";
import PostCard from "@/components/PostCard";
import {getPosts} from "@/actions/post.action";
import {getDbUserId} from "@/actions/user.action";



const Page = async () => {
    const user = await currentUser()
    const posts = await getPosts();
    const dbUserId = await getDbUserId();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
          {user ?  <CreatePost /> : null}

          <div>
              {posts.map((post) => (
                  <PostCard post={post} key={post.id} />
              ))}
          </div>
      </div>
        <div className="hidden lg:block lg:col-span-4 sticky top-20">
            <WhoToFollow />
        </div>
    </div>
  );
};
export default Page;
