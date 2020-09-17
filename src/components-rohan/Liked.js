import react from 'React';


const Liked =() => {

    <>
    <h2 className="word-heading">Liked Words</h2>

    <ul className="list">
        <div className="card list-items " >
            <Link 
            to={ '/words/${ term.id }' } 
            key={ term.id } 
            className="list-items-nav"  
            >
                { term.word}
            </Link>

            <p className='intro'>{ term.description }</p>

            <Heart id={ term.id } like={ term.liked} />
        </div> 
    </ul> 

    </>
           
}

export default Liked;