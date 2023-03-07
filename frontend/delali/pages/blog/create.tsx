import { FaMapPin } from "react-icons/fa";
import Accordion from "../../components/Accordion";
import Dashboard from "../../components/Dashboard";
import Editor from "../../components/Editor";
import GlassyButton from "../../components/GlassyButton";

const CreateBlogPost = () => {
  return (
    <Dashboard>
      <h2 className="text-3xl">Add New Post</h2>
      <div className="flex gap-4">
        <main className="flex flex-col gap-4 h-screen  w-full">
          <input
            type="text"
            placeholder="Enter title here"
            className="w-full bg-white"
          />

          <div className="flex-grow">
            <Editor />
            <GlassyButton name="Post" />
          </div>
        </main>
        <aside className="flex flex-col gap-6">
          <Accordion title="Publish">
            <p>Status</p>
          </Accordion>
          <Accordion title="Categories">
            <div className="flex">
              <div className="w-6 h-6">
                <FaMapPin />
              </div>
              <span>Status:</span> <span className="font-bold">Draft</span>
            </div>
          </Accordion>
          <Accordion title="Tags">
            <p>Status</p>
          </Accordion>
        </aside>
      </div>
    </Dashboard>
  );
};

export default CreateBlogPost;
