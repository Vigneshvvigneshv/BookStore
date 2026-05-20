import BookCard from "../components/BookCard";
import Layout from "../components/Layout";
import { SectionContainer,Heading1,CardSection } from "../styles/Home.styles";
import { books } from "../data/books";
import BookList from "../components/BookList";
import EmptyState from "../components/EmptyState";
import Modal from "../components/Modal";
function Home(){
    return (
        <Layout>
            <SectionContainer>
                <Heading1>Online Book Purchasing Platform</Heading1>
                <p>This platform provides a structured environment for browsing and purchasing books across multiple genres. The focus is on clarity, predictable navigation, and a distraction-free user experience.</p>
                <p>Books are organized by category and price, allowing users to evaluate available options efficiently and make informed purchasing decisions.</p>
            </SectionContainer>

            <SectionContainer>
                <h2>How the Platform Works</h2>
                <ul>
                    <li>Browse books by genre</li>
                    <li>Search and filter using multiple criteria</li>
                    <li>View detailed information on dedicated pages</li>
                    <li>Add books to a globally managed cart</li>
                </ul>
            </SectionContainer>
            <CardSection>
                <h1>Featured Books</h1>
                    <BookList books={books.slice(0,6)}></BookList>     
            </CardSection>
        </Layout>
    
    )
}

export default Home;