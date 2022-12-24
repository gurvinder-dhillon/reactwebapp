import CardComp from './Card';
import Counter from './Counter';
const blogs = {
    post1: {
        category: "World",
        title: "Featured Post",
        date: "Nov 12",
        desc: "This is a wider card with supporting text below as a natural lead-in to additional content."
    },
    post2: {
        category: "Design",
        title: "Post title",
        date: "Nov 11",
        desc: "This is a wider card with supporting text below as a natural lead-in to additional content."
    }
}
function CardContainer() {
    return (
        <div >
            <div className="row mb-2">
                <CardComp blog={blogs.post1} />
                <CardComp blog={blogs.post2} />
            </div>
            <Counter />
        </div>
    );
};

export default CardContainer;
